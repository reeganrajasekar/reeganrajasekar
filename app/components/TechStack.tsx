const stackText = `💻 Languages       : JavaScript, TypeScript, PHP, C#, SQL
🌐 Frontend        : React, Tailwind CSS, HTML5, CSS3, JavaScript, TypeScript
⚙️ Backend         : .NET Core, ASP.NET MVC, PHP, FastAPI, RESTful APIs
🤖 AI Systems      : RAG, MCP, LLM integrations
🛢️ Databases       : MySQL, SQL Server, MongoDB, Redis
☁️ Cloud/DevOps    : Microsoft Azure, Docker, Kubernetes, Azure DevOps, CI/CD
🛠️ Tools           : Git, Firebase, Postman, Linux, Agile/Scrum
🔐 Practices       : OWASP Top 10, Secure API Design, SEO`;

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
    </section>
  );
}
