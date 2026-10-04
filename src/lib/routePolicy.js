export function canonicalHash(value, routes) {
  const fallback = routes[0]?.hash ?? "#/";
  const raw = String(value ?? "").trim();

  if (!raw) return fallback;

  const normalized = raw.startsWith("#/")
    ? raw
    : raw.startsWith("#")
      ? "#/" + raw.slice(1).replace(/^\/+/, "")
      : "#/" + raw.replace(/^\/+/, "");

  return routes.some((route) => route.hash === normalized)
    ? normalized
    : fallback;
}

export function routeForHash(value, routes) {
  const hash = canonicalHash(value, routes);
  return routes.find((route) => route.hash === hash) ?? routes[0] ?? null;
}

export function routeIndex(value, routes) {
  const route = routeForHash(value, routes);
  if (!route) return -1;
  return routes.findIndex((item) => item.id === route.id);
}

export function nextRouteIndex(count, currentIndex, key) {
  if (!Number.isInteger(count) || count <= 0) return -1;

  const current =
    Number.isInteger(currentIndex) && currentIndex >= 0
      ? currentIndex % count
      : 0;

  switch (key) {
    case "Home":
      return 0;
    case "End":
      return count - 1;
    case "ArrowRight":
    case "ArrowDown":
      return (current + 1) % count;
    case "ArrowLeft":
    case "ArrowUp":
      return (current - 1 + count) % count;
    default:
      return current;
  }
}

export function normalizeFocus(value, allowed) {
  const tag = String(value ?? "").trim().toLowerCase();
  return allowed.includes(tag) ? tag : "all";
}

export function filterProjects(projects, focus) {
  if (focus === "all") return projects;
  return projects.filter((project) => project.focus.includes(focus));
}

export function focusOptions(projects) {
  return [
    "all",
    ...new Set(projects.flatMap((project) => project.focus))
  ].sort((a, b) => {
    if (a === "all") return -1;
    if (b === "all") return 1;
    return a.localeCompare(b);
  });
}

export function isSafeRepositoryUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "github.com";
  } catch {
    return false;
  }
}
