"use client";

import { useEffect, useState } from "react";

const sections: ReadonlyArray<readonly [string, string]> = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["tech-stack", "Tech stack"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function ContentsNav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-20% 0px -65%" },
    );

    sections.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="contents-bar" aria-label="Page sections">
      <strong>On this page</strong>
      {sections.map(([id, label]) => (
        <a
          href={`#${id}`}
          key={id}
          className={activeSection === id ? "active" : undefined}
          aria-current={activeSection === id ? "location" : undefined}
          onClick={() => setActiveSection(id)}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
