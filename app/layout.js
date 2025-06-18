import 'bootstrap/dist/css/bootstrap.css'
import Logo from "@/public/logo.svg"

export const metadata = {
  title: 'Reegan Rajasekar | Portfolio',
  description: `
  Hi,I’m Reegan Rajasekar a full-stack developer with around 3 years of experience in building websites and apps. 
  I have worked with various technologies such as Angular, React, Node.js, MongoDB, PHP, Python, ASP.NET CORE and etc. 
  I enjoy creating user-friendly and responsive web applications that solve real-world problems.
  You can check out my portfolio and contact me.
  `,
  icons: [{ rel: 'icon', url: Logo.src }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="areeganraja" data-color="#FFDD00" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>
    </html>
  )
}
