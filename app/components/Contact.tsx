const contactLinks = [
  { label: "areeganrajasekar@gmail.com", href: "mailto:areeganrajasekar@gmail.com" },
  { label: "+91 70940 93096", href: "tel:+917094093096" },
  { label: "reegan.is-a.dev", href: "https://reegan.is-a.dev", external: true },
  {
    label: "linkedin.com/in/reeganrajasekar",
    href: "https://www.linkedin.com/in/reeganrajasekar",
    external: true,
  },
  {
    label: "github.com/reeganrajasekar",
    href: "https://github.com/reeganrajasekar",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      className="readme-section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">📬 Contact</h2>
      <p className="section-lead">
        Based in Tiruchirappalli, Tamil Nadu, India. Open to full-stack, .NET,
        React, Azure and AI engineering roles — remote or hybrid. The fastest
        way to reach me is email or LinkedIn.
      </p>
      <div className="contact-grid">
        {contactLinks.map(({ label, href, external }) => (
          <a
            key={href}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="profile-actions">
        <a
          className="btn btn-primary"
          href="/Reegan-Rajasekar-CV.pdf"
          download="Reegan-Rajasekar-CV.pdf"
        >
          ⬇ Download CV (PDF)
        </a>
        <a
          className="btn btn-ghost"
          href="mailto:areeganrajasekar@gmail.com?subject=Opportunity%20for%20Reegan%20Rajasekar"
        >
          ✉️ Email me
        </a>
      </div>
    </section>
  );
}
