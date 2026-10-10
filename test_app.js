import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/App.test.jsx', 'utf8');

const newTests = `describe("App", () => {
  it("renders the primary portfolio sections", () => {
    renderApp();

    expect(screen.getByText(/hello world, i'm\\.\\.\\./i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /a little about me\\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /let's talk\\./i })).toBeInTheDocument();
  });

  it("renders navigation links to the main sections", async () => {
    renderApp();

    const navigation = screen.getByRole("navigation");
    const links = within(navigation).getAllByRole("link");
    expect(links).toHaveLength(5);
    
    expect(within(navigation).getByRole("link", { name: /about/i })).toHaveAttribute("href", "#about");
    expect(within(navigation).getByRole("link", { name: /projects/i })).toHaveAttribute("href", "#projects");
    expect(within(navigation).getByRole("link", { name: /experience/i })).toHaveAttribute("href", "#work");
    expect(within(navigation).getByRole("link", { name: /honors/i })).toHaveAttribute("href", "#honors");
    expect(within(navigation).getByRole("link", { name: /contact/i })).toHaveAttribute("href", "#contact");
  });

  it("has a mailto link for contact", () => {
    renderApp();
    const mailto = screen.getByRole("link", { name: /samuel05\\.hb@gmail\\.com/i });
    expect(mailto).toHaveAttribute("href", "mailto:samuel05.hb@gmail.com");
  });

  it("has no accessibility violations on initial render", async () => {
    const { container } = renderApp();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
`;

content = content.replace(/describe\("App", \(\) => \{[\s\S]*\}\);\n/, newTests);
writeFileSync('src/App.test.jsx', content);
