import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experience from "./Experience";
import { experiences } from "../content/portfolio.js";

describe("ExperienceBrowser", () => {
  it("renders the experience header", () => {
    render(<Experience />);
    expect(screen.getByRole("heading", { name: /Built in the real world/i })).toBeInTheDocument();
  });

  it("renders a tab for each experience", () => {
    render(<Experience />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length).toBe(experiences.length);
  });

  it("updates active tab on click", () => {
    render(<Experience />);
    const tabs = screen.getAllByRole("tab");
    
    // Initial state
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    
    // Click second tab
    if (tabs.length > 1) {
      fireEvent.click(tabs[1]);
      expect(tabs[0]).toHaveAttribute("aria-selected", "false");
      expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    }
  });

  it("supports keyboard navigation for tabs", () => {
    render(<Experience />);
    const tabs = screen.getAllByRole("tab");
    
    if (tabs.length > 1) {
      tabs[0].focus();
      // Down arrow selects next
      fireEvent.keyDown(tabs[0], { key: 'ArrowDown' });
      expect(tabs[1]).toHaveAttribute("aria-selected", "true");
      
      // Up arrow selects previous
      fireEvent.keyDown(tabs[1], { key: 'ArrowUp' });
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      
      // End goes to last
      fireEvent.keyDown(tabs[0], { key: 'End' });
      expect(tabs[tabs.length - 1]).toHaveAttribute("aria-selected", "true");
    }
  });
});
