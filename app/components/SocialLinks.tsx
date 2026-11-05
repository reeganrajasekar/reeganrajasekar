import Image from "next/image";
import linkedin from "@/public/icons/linkedin.svg";
import github from "@/public/icons/github.svg";
import gmail from "@/public/icons/gmail.svg";
import resume from "@/public/icons/resume.svg";
import whatsapp from "@/public/icons/whatsapp.svg";

const links = [
  ["LinkedIn", "https://www.linkedin.com/in/reeganrajasekar", linkedin],
  ["GitHub", "https://github.com/reeganrajasekar", github],
  ["Email", "mailto:areeganrajasekar@gmail.com", gmail],
  ["WhatsApp", "https://wa.me/917094093096", whatsapp],
  ["View CV", "/Reegan-Rajasekar-CV.pdf", resume],
] as const;

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social and contact links">
      {links.map(([name, url, icon]) => {
        const isExternal = url.startsWith("http");

        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={
              name === "View CV" ? "View the CV of Reegan Rajasekar (PDF)" : name
            }
          >
            <Image src={icon} alt="" width={18} height={18} aria-hidden="true" />
            {name}
          </a>
        );
      })}
    </div>
  );
}
