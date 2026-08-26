/**
 * Smoke tests for primary portfolio sections, nav anchors, contact form field
 * state, and an initial axe accessibility scan. Canvas modules are mocked to
 * avoid WebGL under jsdom.
 */
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import PropTypes from "prop-types";
import App from "./App";

vi.mock("./components/canvas", () => {
  const VantaNetMock = ({ children }) => <div data-testid="vanta-net">{children}</div>;
  VantaNetMock.propTypes = { children: PropTypes.node };

  return {
    BallCanvas: () => <div data-testid="ball-canvas" />,
    ComputersCanvas: () => <div data-testid="computers-canvas" />,
    EarthCanvas: () => <div data-testid="earth-canvas" />,
    StarsCanvas: () => <div data-testid="stars-canvas" />,
    VantaNet: VantaNetMock,
  };
});

/**
 * Renders the full App under Testing Library.
 * @returns {import("@testing-library/react").RenderResult} RTL render result.
 * @example
 * const { container } = renderApp();
 */
const renderApp = () => render(<App />);

describe("App", () => {
  it("renders the primary portfolio sections", () => {
    renderApp();

    expect(
      screen.getByRole("heading", { name: /hi, i'm samuel/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /overview/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /work experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  it("renders navigation links to the main sections", () => {
    renderApp();

    const navigation = screen.getByRole("navigation");

    expect(
      within(navigation).getAllByRole("link", { name: /about/i })[0]
    ).toHaveAttribute("href", "#about");
    expect(
      within(navigation).getAllByRole("link", { name: /work/i })[0]
    ).toHaveAttribute("href", "#work");
    expect(
      within(navigation).getAllByRole("link", { name: /contact/i })[0]
    ).toHaveAttribute("href", "#contact");
  });

  it("updates contact form fields without submitting", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.type(screen.getByLabelText(/your name/i), "Sam");
    await user.type(screen.getByLabelText(/your email/i), "sam@example.com");
    await user.type(screen.getByLabelText(/your message/i), "Hello there");

    expect(screen.getByLabelText(/your name/i)).toHaveValue("Sam");
    expect(screen.getByLabelText(/your email/i)).toHaveValue("sam@example.com");
    expect(screen.getByLabelText(/your message/i)).toHaveValue("Hello there");
  });

  it("has no accessibility violations on initial render", async () => {
    const { container } = renderApp();

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
