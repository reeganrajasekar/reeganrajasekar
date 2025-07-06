"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import "./page.css";

export default function Skills() {
  return (
    <main>
      <Navbar />

      <motion.section
        className='p-3 d-flex align-items-center justify-content-center flex-column gap-4 top'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ background: "white" }}
      >
        <motion.h2
          className='heading mt-3'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skills
        </motion.h2>

        <div className="container">
          <div className="row g-2">
            <div className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5>Languages</h5>
                <hr className="mt-0" />
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ backgroundColor: "#f59e0b", color: "#fff" }}>JavaScript</span>
                  <span className="badge" style={{ backgroundColor: "#2d3748", color: "#fff" }}>TypeScript</span>
                  <span className="badge" style={{ backgroundColor: "#4F5D95", color: "#fff" }}>PHP</span>
                  <span className="badge" style={{ backgroundColor: "#178600", color: "#fff" }}>C#</span>
                  <span className="badge" style={{ backgroundColor: "#003B57", color: "#fff" }}>SQL</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5>Frontend</h5>
                <hr className="mt-0" />
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ backgroundColor: "#61dafb", color: "#000" }}>React</span>
                  <span className="badge" style={{ backgroundColor: "#dd1b16", color: "#fff" }}>Angular</span>
                  <span className="badge" style={{ backgroundColor: "#000000", color: "#fff" }}>Next.js</span>
                  <span className="badge" style={{ backgroundColor: "#e34c26", color: "#fff" }}>HTML</span>
                  <span className="badge" style={{ backgroundColor: "#38b2ac", color: "#fff" }}>Tailwind</span>
                  <span className="badge" style={{ backgroundColor: "#7952b3", color: "#fff" }}>Bootstrap</span>
                  <span className="badge" style={{ backgroundColor: "#02569B", color: "#fff" }}>Flutter (basic)</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5>Backend</h5>
                <hr className="mt-0" />
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ backgroundColor: "#43853d", color: "#fff" }}>Node.js</span>
                  <span className="badge" style={{ backgroundColor: "#303030", color: "#fff" }}>Express</span>
                  <span className="badge" style={{ backgroundColor: "#8892be", color: "#fff" }}>PHP (Core)</span>
                  <span className="badge" style={{ backgroundColor: "#512bd4", color: "#fff" }}>ASP.NET Core</span>
                  <span className="badge" style={{ backgroundColor: "#512bd4", color: "#fff" }}>.NET Core WebAPI</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5>Databases</h5>
                <hr className="mt-0" />
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ backgroundColor: "#00758f", color: "#fff" }}>MySQL</span>
                  <span className="badge" style={{ backgroundColor: "#cc2927", color: "#fff" }}>SQL Server</span>
                  <span className="badge" style={{ backgroundColor: "#47a248", color: "#fff" }}>MongoDB</span>
                  <span className="badge" style={{ backgroundColor: "#d82c20", color: "#fff" }}>Redis</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5>Cloud & DevOps</h5>
                <hr className="mt-0" />
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ backgroundColor: "#0078d4", color: "#fff" }}>Azure</span>
                  <span className="badge" style={{ backgroundColor: "#ffcc30", color: "#000" }}>Firebase</span>
                  <span className="badge" style={{ backgroundColor: "#0db7ed", color: "#fff" }}>Docker</span>
                  <span className="badge" style={{ backgroundColor: "#24292e", color: "#fff" }}>GitHub Actions</span>
                  <span className="badge" style={{ backgroundColor: "#17a2b8", color: "#fff" }}>CI/CD</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="skill-card">
                <h5>Tools</h5>
                <hr className="mt-0" />
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge" style={{ backgroundColor: "#f1502f", color: "#fff" }}>Git</span>
                  <span className="badge" style={{ backgroundColor: "#f24e1e", color: "#fff" }}>Figma</span>
                  <span className="badge" style={{ backgroundColor: "#ff6c37", color: "#fff" }}>Postman</span>
                  <span className="badge" style={{ backgroundColor: "#333", color: "#fff" }}>Linux</span>
                  <span className="badge" style={{ backgroundColor: "#0078d4", color: "#fff" }}>Azure DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}