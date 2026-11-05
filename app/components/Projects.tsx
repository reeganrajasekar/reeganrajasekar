const projects = [
  [
    "SJCET Website",
    "Feb 2023 – Mar 2023",
    "Built the St. Joseph’s College of Engineering and Technology website and its department subdomains.",
    "React · PHP · MySQL",
  ],
  [
    "IoT Smart Security & Locker Access Control · Vsafe",
    "SCION",
    "Designed a secure IoT access-control application with a .NET Core backend, real-time device communication, authentication, and OWASP-compliant security.",
    ".NET Core · IoT · OWASP",
  ],
  [
    "Employee Management & Access Portal",
    "SCION",
    "Built an internal portal to manage users, roles, access rights, and activity logs with secure authentication and authorization.",
    ".NET Core · SQL Server · Redis",
  ],
  [
    "ESG Analytics Dashboard",
    "UBTIINC",
    "Developed a data-driven dashboard to visualize environmental, social, and governance metrics for internal stakeholders.",
    ".NET · SQL Server",
  ],
  [
    "Secure eCommerce Web Application",
    "SCION",
    "Designed a full-stack commerce application with secure authentication, product management, cart workflows, and an admin portal.",
    ".NET Core · React · SQL",
  ],
];

export default function Projects() {
  return (
    <section
      className="readme-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">🚀 Projects</h2>
      <div className="project-grid">
        {projects.map(([name, date, description, tech], index) => (
          <article className="project-card" key={name}>
            <h3>{name}</h3>
            <small>{date}</small>
            <p>{description}</p>
            <span>{tech}</span>
            {index === 0 ? (
              <a
                className="project-link"
                href="https://sjcettnj.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                Live website ↗
              </a>
            ) : (
              <em className="private-label">Private project</em>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
