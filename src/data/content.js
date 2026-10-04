export const routeRegistry = Object.freeze([
  {
    id: "overview",
    hash: "#/overview",
    label: "Overview",
    title: "PRISM — Route & Content Integrity Portfolio",
    description: "How PRISM turns portfolio navigation and claims into an inspectable content system."
  },
  {
    id: "projects",
    hash: "#/projects",
    label: "Projects",
    title: "Projects · PRISM",
    description: "Repository-backed project summaries with explicit scope and no invented client claims."
  },
  {
    id: "architecture",
    hash: "#/architecture",
    label: "Architecture",
    title: "Architecture · PRISM",
    description: "Canonical route, metadata, filtering, and recovery policies used by the portfolio."
  },
  {
    id: "boundaries",
    hash: "#/boundaries",
    label: "Boundaries",
    title: "Boundaries · PRISM",
    description: "What the portfolio intentionally does not claim or simulate."
  }
]);

export const projects = Object.freeze([
  {
    id: "signal",
    title: "SIGNAL",
    subtitle: "Evidence-Driven Engineering Portfolio",
    repository: "https://github.com/kooroosh1363/REACT_portfolio_website",
    focus: ["portfolio", "state", "accessibility"],
    summary:
      "A recruiter-facing portfolio system built around repository-backed case studies, explicit scope boundaries, and URL-backed discovery."
  },
  {
    id: "reflow",
    title: "REFLOW",
    subtitle: "Responsive Portfolio Layout System",
    repository: "https://github.com/kooroosh1363/REACT_Responsive_portfolio",
    focus: ["responsive", "navigation", "accessibility"],
    summary:
      "A responsive layout lab with explicit viewport modes, adaptive navigation, fluid typography, and content-priority reflow."
  },
  {
    id: "atelier",
    title: "ATELIER",
    subtitle: "Commerce Bag State & SCSS System",
    repository: "https://github.com/kooroosh1363/REACR_SCSS_WEBSHOP",
    focus: ["commerce", "state", "scss"],
    summary:
      "A commerce-state lab with bounded quantities, persistence recovery, deterministic pricing summaries, and structured SCSS."
  },
  {
    id: "scribe",
    title: "SCRIBE",
    subtitle: "PHP/SQLite Publishing Core",
    repository: "https://github.com/kooroosh1363/Blog-0-with-PHP-1-SQL",
    focus: ["php", "sql", "security"],
    summary:
      "A server-rendered publishing core using PDO prepared statements, draft/public boundaries, CLI authoring, and security headers."
  }
]);

export const architectureNotes = Object.freeze([
  {
    title: "One route registry",
    text: "Navigation labels, canonical hashes, page titles, and descriptions come from one immutable route contract."
  },
  {
    title: "Static-host-safe routing",
    text: "Hash routes avoid server rewrite assumptions, so deep navigation remains compatible with GitHub Pages."
  },
  {
    title: "Honest content boundary",
    text: "Every showcased project points to a real repository; fake testimonials, client counts, contact data, and metrics are removed."
  }
]);

export const boundaries = Object.freeze([
  "No invented clients, testimonials, revenue, downloads, or project counts.",
  "No fake contact submission or authentication surface.",
  "No pretend résumé download when no résumé file exists.",
  "No third-party stock portfolio artwork presented as original work.",
  "No route exists unless it is registered and recoverable."
]);
