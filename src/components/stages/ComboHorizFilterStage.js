import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

import "./ComboHorizFilterStage.css";

gsap.registerPlugin(ScrollTrigger, Flip);

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

    // Filter gallery (Flip)
    const allCheckbox = q("#all")[0];
    const filters = gsap.utils.toArray(q(".filter"));
    const items = gsap.utils.toArray(q(".item"));

    if (allCheckbox && filters.length && items.length) {
      const updateFilters = () => {
        const state = Flip.getState(items);

        const classes = filters
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => "." + checkbox.id);

        const matches = classes.length ? gsap.utils.toArray(q(classes.join(","))) : [];

        items.forEach((item) => {
          item.style.display = matches.includes(item) ? "inline-flex" : "none";
        });

        Flip.from(state, {
          duration: 0.7,
          scale: true,
          ease: "power1.inOut",
          stagger: 0.08,
          onEnter: (els) =>
            gsap.fromTo(els, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.6 }),
          onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0, duration: 0.6 }),
        });

        allCheckbox.checked = matches.length === items.length;
      };

      const onFilterClick = () => updateFilters();
      filters.forEach((cb) => cb.addEventListener("click", onFilterClick));
      cleanups.push(() => filters.forEach((cb) => cb.removeEventListener("click", onFilterClick)));

      const onAllClick = () => {
        filters.forEach((cb) => (cb.checked = allCheckbox.checked));
        updateFilters();
      };
      allCheckbox.addEventListener("click", onAllClick);
      cleanups.push(() => allCheckbox.removeEventListener("click", onAllClick));

      updateFilters();
    }

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

      <section className="panel plain">
        <h3>Placeholder image gallery.</h3>
      </section>

      <section className="container">
        <div className="buttons-container">
          <div className="checkboxes">
            <label className="tag-button" htmlFor="all">
              <input type="checkbox" id="all" defaultChecked />
              All
              <span className="checked">All</span>
            </label>

            <label className="tag-button" htmlFor="Elephants">
              <input type="checkbox" id="Elephants" className="filter" defaultChecked />
              Elephants
              <span className="checked">Elephants</span>
            </label>

            <label className="tag-button" htmlFor="Ivory">
              <input type="checkbox" id="Ivory" className="filter" defaultChecked />
              Ivory
              <span className="checked">Ivory</span>
            </label>

            <label className="tag-button" htmlFor="People">
              <input type="checkbox" id="People" className="filter" defaultChecked />
              People
              <span className="checked">People</span>
            </label>
          </div>
        </div>

        <div className="box-container">
          <div className="item Elephants" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2025/12/30145246/TestPics_JulieLarsen_1535.jpeg')" }} />
          <div className="item Elephants" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2025/12/30145325/TestPics_JulieLarsen_6422.jpeg')" }} />
          <div className="item Elephants" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2025/12/30145329/TestPics_JulieLarsen_6435.jpeg')" }} />
          <div className="item Ivory" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2025/12/30145259/TestPics_JulieLarsen_2785.jpeg')" }} />
          <div className="item Ivory" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2025/12/30145255/TestPics_JulieLarsen_2641.jpeg')" }} />
          <div className="item People" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2016/08/01192305/2-Jenny-work-fun-JulieLarsenMahercWCS.jpg')" }} />
          <div className="item People" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2016/08/01192307/5-detection-dogs-JulieLarsenMahercWCS.jpg')" }} />
          <div className="item People" style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/20/2025/12/30145251/TestPics_JulieLarsen_1656.jpeg')" }} />
        </div>
      </section>

      <section className="panel plain">
        <h3>Thats it for now!</h3>
      </section>
    </div>
  );
}
