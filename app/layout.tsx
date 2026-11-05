import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://reegan.is-a.dev"),
  title: {
    default: "Reegan Rajasekar | Full-Stack Developer",
    template: "%s | Reegan Rajasekar",
  },
  description:
    "Portfolio of Reegan Rajasekar A, Software Engineer II at Adaptive Bizapp Systems, building secure, scalable applications with .NET, React, Azure, Python, and AI systems.",
  keywords: [
    "Reegan Rajasekar",
    "Full-stack Developer",
    "React Developer",
    "Angular Developer",
    ".NET Developer",
    "Node.js",
    "Web Developer Portfolio",
    "Remote Developer India",
  ],
  authors: [{ name: "Reegan Rajasekar", url: "https://reegan.is-a.dev" }],
  creator: "Reegan Rajasekar",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Reegan Rajasekar | Full-Stack Developer",
    description:
      "Portfolio of Reegan Rajasekar, full-stack developer specializing in Angular, React, .NET Core, Node.js, and Azure.",
    url: "/",
    siteName: "reegan.is-a.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Reegan Rajasekar | Full-Stack Developer",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f43b47",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
