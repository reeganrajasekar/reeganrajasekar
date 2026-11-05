import Image from "next/image";
import type { Metadata } from "next";
import ContentsNav from "./components/ContentsNav";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";
import ThemeToggle from "./components/ThemeToggle";
import profile from "@/public/profile.webp";

const siteUrl = "https://reegan.is-a.dev";
const resumeUrl = `${siteUrl}/Reegan-Rajasekar-CV.pdf`;
const lastUpdated = new Date().toISOString().slice(0, 10);

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personSchema = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Reegan Rajasekar A",
  givenName: "Reegan",
  familyName: "Rajasekar",
  jobTitle: "Software Engineer II",
  description:
    "Full Stack Engineer with 3.5+ years of experience building secure, scalable web and mobile applications with .NET (C#), React, Angular, SQL Server and Azure, and production AI features including MCP servers, RAG pipelines and agents on OpenAI and Azure AI Foundry.",
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  email: "mailto:areeganrajasekar@gmail.com",
  telephone: "+91-70940-93096",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tiruchirappalli",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Adaptive Bizapp Systems",
    url: "https://adaptivebizapp.in/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "St. Joseph's College of Engineering and Technology",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thanjavur",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  knowsAbout: [
    ".NET",
    "C#",
    "ASP.NET MVC",
    "REST API development",
    "React",
    "Angular",
    "TypeScript",
    "SQL Server",
    "PostgreSQL",
    "Microsoft Azure",
    "Azure DevOps",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "Model Context Protocol",
    "Retrieval-Augmented Generation",
    "OpenAI",
    "Azure AI Foundry",
    "OWASP Top 10",
    "Secure API design",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Full Stack Development — ICT (IBM)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Full Stack JavaScript — Sirius (CDW)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: "Full Stack Development — Udemy",
    },
  ],
  award: [
    "Best Employee of the Quarter — SCION",
    "Spotlight Award — UBTIINC",
  ],
  sameAs: [
    "https://www.linkedin.com/in/reeganrajasekar",
    "https://github.com/reeganrajasekar",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Reegan Rajasekar — Full Stack .NET & AI Engineer",
  description:
    "Portfolio, experience and CV of Reegan Rajasekar A, a Full Stack Engineer building secure .NET, React, Angular, Azure and AI systems.",
  inLanguage: "en-IN",
  publisher: { "@id": `${siteUrl}/#person` },
};

const profilePageSchema = {
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#webpage`,
  url: `${siteUrl}/`,
  name: "Reegan Rajasekar | Full Stack .NET & AI Engineer",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#person` },
  mainEntity: { "@id": `${siteUrl}/#person` },
  inLanguage: "en-IN",
  dateModified: lastUpdated,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema, profilePageSchema],
};

export default async function Home() {
  return (
    <main className="github-shell" id="content">
      <a className="skip-link" href="#about">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
              alt="Portrait of Reegan Rajasekar, Full Stack Engineer"
              width={132}
              height={132}
              priority
            />
            <span className="profile-avatar-status" aria-hidden="true" />
          </div>
          <div className="profile-copy">
            <p className="profile-eyebrow">
              FULL STACK ENGINEER · .NET · REACT · AZURE · AI
            </p>
            <h1>
              Hi, I&apos;m{" "}
              <span className="profile-name">Reegan Rajasekar</span>
            </h1>
            <p className="profile-role">
              Software Engineer II at{" "}
              <a
                href="https://adaptivebizapp.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adaptive Bizapp Systems
              </a>
            </p>
            <p className="profile-headline">
              .NET (C#) · React · Angular · SQL Server · Azure · FastAPI · MCP ·
              RAG · OpenAI &amp; Azure AI Foundry · OWASP Application Security
            </p>
            <div className="profile-meta">
              <span>📍 Tiruchirappalli, Tamil Nadu, India · Hybrid</span>
              <span>💼 3.5+ years experience</span>
              <span>🌐 Remote &amp; Hybrid Friendly</span>
            </div>
            <div className="profile-actions">
              <a
                className="btn btn-primary"
                href={resumeUrl}
                download="Reegan-Rajasekar-CV.pdf"
              >
                ⬇ Download CV
              </a>
              <a className="btn btn-ghost" href="#contact">
                Let&apos;s talk →
              </a>
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

      <Footer />
    </main>
  );
}
