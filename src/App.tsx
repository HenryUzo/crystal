import HeroStory from "./components/HeroStory";

const initiatives = [
  { name: "Studio COKA", focus: "Architecture, interior design & construction", href: "https://www.studiocoka.com" },
  { name: "ELEvated", focus: "Furniture & product design" },
  { name: "The Effective Architect", focus: "Architecture education & media" },
  { name: "AKO Alliance", focus: "Educational opportunity for young people" },
  { name: "Alive and Free", focus: "Christian youth development" },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">Skip introduction</a>
      <main>
        <HeroStory />

        <section className="content-section about-section" id="about">
          <div className="section-label"><span>01</span> The perspective</div>
          <div className="about-section__body">
            <h2>One perspective.<br /><em>Many expressions.</em></h2>
            <p>
              Crystal Kizor's work moves between the spaces we inhabit, the things we use,
              the ideas we share and the opportunities we create. Architecture and design
              sit at the heart of that work, with education, research and community initiatives
              extending its reach.
            </p>
          </div>
        </section>

        <section className="content-section ecosystem-section" id="ecosystem">
          <div className="section-label"><span>02</span> Selected ecosystem</div>
          <div className="ecosystem-section__heading">
            <h2>What she's <em>building.</em></h2>
            <p>Distinct initiatives, connected by a commitment to thoughtful design and human possibility.</p>
          </div>
          <div className="initiative-list">
            {initiatives.map((item, index) => (
              <div className="initiative-list__row" key={item.name}>
                <span className="initiative-list__index">0{index + 1}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.focus}</p>
                </div>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={"Visit " + item.name}>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="initiative-list__unlinked" aria-label="Verified destination pending">—</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="connect">
          <div className="section-label"><span>03</span> Connect</div>
          <div className="contact-section__body">
            <h2>Good ideas begin<br />with a <em>conversation.</em></h2>
            <a className="contact-section__cta" href="https://ng.linkedin.com/in/crystal-kizor" target="_blank" rel="noopener noreferrer">
              Connect with Crystal on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <footer className="site-footer"><span>© {new Date().getFullYear()} Crystal Kizor</span><span>Architecture · Design · Ideas</span></footer>
        </section>
      </main>
    </>
  );
}

