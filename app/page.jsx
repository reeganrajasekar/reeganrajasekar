import Image from 'next/image'
import Link from 'next/link'
import "./page.css"
import intro from "@/public/intro.png"
import bgImage from "@/public/bg.png"
import linkedin from "@/public/linkedin.svg"
import github from "@/public/github.svg"
import twitter from "@/public/twitter.svg"
import instagram from "@/public/instagram.svg"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Project from "./components/Project/Project"

import one from "@/public/1.png"
import two from "@/public/2.png"
import three from "@/public/3.png"

export default function Home() {
  return(
    <main>
      <Navbar></Navbar>
      <section  style={{backgroundImage:`url(${bgImage.src})`}} className='top px-4 d-flex align-items-center justify-content-center flex-column gap-3'>
        <h1 className='text-center display-1 fw-bolder pb-3 font-monospace'>
          Hi, I'm <span>Reegan</span>,
          <br></br>
          a Fullstack Developer.
        </h1>
        <div className='p-3 container'>
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 text-end mb-2">
                <a target='blank' href="/resume.pdf">
                  <button className='btn-border rounded-pill px-5 py-2'>Resume</button>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 text-start mb-2">
                <a target='blank' href="mailto://areeganrajasekar@gmail.com">
                  <button className='btn-full rounded-pill  px-5 py-2'>Contact</button>
                </a>
              </div>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5 social'>
          <a target='blank' href="https://www.linkedin.com/in/reeganrajasekar">
            <Image src={linkedin} alt='LinkedIn' width="20px" height="40px"></Image>
          </a>
          <a target='blank' href="https://github.com/reeganrajasekar">
            <Image src={github} alt='Github'></Image>
          </a>
          <a target='blank' href="https://twitter.com/reeganrajasekar">
            <Image src={twitter} alt='Twitter'></Image>
          </a>
          <a target='blank' href="https://instagram.com/reeganrajasekar">
            <Image src={instagram} alt='Instagram'></Image>
          </a>
        </div>
      </section>
      <article className='container p-4 my-5 rounded-5 shadow-lg'>
        <div className='row align-items-center'>
          <div className="col-sm-12 col-md-12 col-lg-8 h-100">
            <div className='d-felex h-100 align-items-center'>
              <p className='text-secondary text-justify fs-5 fw-normal lh-base font-monospace'>
                &ensp;&ensp;I’m a full-stack developer with 1+ years of experience in building websites and apps. 
                I have worked with various technologies such as Angular, React, Node.js, MongoDB, PHP, Python, ASP.NET CORE and etc. 
                <br></br>&ensp;&ensp;I enjoy creating user-friendly and responsive web applications that solve real-world problems.
                You can check out my portfolio and contact me.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 text-center">
            <Image src={intro} alt='Developer Image' className='w-75 h-auto'></Image>
          </div>
        </div>
      </article>
      <section className='container p-3 my-5 d-flex align-items-center justify-content-center flex-column gap-2'>
        <h2 className='heading pb-2'>Featured Projects</h2>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <Project img={one} title="SJCET - Website" desc="St. Joseph's College of Engg & Tech , Thanjavur - Website with Admin panel" link="https://sjcettnj.edu.in/"></Project>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <Project img={two} title="SJCET Departments - Website" desc="St. Joseph's College of Engg & Tech , Thanjavur - Departments Websites with Admin panel (CSE , EEE , ECE , Mech , MBA , S&H)" link="https://cse.sjcettnj.edu.in/"></Project>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
            <Project img={three} title="SJCET Alumni Portel" desc="St. Joseph's College of Engg & Tech , Thanjavur - Alumni Portal with Admin panel" link="https://alumni.sjcettnj.edu.in/"></Project>
          </div>
        </div>
        <div className='text-end w-100'>
          <Link href="/projects.html">
            <button className='btn-border rounded-pill px-3 py-1'>more</button>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
