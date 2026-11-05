const strengths = [
  "Secure .NET (C#) APIs, ASP.NET MVC and backend service development.",
  "React and Angular frontends with Tailwind CSS, TypeScript and responsive UI.",
  "REST API development, SQL Server / MySQL / PostgreSQL modelling and query tuning.",
  "Microsoft Azure, Azure DevOps, CI/CD pipelines, Docker, Kubernetes and Linux.",
  "Production AI: MCP servers, RAG pipelines and agents on OpenAI and Azure AI Foundry.",
  "OWASP Top 10 secure coding, authentication, authorization and secure API design.",
  "Cost-aware AI engineering: caching, context budgeting and per-tenant caps.",
];

export default function About() {
  return (
    <section className="readme-section" id="about" aria-labelledby="about-title">
      <h2 id="about-title">🧑‍💻 About Me</h2>
      <p>
        I&apos;m a <strong>Full Stack Engineer</strong> with{" "}
        <strong>3.5+ years of experience</strong> building secure, scalable web
        and mobile applications using <strong>.NET (C#)</strong>,{" "}
        <strong>React</strong>, <strong>Angular</strong>, SQL Server, MySQL and
        PostgreSQL.
      </p>
      <p>
        I have strong experience in REST API development, database
        optimization, cloud deployment and OWASP security practices, and a
        proven ability to deliver end-to-end solutions from design to
        production with a focus on performance, security and reliability.
      </p>
      <p>
        Currently I build production AI features — <strong>MCP servers</strong>,{" "}
        <strong>RAG pipelines</strong> and <strong>agents</strong> on OpenAI and
        Azure AI Foundry — with a focus on cost control and security. That
        includes exposing 100+ ERP and payroll tools to AI agents, integrating
        AI services into existing .NET Framework systems without changing core
        business logic, and reducing token cost through caching, context
        budgeting and per-tenant caps.
      </p>
      <p>What I focus on:</p>
      <ul>
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
      <p>
        I have delivered work across enterprise web applications, internal
        portals, IoT access-control platforms, eCommerce, analytics dashboards
        and AI-assisted support tooling. I enjoy owning a product from
        architecture and database design through deployment and continuous
        improvement, and I&apos;m open to full-stack, .NET, React, cloud and
        AI engineering roles — remote or hybrid.
      </p>
    </section>
  );
}
