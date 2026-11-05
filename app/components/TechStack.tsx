const stackText = `💻 Languages       : C#, JavaScript, TypeScript, SQL
🌐 Frontend        : React, Angular, Tailwind CSS, HTML5, CSS3
⚙️ Backend         : .NET Core (C#), ASP.NET MVC, RESTful APIs, FastAPI
🤖 AI Systems      : MCP servers, RAG pipelines, LLM integration, OpenAI, Azure AI Foundry
🛢️ Databases       : SQL Server, MySQL, PostgreSQL, Redis
☁️ Cloud/DevOps    : Microsoft Azure (App Services, Azure SQL, Blob Storage), Azure DevOps,
                     CI/CD Pipelines, Docker, Kubernetes, Linux
🔐 Security        : OWASP Top 10, Authentication & Authorization, Secure API Design
🛠️ Tools           : Git, Firebase, Postman, Agile/Scrum`;

const categories = [
  "Frontend",
  "Backend",
  "AI Systems",
  "Databases",
  "Security",
  "Cloud & DevOps",
  "Tools & Others",
];

export default function TechStack() {
  return (
    <section
      className="readme-section"
      id="tech-stack"
      aria-labelledby="stack-title"
    >
      <h2 id="stack-title">🧰 Tech Stack</h2>
      <div className="code-card">
        <pre>
          <code>{stackText}</code>
        </pre>
      </div>
      <div className="chip-row" aria-label="Skill categories">
        {categories.map((category) => (
          <span className="chip" key={category}>
            {category}
          </span>
        ))}
      </div>
      <p className="section-lead">
        Day to day I work across the .NET and React/Angular stack, backed by SQL
        Server and Azure — and increasingly by MCP, RAG and agentic AI services
        that make those systems smarter without compromising security.
      </p>
    </section>
  );
}
