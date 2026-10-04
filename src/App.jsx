import { useEffect, useMemo, useRef, useState } from "react";
import {
  architectureNotes,
  boundaries,
  projects,
  routeRegistry
} from "./data/content.js";
import {
  filterProjects,
  focusOptions,
  nextRouteIndex,
  normalizeFocus,
  routeForHash,
  routeIndex
} from "./lib/routePolicy.js";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || routeRegistry[0].hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || routeRegistry[0].hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

function RouteNav({ activeHash }) {
  const linksRef = useRef([]);

  function handleKeyDown(event) {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();

    const current = routeIndex(activeHash, routeRegistry);
    const next = nextRouteIndex(routeRegistry.length, current, event.key);

    if (next >= 0) {
      linksRef.current[next]?.focus();
    }
  }

  return (
    <nav className="route-nav" aria-label="Primary portfolio routes" onKeyDown={handleKeyDown}>
      {routeRegistry.map((route, index) => (
        <a
          key={route.id}
          href={route.hash}
          aria-current={activeHash === route.hash ? "page" : undefined}
          ref={(node) => {
            linksRef.current[index] = node;
          }}
        >
          {route.label}
        </a>
      ))}
    </nav>
  );
}

function Overview() {
  return (
    <section className="hero page-shell">
      <p className="eyebrow">Route-aware engineering portfolio</p>
      <h1>Every route exists. Every claim has a boundary.</h1>
      <p className="hero-copy">
        PRISM replaces a decorative multi-page portfolio template with a canonical route system,
        repository-backed project content, keyboard-safe navigation, and static-host-safe recovery.
      </p>

      <div className="integrity-grid" aria-label="Portfolio integrity summary">
        <div><span>Registered routes</span><strong>{routeRegistry.length}</strong></div>
        <div><span>Repository-backed projects</span><strong>{projects.length}</strong></div>
        <div><span>Fake testimonials</span><strong>0</strong></div>
        <div><span>Fake client metrics</span><strong>0</strong></div>
      </div>
    </section>
  );
}

function Projects() {
  const options = useMemo(() => focusOptions(projects), []);
  const [focus, setFocus] = useState("all");

  const visible = useMemo(
    () => filterProjects(projects, focus),
    [focus]
  );

  function changeFocus(value) {
    setFocus(normalizeFocus(value, options));
  }

  return (
    <section className="page-shell projects-page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Repository-backed work</p>
          <h1>Projects are evidence links, not invented client cards.</h1>
        </div>
        <p>{visible.length} of {projects.length} projects visible</p>
      </div>

      <div className="focus-filter" aria-label="Project focus filters">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={focus === option}
            onClick={() => changeFocus(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((project, index) => (
          <article className="project-card" key={project.id}>
            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
            <p className="eyebrow">{project.subtitle}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.focus.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href={project.repository} target="_blank" rel="noreferrer">
              Inspect repository →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="page-shell architecture-page">
      <p className="eyebrow">Architecture</p>
      <h1>Navigation, metadata, recovery, and content all share one contract.</h1>

      <div className="architecture-grid">
        {architectureNotes.map((note, index) => (
          <article key={note.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </article>
        ))}
      </div>

      <div className="route-table" role="region" aria-label="Canonical route registry">
        {routeRegistry.map((route) => (
          <div key={route.id}>
            <code>{route.hash}</code>
            <strong>{route.label}</strong>
            <span>{route.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Boundaries() {
  return (
    <section className="page-shell boundaries-page">
      <p className="eyebrow">Scope boundaries</p>
      <h1>Credibility improves when the portfolio says what it does not do.</h1>
      <div className="boundary-list">
        {boundaries.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RouteContent({ routeId }) {
  switch (routeId) {
    case "projects":
      return <Projects />;
    case "architecture":
      return <Architecture />;
    case "boundaries":
      return <Boundaries />;
    default:
      return <Overview />;
  }
}

export default function App() {
  const rawHash = useHashRoute();
  const route = routeForHash(rawHash, routeRegistry);
  const activeHash = route?.hash ?? routeRegistry[0].hash;

  useEffect(() => {
    if (!route) return;

    document.title = route.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", route.description);

    if (window.location.hash !== route.hash) {
      window.history.replaceState(null, "", route.hash);
    }
  }, [route]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="layout header-row">
          <a className="brand" href="#/overview" aria-label="PRISM overview">
            <span className="brand-mark">P</span>
            <span>
              <strong>PRISM</strong>
              <small>Route & content integrity portfolio</small>
            </span>
          </a>
          <RouteNav activeHash={activeHash} />
        </div>
      </header>

      <main id="main-content" className="layout">
        <RouteContent routeId={route?.id ?? "overview"} />
      </main>

      <footer className="site-footer layout">
        <strong>PRISM</strong>
        <span>Static hash routing · repository-backed content · no fake contact layer</span>
      </footer>
    </div>
  );
}
