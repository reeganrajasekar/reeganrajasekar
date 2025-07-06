// Updated Home.jsx with framer-motion animation
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import intro from "@/public/intro.png";
import bgImage from "@/public/bg.png";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";
import instagram from "@/public/instagram.svg";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./page.css"


export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundImage: `url(${bgImage.src})` }} className='top px-4 d-flex align-items-center justify-content-center flex-column gap-3 py-5'>
        <motion.h1
          className='text-center display-1 fw-bolder pb-3 font-monospace'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary">Reegan</span>,<br />
          a Full-Stack Developer.
        </motion.h1>

        <motion.div
          className='p-3 container'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="row">
            <div className="col-lg-6 text-end mb-2">
              <a target='_blank' href="/reegan_rajasekar.pdf">
                <button className='btn-border rounded-pill px-5 py-2'>Resume</button>
              </a>
            </div>
            <div className="col-lg-6 text-start mb-2">
              <a target='_blank' href="mailto:areeganrajasekar@gmail.com">
                <button className='btn-full rounded-pill px-5 py-2'>Contact</button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='d-flex justify-content-center align-items-center gap-4 flex-wrap social'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a target='_blank' href="https://www.linkedin.com/in/reeganrajasekar">
            <Image src={linkedin} alt='LinkedIn' width={40} height={40} />
          </a>
          <a target='_blank' href="https://github.com/reeganrajasekar">
            <Image src={github} alt='GitHub' width={40} height={40} />
          </a>
          <a target='_blank' href="https://instagram.com/reeganrajasekar">
            <Image src={instagram} alt='Instagram' width={40} height={40} />
          </a>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.article
        className='container p-4 my-5 rounded-5 shadow-lg'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className='row align-items-center'>
          <div className="col-lg-7">
            <div className='h-100 d-flex align-items-center'>
              <p className='text-secondary text-justify p fw-normal lh-base font-monospace p-2'>
                I'm a Full-Stack Developer with around <strong>2 years of experience</strong> building scalable, real-world web applications.<br /><br />
                I've worked extensively with <strong>Angular, React, PHP, .NET Core, and Node.js</strong>, and I'm confident across both frontend and backend stacks.
                I also bring solid experience with <strong>SQL Server, MySQL, MongoDB, and Redis</strong> — plus deploying and scaling apps on <strong>Microsoft Azure</strong>.<br /><br />
                I’ve built dashboards, admin panels, product apps, and even led startup teams. I enjoy solving problems and delivering clean, responsive UI with optimized backend logic.<br /><br />
                Currently open to <strong>remote full-time or night shift roles</strong>. You can check out my projects, and feel free to reach out!
              </p>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <Image src={intro} alt='Full-stack Developer - Reegan' className='w-100 h-auto' />
          </div>
        </div>
      </motion.article>

      <Footer />
    </main>
  );
}