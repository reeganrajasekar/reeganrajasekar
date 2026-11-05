export default function ThemeToggle() {
  return (
    <label className="theme-toggle">
      <input id="theme-toggle" className="sr-only" type="checkbox" />
      <span className="theme-light">☀️ Light</span>
      <span className="theme-dark">🌙 Dark</span>
    </label>
  );
}
