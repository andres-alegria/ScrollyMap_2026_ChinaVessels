import { useEffect, useState } from 'react';
import { setOpacityOnAction } from './map-hooks-utils';

export const useScrollFunctionality = ({
  loaded,
  map,
  currentAction,
  chapters,
  currentChapterId,
  showMarkers,
  setMarkerPosition,
  setExternalLayersOpacity,
  externalLayersOpacity,
  externalLayers
}) => {
  useEffect(() => {
    if (!loaded || !map) return;

    const externalLayersIds = (externalLayers || []).map((l) => l.id);

    // helper: resolve "trackAnimation.start" -> window.trackAnimation.start
    const resolveCallback = (callbackStr) =>
      callbackStr
        .split('.')
        .reduce((o, k) => (o ? o[k] : undefined), window);

    // helper: should the chapter system control the camera (map.flyTo)?
    const shouldChapterControlCamera = (chapter) => {
      const enters = chapter?.onChapterEnter || [];
      const trackStartStep = enters.find(
        (s) => s && s.callback === 'trackAnimation.start'
      );

      if (!trackStartStep) return true; // no track animation, normal chapter flyTo

      const cam = trackStartStep?.options?.camera;

      // If the chapter explicitly sets a camera mode that is NOT "chapter",
      // we must NOT flyTo the chapter location here, or it overrides the track camera logic.
      if (cam && cam !== 'chapter') return false;

      // Otherwise, chapter controls camera as usual
      return true;
    };

    if (currentChapterId && currentAction === 'enter') {
      const chapter = (chapters || []).find((c) => c.id === currentChapterId);
      if (!chapter) return;

      // Only apply chapter location if we are allowed to control the camera
      if (chapter.location && shouldChapterControlCamera(chapter)) {
        map.flyTo(chapter.location);
      }

      // Markers: your "center" is [lon, lat] in the rest of your codebase,
      // so set markerPosition accordingly.
      if (showMarkers && chapter.location && Array.isArray(chapter.location.center)) {
        const [markerLongitude, markerLatitude] = chapter.location.center;
        setMarkerPosition({
          latitude: markerLatitude,
          longitude: markerLongitude
        });
      }

      setOpacityOnAction(
        chapter,
        'onChapterEnter',
        map,
        externalLayersOpacity,
        setExternalLayersOpacity,
        externalLayersIds
      );

      // Run optional callbacks in onChapterEnter
      (chapter.onChapterEnter || [])
        .filter((s) => s && s.callback)
        .forEach((s) => {
          const fn = resolveCallback(s.callback);
          if (typeof fn === 'function') fn(s.options);
        });
    }

    if (currentChapterId && currentAction === 'leave') {
      const chapter = (chapters || []).find((c) => c.id === currentChapterId);
      if (!chapter) return;

      setOpacityOnAction(
        chapter,
        'onChapterExit',
        map,
        externalLayersOpacity,
        setExternalLayersOpacity,
        externalLayersIds
      );

      // Run optional callbacks in onChapterExit
      (chapter.onChapterExit || [])
        .filter((s) => s && s.callback)
        .forEach((s) => {
          const fn = resolveCallback(s.callback);
          if (typeof fn === 'function') fn(s.options);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, map, currentAction, currentChapterId]);
};

export const useHandleResize = (callback) => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const getSize = () => {
      if (size[0] !== window.innerWidth || size[1] !== window.innerHeight) {
        callback({ width: window.innerWidth, height: window.innerHeight });
        setSize([window.innerWidth, window.innerHeight]);
      }
    };

    getSize();
    window.addEventListener('resize', getSize);
    return () => window.removeEventListener('resize', getSize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return size;
};
