import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://reegan.is-a.dev";
const siteTitle = "Reegan Rajasekar | Full Stack .NET & AI Engineer";
const siteDescription =
  "Full Stack Engineer with 3.5+ years in .NET, React, Angular, Azure and AI — building secure APIs, MCP servers and RAG pipelines. Tiruchirappalli, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Reegan Rajasekar",
  },
  description: siteDescription,
  applicationName: "Reegan Rajasekar — Portfolio & CV",
  authors: [{ name: "Reegan Rajasekar A", url: siteUrl }],
  creator: "Reegan Rajasekar A",
  publisher: "Reegan Rajasekar A",
  category: "technology",
  keywords: [
    "Reegan Rajasekar",
    "Reegan Rajasekar A",
    "Full Stack Engineer",
    "Full Stack Developer India",
    ".NET Developer",
    "C# Developer",
    "ASP.NET MVC Developer",
    "React Developer",
    "Angular Developer",
    "Azure Developer",
    "FastAPI Developer",
    "AI Engineer India",
    "MCP server developer",
    "RAG pipeline",
    "OpenAI Azure AI Foundry",
    "SQL Server Developer",
    "PostgreSQL",
    "Docker Kubernetes",
    "OWASP secure coding",
    "Tiruchirappalli developer",
    "Tamil Nadu software engineer",
    "Remote .NET developer",
    "Hire full stack developer",
    "Software Engineer II",
    "Developer portfolio",
  ],
  alternates: { canonical: "/" },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Reegan Rajasekar",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Reegan Rajasekar",
    title: siteTitle,
    description: siteDescription,
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reegan Rajasekar — Full Stack .NET & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        alt: "Reegan Rajasekar — Full Stack .NET & AI Engineer",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fa" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
