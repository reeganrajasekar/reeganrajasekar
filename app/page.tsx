import Image from "next/image";
import ContentsNav from "./components/ContentsNav";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";
import ThemeToggle from "./components/ThemeToggle";
import profile from "@/public/profile.webp";

const currentYear = new Date().getFullYear();
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Reegan Rajasekar A",
  url: "https://reegan.is-a.dev",
  jobTitle: "Software Engineer II",
  worksFor: {
    "@type": "Organization",
    name: "Adaptive Bizapp Systems Private Limited",
    url: "https://adaptivebizapp.in/",
  },
  sameAs: [
    "https://www.linkedin.com/in/reeganrajasekar",
    "https://github.com/reeganrajasekar",
  ],
};

export default async function Home() {
  return (
    <main className="github-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <article className="readme-card profile-card">
        <div className="repo-bar">
          <span className="repo-content">
            <a href="/">reegan.is-a.dev</a>
            <span>/</span>
            <span>Readme.md</span>
          </span>
          <ThemeToggle />
        </div>
        <header className="profile-header">
          <div className="profile-avatar-wrap">
            <Image
              className="profile-avatar"
              src={profile}
              alt="Reegan Rajasekar"
              width={132}
              height={132}
              priority
            />
          </div>
          <div className="profile-copy">
            <p className="profile-eyebrow">FULL-STACK .NET &amp; AI ENGINEER</p>
            <h1>
              Hi, I&apos;m{" "}
              <span className="profile-name">Reegan Rajasekar</span>
            </h1>
            <p className="profile-role">
              Software Engineer II at {" "}
              <a
                href="https://adaptivebizapp.in/"
                target="_blank"
                rel="noreferrer"
              >
                Adaptive Bizapp Systems
              </a>
            </p>
            <p className="profile-headline">
              .NET | React | Next.js | FastAPI | AI Systems | RAG | MCP | Azure |
              Application Security | Cloud &amp; API Architecture
            </p>
            <div className="profile-meta">
              <span>🏢 Hybrid · Tiruchirappalli, Tamil Nadu, India</span>
              <span>🌐 Remote &amp; Hybrid Friendly</span>
            </div>
          </div>
        </header>

        <SocialLinks />
      </article>

      <article className="readme-card content-card">
        <ContentsNav />

        <About />

        <Experience />
        <Projects />

        <TechStack />

        <Education />

        <Certifications />

        <Contact />
      </article>
    </main>
  );
}
