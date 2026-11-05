import Image from "next/image";
import linkedin from "@/public/icons/linkedin.svg";
import github from "@/public/icons/github.svg";
import gmail from "@/public/icons/gmail.svg";
import huggingface from "@/public/icons/huggingface.svg";
import resume from "@/public/icons/resume.svg";
import whatsapp from "@/public/icons/whatsapp.svg";

const links = [
  ["LinkedIn", "https://www.linkedin.com/in/reeganrajasekar", linkedin],
  ["GitHub", "https://github.com/reeganrajasekar", github],
  ["Hugging Face", "https://huggingface.co/reeganrajasekar", huggingface],
  ["Email", "mailto:areeganrajasekar@gmail.com", gmail],
  ["WhatsApp", "https://wa.me/917094093096", whatsapp],
  ["View Resume", "/Reegan-Rajasekar-CV.pdf", resume],
] as const;

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {links.map(([name, url, icon]) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel={url.startsWith("http") ? "noreferrer" : undefined}
        >
          <Image src={icon} alt="" width={18} height={18} />
          {name}
        </a>
      ))}
    </div>
  );
}
