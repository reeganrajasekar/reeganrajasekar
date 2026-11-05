const siteUrl = "https://reegan.is-a.dev";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <span>
        © {year} Reegan Rajasekar A · Full Stack Engineer · Tiruchirappalli,
        India
      </span>
      <span className="footer-links">
        <a href={`${siteUrl}/Reegan-Rajasekar-CV.pdf`}>CV</a>
        <a href="/sitemap.xml">Sitemap</a>
        <a href="/llms.txt">llms.txt</a>
        <a
          href="https://github.com/reeganrajasekar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </span>
    </footer>
  );
}
