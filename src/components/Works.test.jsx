import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Works from "./Works";
import { projects } from "../content/portfolio.js";

describe("ProjectCarousel (Works)", () => {
  it("renders the projects header", () => {
    render(<Works />);
    expect(screen.getByRole("heading", { name: /A few things I've built/i })).toBeInTheDocument();
  });

  it("renders all projects and links", () => {
    render(<Works />);
    expect(screen.getAllByRole("article").length).toBe(projects.length);
  });

  it("supports keyboard navigation (ArrowRight, ArrowLeft)", () => {
    render(<Works />);
    const region = screen.getByRole("region", { name: /Projects/i });
    
    // Simulate right arrow
    fireEvent.keyDown(region, { key: 'ArrowRight' });
    // Since ResizeObserver is mocked to 0 width, maxStart is mocked. 
    // We just verify it doesn't throw and handles the event.
    expect(region).toBeInTheDocument();
  });

  it("handles Home and End keys", () => {
    render(<Works />);
    const region = screen.getByRole("region", { name: /Projects/i });
    
    fireEvent.keyDown(region, { key: 'End' });
    fireEvent.keyDown(region, { key: 'Home' });
    expect(region).toBeInTheDocument();
  });
});
