window.mfnpSequence = function mfnpSequence() {
  const steps = [
    { center: [31.95, 2.27], zoom: 11.3, pitch: 45, bearing: 20, duration: 3000 },
    { center: [32.07, 2.15], zoom: 12.2, pitch: 55, bearing: 95, duration: 3000 },
    { center: [31.88, 2.35], zoom: 12.8, pitch: 60, bearing: 140, duration: 3000 }
  ];

  let i = 0;
  const run = () => {
    if (i >= steps.length) return;
    if (window.map) window.map.flyTo({ ...steps[i], essential: true });
    const d = steps[i].duration || 3000;
    i += 1;
    setTimeout(run, d + 400);
  };
  run();
};
