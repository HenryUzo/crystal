import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { chapters } from "../data/chapters";
import StoryVisual from "./StoryVisual";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroStory() {
  const rootRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    // Mobile and reduced-motion users get an ordinary, fully readable sequence.
    const media = gsap.matchMedia();
    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const frames = Array.from(root.querySelectorAll<HTMLElement>("[data-story-frame]"));
      const progress = progressRef.current;
      const counter = counterRef.current;
      if (frames.length !== chapters.length || !progress) return;

      gsap.set(frames, { autoAlpha: 0, y: 28 });
      gsap.set(frames[0], { autoAlpha: 1, y: 0 });
      gsap.set(progress, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (counter) {
              const current = Math.min(chapters.length, Math.floor(self.progress * chapters.length) + 1);
              counter.textContent = String(current).padStart(2, "0");
            }
          },
        },
      });

      timeline.to(progress, { scaleX: 1, duration: 3, ease: "none" }, 0);

      for (let index = 1; index < frames.length; index++) {
        const start = index === 1 ? 0.8 : 1.95;
        timeline.to(frames[index - 1], { autoAlpha: 0, y: -28, duration: 0.38 }, start);
        timeline.fromTo(
          frames[index],
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, duration: 0.48, immediateRender: false },
          start + 0.07,
        );
      }
    });

    return () => media.revert();
  }, { scope: rootRef });

  return (
    <section className="story-scroller" id="story" ref={rootRef} aria-label="Introducing Crystal Kizor">
      <div className="story-stage">
        <header className="site-header">
          <a href="#story" className="site-header__logo" aria-label="Crystal Kizor, back to top">
            <span className="site-header__monogram">CK<span className="site-header__dot">.</span></span>
            <span className="site-header__brand">CRYSTAL KIZOR</span>
          </a>
          <nav className="site-header__nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#ecosystem">Ecosystem</a>
            <a className="site-header__contact" href="#connect">Let's connect <span aria-hidden="true">↗</span></a>
          </nav>
        </header>

        <div className="hero-identity">
          <div>
            <span className="hero-identity__label">An evolving body of work</span>
            <h1>Crystal <em>Kizor.</em></h1>
          </div>
          <p>Architect <span>·</span> Designer <span>·</span> Entrepreneur</p>
        </div>

        <div className="story-frames">
          {chapters.map((chapter) => (
            <article key={chapter.id} className="story-frame" data-story-frame>
              <div className="story-frame__copy">
                <div className="story-frame__eyebrow">
                  <span className="story-frame__eyebrow-index">{chapter.number} / 03</span>
                  <span className="story-frame__eyebrow-line" aria-hidden="true" />
                  <span>{chapter.eyebrow}</span>
                </div>
                <h2>{chapter.title}</h2>
                <p>{chapter.description}</p>
                <a
                  className="editorial-link"
                  href={chapter.ctaHref}
                  target={chapter.external ? "_blank" : undefined}
                  rel={chapter.external ? "noopener noreferrer" : undefined}
                >
                  {chapter.ctaLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="story-frame__visual">
                <StoryVisual
                  kind={chapter.scene}
                  imageSrc={chapter.imageSrc}
                  imageAlt={chapter.imageAlt}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="story-stage__bottom" aria-hidden="true">
          <span>Scroll to explore <span className="scroll-indicator">↓</span></span>
          <div className="chapter-tracker">
            <span ref={counterRef}>01</span>
            <span className="chapter-tracker__track"><span ref={progressRef} /></span>
            <span>03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

