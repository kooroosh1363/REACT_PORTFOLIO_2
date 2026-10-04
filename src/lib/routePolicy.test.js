import { describe, expect, it } from "vitest";
import { projects, routeRegistry } from "../data/content.js";
import {
  canonicalHash,
  filterProjects,
  focusOptions,
  isSafeRepositoryUrl,
  nextRouteIndex,
  normalizeFocus,
  routeForHash,
  routeIndex
} from "./routePolicy.js";

describe("PRISM route and content policy", () => {
  it("uses the first registered route as empty-hash fallback", () => {
    expect(canonicalHash("", routeRegistry)).toBe("#/overview");
  });

  it("normalizes a bare route name", () => {
    expect(canonicalHash("projects", routeRegistry)).toBe("#/projects");
  });

  it("normalizes a hash without slash", () => {
    expect(canonicalHash("#architecture", routeRegistry)).toBe("#/architecture");
  });

  it("recovers unknown hashes to overview", () => {
    expect(canonicalHash("#/missing", routeRegistry)).toBe("#/overview");
  });

  it("returns the route object for a valid hash", () => {
    expect(routeForHash("#/projects", routeRegistry)?.id).toBe("projects");
  });

  it("returns the route index", () => {
    expect(routeIndex("#/architecture", routeRegistry)).toBe(2);
  });

  it("wraps keyboard route navigation forward", () => {
    expect(nextRouteIndex(4, 3, "ArrowRight")).toBe(0);
  });

  it("wraps keyboard route navigation backward", () => {
    expect(nextRouteIndex(4, 0, "ArrowLeft")).toBe(3);
  });

  it("supports Home and End keys", () => {
    expect(nextRouteIndex(4, 2, "Home")).toBe(0);
    expect(nextRouteIndex(4, 1, "End")).toBe(3);
  });

  it("handles an empty route registry", () => {
    expect(nextRouteIndex(0, 0, "ArrowRight")).toBe(-1);
  });

  it("normalizes a known focus", () => {
    expect(normalizeFocus("STATE", ["all", "state"])).toBe("state");
  });

  it("recovers an unknown focus to all", () => {
    expect(normalizeFocus("missing", ["all", "state"])).toBe("all");
  });

  it("returns all projects for all focus", () => {
    expect(filterProjects(projects, "all")).toHaveLength(projects.length);
  });

  it("filters project focus deterministically", () => {
    expect(
      filterProjects(projects, "state").map((item) => item.id)
    ).toEqual(["signal", "atelier"]);
  });

  it("builds unique focus options with all first", () => {
    const options = focusOptions(projects);
    expect(options[0]).toBe("all");
    expect(options.filter((item) => item === "state")).toHaveLength(1);
  });

  it("accepts HTTPS GitHub repository URLs", () => {
    expect(isSafeRepositoryUrl(projects[0].repository)).toBe(true);
  });

  it("rejects JavaScript URLs", () => {
    expect(isSafeRepositoryUrl("javascript:alert(1)")).toBe(false);
  });

  it("rejects non-GitHub external URLs", () => {
    expect(isSafeRepositoryUrl("https://example.com/project")).toBe(false);
  });
});
