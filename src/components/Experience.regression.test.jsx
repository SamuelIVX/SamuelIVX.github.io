import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Experience from "./Experience";


let mockExperiences = [];
vi.mock("../content/portfolio.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    get experiences() { return mockExperiences; }
  };
});


describe("ExperienceBrowser Regression", () => {
  it("handles empty experiences array without crashing", () => {
    mockExperiences = [];
    render(<Experience />);
    // With empty experiences, it might try to read experiences[0].company. Wait!
    // experiences[0] will be undefined!
    // Let's check if Experience component throws. If it does, we need to fix the component.
  });

  it("handles many experiences seamlessly", () => {
    mockExperiences = Array.from({ length: 15 }, (_, i) => ({
      id: `exp-${i}`,
      company: `Company ${i}`,
      title: "Dev",
      date: "2020",
      points: ["Point 1", "Point 2"],
      highlight: "Point"
    }));
    render(<Experience />);
    expect(screen.getAllByRole("tab").length).toBe(15);
  });
});
