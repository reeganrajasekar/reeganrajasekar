const projects = [
  {
    name: "Warehouse Management System",
    context: "Adaptive",
    description:
      "Warehouse management system built on .NET Core and ASP.NET MVC to support day-to-day warehouse operations.",
    tech: ".NET Core · ASP.NET MVC",
    href: null,
  },
  {
    name: "IoT Smart Security & Locker Access Control (Vsafe)",
    context: "SCION",
    description:
      "Secure IoT access-control application with a .NET Core backend, real-time device communication, user authentication and OWASP-compliant security practices.",
    tech: ".NET Core · IoT · OWASP",
    href: null,
  },
  {
    name: "ESG Analytics Dashboard",
    context: "UBTIINC",
    description:
      "Data-driven dashboard that visualises environmental, social and governance metrics for internal stakeholders.",
    tech: ".NET · SQL Server",
    href: null,
  },
  {
    name: "Secure eCommerce Web Application",
    context: "SCION",
    description:
      "Full-stack eCommerce application with secure user authentication, product management, cart and admin portal.",
    tech: ".NET Core · React · SQL Server",
    href: null,
  },
  {
    name: "SJCET College Website",
    context: "2023",
    description:
      "Built the St. Joseph's College of Engineering and Technology website and its department subdomains.",
    tech: "React · PHP · MySQL",
    href: "https://sjcettnj.edu.in/",
  },
];

export default function Projects() {
  return (
    <section
      className="readme-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">🚀 Projects</h2>
      <p className="section-lead">
        Selected work across enterprise operations, IoT security, analytics and
        commerce — most of it delivered end-to-end, from architecture to
        production support.
      </p>
      <div className="project-grid">
        {projects.map(({ name, context, description, tech, href }) => (
          <article className="project-card" key={name}>
            <h3>{name}</h3>
            <small>{context}</small>
            <p>{description}</p>
            <span>{tech}</span>
            {href ? (
              <a
                className="project-link"
                href={href}
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
