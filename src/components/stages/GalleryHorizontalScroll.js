import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./GalleryHorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function ComboHorizFilterStage() {
  const rootRef = useRef(null);

useEffect(() => {
  const root = rootRef.current;
  if (!root) return;

  const cleanups = []; // <- store listener removals etc.

  const ctx = gsap.context(() => {
    const q = gsap.utils.selector(root);

    // Horizontal scroll section
    const horizontalSections = gsap.utils.toArray(q(".horiz-gallery-wrapper"));
    horizontalSections.forEach((sec) => {
      const pinWrap = sec.querySelector(".horiz-gallery-strip");
      if (!pinWrap) return;

      const refresh = () => {
        
        const pinWrapWidth = pinWrap.scrollWidth;
        const horizontalScrollLength = pinWrapWidth - window.innerWidth;

ScrollTrigger.getAll()
  .filter((t) => t.trigger === sec)
  .forEach((t) => t.kill());

        gsap.to(pinWrap, {
          x: -horizontalScrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            pin: sec,
            scrub: true,
            start: "top top",
            end: () => `+=${pinWrapWidth}`,
            invalidateOnRefresh: true,
          },
        });
      };

      refresh();
      ScrollTrigger.addEventListener("refreshInit", refresh);
      cleanups.push(() => ScrollTrigger.removeEventListener("refreshInit", refresh));
    });

    ScrollTrigger.refresh();
  }, rootRef);

  return () => {
    // remove any listeners we attached manually
    cleanups.forEach((fn) => fn());

    // kill all gsap/ScrollTrigger things created inside this context
    ctx.revert();
  };
}, []);


  return (
    <div className="stage-combo" ref={rootRef}>
      <section className="panel plain">
        <h1>Below are some placeholder images - testing the animation </h1>
      </section>

      <section id="portfolio">
        <div className="container-fluid">
          <div className="horiz-gallery-wrapper">
            <div className="horiz-gallery-strip">
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_1535/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_1656/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_2641/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_2785/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_3720/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_3765/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_5051/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_6067/" alt="" />
              </div>
              <div className="project-wrap">
                <img src="https://news.mongabay.com/testpics_julielarsen_6316/" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
