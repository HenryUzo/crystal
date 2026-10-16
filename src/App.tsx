import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { content, images, initiatives } from "./data/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  loading?: "eager" | "lazy";
};

function EditorialImage({ src, alt, className = "", caption, loading = "lazy" }: EditorialImageProps) {
  return (
    <figure className={"editorial-image " + className}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? "↗" : "↘"}</span>;
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = [
    { label: "About", href: "#about" },
    { label: "The work", href: "#work" },
    { label: "Ideas", href: "#ideas" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <header className="navigation">
      <a href="#top" className="navigation__brand" aria-label="Crystal Kizor, go to top">
        <span className="navigation__symbol" aria-hidden="true">c<span>k</span></span>
        <span className="navigation__name">Crystal Kizor</span>
      </a>
      <div className="navigation__right">
        <span className="navigation__descriptor">Architecture & beyond</span>
        <button
          className={"navigation__toggle" + (open ? " is-open" : "")}
          aria-expanded={open}
          aria-controls="site-menu"
          type="button"
          onClick={() => setOpen((previous) => !previous)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="navigation__bars" aria-hidden="true"><i /><i /></span>
        </button>
      </div>
      <nav id="site-menu" className={"menu" + (open ? " menu--open" : "")} aria-label="Main navigation" aria-hidden={!open}>
        <span className="menu__small">Explore the site</span>
        {links.map((link, index) => (
          <a
            href={link.href}
            key={link.href}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <small>0{index + 1}</small>{link.label}<Arrow diagonal />
          </a>
        ))}
        <div className="menu__footer">Spaces / Objects / Ideas / Impact</div>
      </nav>
    </header>
  );
}

function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = true;

    const updatePlayback = () => setCanPlay(isVisible && !reducedMotion.matches);
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      updatePlayback();
    });

    if (backgroundRef.current) observer.observe(backgroundRef.current);
    reducedMotion.addEventListener("change", updatePlayback);
    updatePlayback();

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", updatePlayback);
    };
  }, []);

  const youtubeId = content.heroYouTubeId;
  const youtubeSrc = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&fs=0&disablekb=1&iv_load_policy=3`
    : null;

  return (
    <div className="hero__background" ref={backgroundRef}>
      {/* The image remains visible while YouTube loads and if autoplay or embedding fails. */}
      <img className="hero__poster" src={images.hero.src} alt="" fetchPriority="high" />
      {canPlay && youtubeSrc ? (
        <iframe
          className="hero__youtube"
          src={youtubeSrc}
          title="Decorative video background for Crystal Kizor"
          tabIndex={-1}
          aria-hidden="true"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : canPlay && content.heroVideoSrc ? (
        <video className="hero__local-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src={content.heroVideoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <HeroBackground />
      <div className="hero__shade" />
      <div className="hero__side-label" aria-hidden="true">CRYSTAL KIZOR — INDEPENDENT PRACTICE / 2026</div>
      <div className="hero__content">
        <div className="hero__intro" data-hero-intro>
          <span className="eyebrow eyebrow--light">Architect. Designer. Entrepreneur.</span>
          <span className="hero__edition">A body of work, in motion <span>↗</span></span>
        </div>
        <h1 id="hero-title">
          <span className="hero__title-line"><span>Building spaces.</span></span>
          <span className="hero__title-line"><span><em>Expanding</em> possibilities.</span></span>
        </h1>
        <div className="hero__bottom" data-hero-bottom>
          <p>Meet Crystal Kizor. Her work moves between architecture, objects, education and the ideas that shape how we live.</p>
          <a href="#about" className="hero__scroll" aria-label="Scroll to discover Crystal's work">
            <span>Explore the story</span>
            <span className="hero__scroll-icon"><Arrow /></span>
          </a>
        </div>
      </div>
      <div className="hero__footnote">01 — A wider view of design <span>Scroll to explore ↓</span></div>
    </section>
  );
}

function EditorialIntro() {
  return (
    <section id="about" className="editorial-intro" aria-labelledby="about-title">
      <div className="editorial-intro__images" aria-label="Visual direction for Crystal Kizor's work">
        <EditorialImage
          className="editorial-intro__image editorial-intro__image--first"
          src={images.galleryArchitecture.src}
          alt={images.galleryArchitecture.alt}
          caption="01 / Space"
        />
        <EditorialImage
          className="editorial-intro__image editorial-intro__image--second"
          src={images.galleryInterior.src}
          alt={images.galleryInterior.alt}
          caption="02 / Form"
        />
        <EditorialImage
          className="editorial-intro__image editorial-intro__image--third"
          src={images.galleryDetail.src}
          alt={images.galleryDetail.alt}
          caption="03 / Detail"
        />
      </div>
      <div className="editorial-intro__story">
        <p className="eyebrow eyebrow--dark" data-reveal>01 / The perspective</p>
        <h2 id="about-title" data-reveal>One perspective.<br /><span>Many expressions.</span></h2>
        <div className="editorial-intro__support" data-reveal>
          <span className="editorial-intro__asterisk" aria-hidden="true">✳</span>
          <p>
            {content.about}
          </p>
          <a className="text-link" href="#work">Discover what she's building <Arrow diagonal /></a>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const principles = [
    { number: "01", heading: "Thoughtful by design.", body: "Climate, people and place belong in the conversation from the very first sketch." },
    { number: "02", heading: "Rooted in context.", body: "Objects and spaces can reflect where we are, not just what the world expects." },
    { number: "03", heading: "Built to reach further.", body: "Good ideas gain meaning when they create room for others to grow." },
  ];

  return (
    <section className="philosophy" id="perspective">
      <div className="philosophy__top">
        <p className="eyebrow eyebrow--light" data-reveal>02 / The thinking</p>
        <p className="philosophy__intro" data-reveal>Across disciplines, a consistent interest: how can what we create improve everyday life?</p>
      </div>
      <div className="philosophy__statement" data-reveal>
        <span className="philosophy__decor">✳</span>
        <h2>Different disciplines.<br /><em>A shared point of view.</em></h2>
      </div>
      <div className="philosophy__principles">
        {principles.map((principle) => (
          <article className="principle" key={principle.number} data-reveal>
            <span>{principle.number}</span>
            <div>
              <h3>{principle.heading}</h3>
              <p>{principle.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-topline"><span>03 / The ecosystem</span><span>Where ideas become initiatives</span></div>
      <div className="work__intro" data-reveal>
        <h2 id="work-title">What she's <em>building.</em></h2>
        <p>Not a collection of unrelated ventures, but different ways of engaging with design, learning and possibility.</p>
      </div>
      <div className="work__feature" data-reveal>
        <EditorialImage
          src={images.feature.src}
          alt={images.feature.alt}
          className="work__feature-image"
          caption="Concept imagery / Replace with Studio COKA work"
        />
        <div className="work__feature-copy">
          <span>Featured practice / Studio COKA</span>
          <h3>Architecture that responds to its environment.</h3>
          <p>Climate-responsive architecture, interiors and construction—made with a strong sense of people and place.</p>
          <a href="https://www.studiocoka.com" target="_blank" rel="noopener noreferrer" className="text-link">
            Visit Studio COKA <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="work__directory">
        {initiatives.map((item, index) => (
          <div className="work__row" key={item.name} data-reveal>
            <div className="work__row-number">0{index + 1}</div>
            <div className="work__row-heading">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <span className="work__row-category">{item.category}</span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="work__row-link" aria-label={"Visit " + item.name}><Arrow diagonal /></a>
            ) : (
              <span className="work__row-pending" title="Destination link awaiting confirmation">—</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Ideas() {
  return (
    <section className="ideas" id="ideas" aria-labelledby="ideas-title">
      <div className="section-topline"><span>04 / Beyond the practice</span><span>Speaking, writing & inquiry</span></div>
      <div className="ideas__grid">
        <div data-reveal>
          <h2 id="ideas-title">Ideas are meant<br />to <em>travel.</em></h2>
          <p>Conversations about climate-responsive design, African cities and a built environment that does more for people.</p>
          <a className="text-link" href={content.linkedin} target="_blank" rel="noopener noreferrer">
            Explore Crystal's writing <Arrow diagonal />
          </a>
        </div>
        <div className="ideas__article" data-reveal>
          <span className="eyebrow eyebrow--dark">Selected conversation / 2026</span>
          <p>What should the places we build today stand for in the decades ahead?</p>
          <span className="ideas__attribution">On the future of the built environment · TEDx Port Harcourt</span>
          <a href={content.ideasPost} target="_blank" rel="noopener noreferrer" aria-label="Explore Crystal Kizor's post on the future of the built environment"><Arrow diagonal /></a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact__content" data-reveal>
        <p className="eyebrow eyebrow--light">05 / Connect</p>
        <h2>Let's make room<br />for <em>what's next.</em></h2>
        <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="contact__action">
          Start a conversation <Arrow diagonal />
        </a>
      </div>
      <div className="contact__foot">
        <a href="#top" className="contact__brand">Crystal Kizor<span>© {new Date().getFullYear()}</span></a>
        <p>Architecture · Design · Ideas · Impact</p>
        <a href="#top">Back to top ↑</a>
      </div>
      <div className="contact__credit">Temporary licensed editorial photography is used for visual direction only. Not Crystal Kizor's work.</div>
    </footer>
  );
}

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = pageRef.current;
    if (!context) return;
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { duration: 1.15, ease: "power3.out" } });
      intro
        .from("[data-hero-intro]", { autoAlpha: 0, y: 18, duration: .65 })
        .from(".hero__title-line > span", { yPercent: 110, stagger: .16 }, "-=.28")
        .from("[data-hero-bottom]", { autoAlpha: 0, y: 20, duration: .75 }, "-=.58");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 54,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: element,
            start: "top 89%",
            once: true,
          },
        });
      });

      const galleryImages = gsap.utils.toArray<HTMLElement>(".editorial-intro__image");
      galleryImages.forEach((element, index) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 100 + index * 25,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".editorial-intro__images",
            start: "top 88%",
            once: true,
          },
          delay: index * .13,
        });
      });
    });

    media.add("(min-width: 800px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".hero__background", { scale: 1.06, yPercent: 0 }, {
        scale: 1.16,
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".hero__content", {
        yPercent: -23,
        opacity: .05,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".editorial-intro__image img").forEach((image, index) => {
        gsap.fromTo(image, { scale: 1.18 }, {
          scale: 1,
          yPercent: index % 2 === 0 ? -7 : 7,
          ease: "none",
          scrollTrigger: {
            trigger: ".editorial-intro__images",
            start: "top bottom",
            end: "bottom top",
            scrub: .8,
          },
        });
      });

      gsap.fromTo(".work__feature-image img", { scale: 1.12 }, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".work__feature",
          start: "top bottom",
          end: "bottom top",
          scrub: .8,
        },
      });
    });

    ScrollTrigger.create({
      trigger: context,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (progressRef.current) gsap.set(progressRef.current, { scaleX: self.progress });
      },
    });

    return () => media.revert();
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="site-shell">
      <a href="#about" className="skip-link">Skip introduction</a>
      <div ref={progressRef} className="reading-progress" aria-hidden="true" />
      <SiteNav />
      <main>
        <Hero />
        <EditorialIntro />
        <Philosophy />
        <Work />
        <Ideas />
      </main>
      <Contact />
    </div>
  );
}
