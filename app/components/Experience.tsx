const experiences = [
  {
    company: "Adaptive Bizapp Systems Private Limited",
    roles: [
      {
        title: "Software Engineer II",
        period: "Feb 2026 – Present",
        location: "Tiruchirappalli, Tamil Nadu, India · Hybrid",
        points: [
          "Integrated AI capabilities into ERP and payroll systems to improve business workflows and automation.",
          "Created a server management application and a project management application for internal operations.",
          "Maintained Linux servers and managed containerized deployments using Docker and CI/CD pipelines.",
          "Developed RAG-based and OpenAI-integrated applications to enable AI capabilities across business systems.",
        ],
      },
    ],
  },
  {
    company: "Scion Research & Development",
    roles: [
      {
        title: "Software Engineer",
        period: "Dec 2024 – Feb 2026",
        location: "Thanjavur, Tamil Nadu, India · Hybrid",
        points: [
          "Led end-to-end development of a Secure Locker system, designing and implementing the complete backend architecture and core business logic.",
          "Built scalable and secure REST APIs for web and mobile applications, ensuring reliable and efficient data flow.",
          "Developed a full-featured eCommerce web application covering user workflows, product management, and transactions.",
          "Designed and implemented mobile APIs with a focus on performance, authentication, and security.",
          "Contributed to social media-style applications, improving response times and overall system performance.",
          "Designed and built infrastructure from scratch for scalable and resilient deployments.",
          "Containerized applications with Docker and orchestrated services using Kubernetes.",
          "Implemented CI/CD pipelines for automated build, testing, and deployment processes.",
          "Optimized performance through SQL Server/MySQL tuning and efficient API design.",
          "Applied OWASP Top 10 secure coding practices and implemented authentication and authorization mechanisms.",
          "Ensured high availability, reliability, and scalability across production environments.",
        ],
      },
    ],
  },
  {
    company: "UB Technology Innovations (UBTI)",
    roles: [
      {
        title: "Junior Software Engineer",
        period: "Oct 2023 – Dec 2024",
        location: "Chennai, Tamil Nadu, India · Remote",
        points: [
          "Built core features for a client-facing donation-based platform, including user interaction, data handling, and transaction flows.",
          "Ensured reliable and secure handling of sensitive user and transaction data.",
          "Improved application performance through efficient backend logic and database optimization.",
          "Collaborated on deployment processes and production releases to ensure stability and minimal downtime.",
        ],
      },
      {
        title: "Trainee",
        period: "Aug 2023 – Sep 2023",
        location: "Chennai, Tamil Nadu, India · Remote",
        points: [
          "Led a team of developers for the Employee Portal, driving architecture decisions, task planning, and production deployment.",
          "Designed and implemented secure, scalable REST APIs for web and internal systems.",
        ],
      },
      {
        title: "Intern",
        period: "Jun 2023 – Jul 2023",
        location: "Chennai, Tamil Nadu, India · On-site",
        points: [
          "Developed and maintained enterprise-grade applications including an ESG Portal and Employee Portal, focusing on scalability, performance, and usability.",
        ],
      },
    ],
  },
  {
    company: "Sirius Computer Solutions",
    roles: [
      {
        title: "Internship - Full Stack Developer",
        period: "Jun 2022 – Jul 2022",
        location: "Chennai, Tamil Nadu, India · Remote",
        points: [
          "Built responsive web applications with React, REST APIs, and cloud services as part of a full-stack JavaScript internship.",
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
      <div className="experience-timeline">
        {experiences.map(({ company, roles }) => (
          <article className="experience-item" key={company}>
            <span className="experience-marker" aria-hidden="true" />
            <div className="experience-card">
              <h3>{company}</h3>
              {roles.map(({ title, period, location, points }) => (
                <div className="experience-role" key={`${title}-${period}`}>
                  <p className="detail-meta">
                    {title} · {period}
                  </p>
                  <p className="experience-location">{location}</p>
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
