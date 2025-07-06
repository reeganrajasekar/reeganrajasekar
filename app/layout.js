import 'bootstrap/dist/css/bootstrap.css';
import Logo from "@/public/logo.svg";

export const metadata = {
  title: 'Reegan Rajasekar | Portfolio',
  description: `
    Hi, I’m Reegan Rajasekar — a full-stack developer with around 3 years of experience building websites and apps.
    Skilled in Angular, React, Node.js, MongoDB, PHP, Python, and ASP.NET Core.
    Passionate about creating scalable, user-friendly, and responsive web applications that solve real-world problems.
    Check out my portfolio and get in touch.
  `,
  keywords: [
    'Reegan Rajasekar',
    'Fullstack Developer',
    'React Developer',
    'Angular Developer',
    'Node.js',
    'ASP.NET Core',
    'Web Developer Portfolio',
    'Remote Developer India'
  ],
  authors: [{ name: 'Reegan Rajasekar', url: 'https://reegan.is-a.dev' }],
  creator: 'Reegan Rajasekar',
  openGraph: {
    title: 'Reegan Rajasekar | Full-Stack Developer',
    description: 'Portfolio of Reegan Rajasekar, full-stack developer specializing in Angular, React, .NET Core, Node.js, and Azure.',
    url: 'https://reegan.is-a.dev',
    siteName: 'reegan.is-a.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reegan Rajasekar Portfolio'
      }
    ],
    type: 'website'
  },
  icons: [
    { rel: 'icon', url: Logo.src },
    { rel: 'apple-touch-icon', url: Logo.src }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="UTF-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
