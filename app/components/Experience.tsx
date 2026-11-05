type Role = {
  title: string;
  period: string;
  location: string;
  note?: string;
  points: string[];
};

type ExperienceEntry = {
  company: string;
  roles: Role[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "Adaptive Bizapp Systems",
    roles: [
      {
        title: "Software Engineer II",
        period: "Feb 2026 – Present",
        location: "Tiruchirappalli, Tamil Nadu, India · Hybrid",
        points: [
          "Built an MCP server and RAG pipeline over ERP and payroll data (.NET Framework, FastAPI, FastMCP), exposing 100+ tools to AI agents.",
          "Integrated AI services with existing .NET Framework ERP and payroll applications without altering core business logic.",
          "Built proactive issue ticketing and a RAG assistant for the support team, reducing repetitive client issues.",
          "Deployed containerised agents on Docker using OpenAI and Azure AI Foundry, with role-based access, Key Vault secrets, prompt-injection checks and per-tenant rate limits.",
          "Reduced token usage and model cost through caching, context budgeting and per-tenant caps.",
        ],
      },
    ],
  },
  {
    company: "SCION",
    roles: [
      {
        title: "Software Engineer",
        period: "Dec 2024 – Feb 2026",
        location: "Thanjavur, Tamil Nadu, India · Hybrid",
        points: [
          "Developed and maintained secure backend services using .NET Core (C#), SQL Server and Redis, improving system performance and reliability.",
          "Built responsive web applications using React, fully integrated with REST APIs and cloud services.",
          "Designed and deployed Azure cloud infrastructure and CI/CD pipelines with Azure DevOps, reducing deployment time and manual errors.",
          "Implemented OWASP Top 10 security practices, including secure authentication, input validation and API hardening.",
        ],
      },
    ],
  },
  {
    company: "UBTIINC",
    roles: [
      {
        title: "Junior Software Engineer",
        period: "Jun 2023 – Dec 2024",
        location: "Chennai, Tamil Nadu, India · Remote",
        note: "Progressed from Intern → Trainee → Junior Software Engineer.",
        points: [
          "Built an internal Employee Management Portal from scratch to production using .NET Core and Angular.",
          "Designed and developed a full ESG Dashboard using .NET and SQL Server.",
          "Optimized application performance and ensured secure data handling.",
        ],
      },
    ],
  },
  {
    company: "Sirius Computer Solutions (CDW)",
    roles: [
      {
        title: "Internship — Full Stack Developer",
        period: "Jun 2022 – Jul 2022",
        location: "Chennai, Tamil Nadu, India · Remote",
        points: [
          "Built responsive web applications with React, REST APIs and cloud services as part of a full-stack JavaScript internship.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="readme-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title">💼 Experience</h2>
      <p className="section-lead">
        Three and a half years of delivering production software — from
        enterprise .NET applications and React frontends to Azure cloud
        infrastructure and AI agents.
      </p>
      <div className="experience-timeline">
        {experiences.map(({ company, roles }) => (
          <article className="experience-item" key={company}>
            <span className="experience-marker" aria-hidden="true" />
            <div className="experience-card">
              <h3>{company}</h3>
              {roles.map(({ title, period, location, note, points }) => (
                <div className="experience-role" key={`${title}-${period}`}>
                  <p className="detail-meta">
                    {title} · {period}
                  </p>
                  <p className="experience-location">{location}</p>
                  {note && <p className="experience-note">{note}</p>}
                  {points.length > 0 && (
                    <ul className="experience-points">
                      {points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
