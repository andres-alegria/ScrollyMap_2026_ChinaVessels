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
    if (loaded && map) {
      const externalLayersIds = externalLayers.map((l) => l.id);

      if (currentChapterId && currentAction === 'enter') {
        const chapter = chapters.find((c) => c.id === currentChapterId);
        map.flyTo(chapter.location);
        if (showMarkers) {
          const [markerLatitude, markerLongitude] = chapter.location.center;
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
  .filter(s => s && s.callback)
  .forEach(s => {
    const fn = s.callback.split(".").reduce((o, k) => (o ? o[k] : undefined), window);
    if (typeof fn === "function") fn(s.options);
  });


      }
      if (currentChapterId && currentAction === 'leave') {
        const chapter = chapters.find((c) => c.id === currentChapterId);
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
  .filter(s => s && s.callback)
  .forEach(s => {
    const fn = s.callback.split(".").reduce((o, k) => (o ? o[k] : undefined), window);
    if (typeof fn === "function") fn(s.options);
  });
      
        
      }
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
    }
    getSize();
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return size;
};
