import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Works from "./Works";


let mockProjects = [];
vi.mock("../content/portfolio.js", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    get projects() { return mockProjects; }
  };
});


describe("ProjectCarousel Regression", () => {
  it("handles empty projects array without crashing", () => {
    mockProjects = [];
    render(<Works />);
    expect(screen.queryByRole("region", { name: /Projects/i })).not.toBeInTheDocument();
  });

  it("handles many projects seamlessly", () => {
    mockProjects = Array.from({ length: 20 }, (_, i) => ({
      name: `Project ${i}`,
      repo: `repo-${i}`,
      description: "Desc",
      tech: ["React"],
      kind: "App",
      image: "",
      demo: ""
    }));
    render(<Works />);
    expect(screen.getAllByRole("article").length).toBe(20);
    const region = screen.getByRole("region", { name: /Projects/i });
    fireEvent.keyDown(region, { key: 'End' });
    // It should handle key events for 20 projects without throwing
    expect(region).toBeInTheDocument();
  });
});
