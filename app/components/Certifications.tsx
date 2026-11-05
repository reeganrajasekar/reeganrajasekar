const certifications = [
  { title: "Full Stack Development", issuer: "ICT (IBM)" },
  { title: "Full Stack JavaScript", issuer: "Sirius (CDW)" },
  { title: "Full Stack Development", issuer: "Udemy" },
];

const awards = [
  {
    title: "Best Employee of the Quarter",
    issuer: "SCION",
    detail:
      "Awarded for outstanding performance, system optimization and delivering high-impact production features.",
  },
  {
    title: "Spotlight Award",
    issuer: "UBTIINC",
    detail:
      "Recognized for exceptional individual contribution to critical project delivery and performance improvements.",
  },
];

export default function Certifications() {
  return (
    <section
      className="readme-section"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <h2 id="certifications-title">📜 Certifications &amp; Awards</h2>
      <div className="two-column">
        <div>
          <h3>Certifications</h3>
          <ul>
            {certifications.map(({ title, issuer }) => (
              <li key={`${title}-${issuer}`}>
                {title} · {issuer}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Awards &amp; Recognition</h3>
          <ul className="award-list">
            {awards.map(({ title, issuer, detail }) => (
              <li key={title}>
                <strong>{title}</strong> — {issuer}
                <span className="award-detail">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
