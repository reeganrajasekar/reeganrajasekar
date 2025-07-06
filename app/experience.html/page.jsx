"use client";

import Image from 'next/image';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import "./page.css";

export default function Experience() {
  return (
    <main>
      <Navbar />

      <motion.section
        className='p-3 d-flex align-items-center justify-content-center flex-column gap-4 top'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className='heading mt-3'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience
        </motion.h2>

        <div className="w-100">
          <ul className='ul d-flex flex-column gap-4 px-2'>
            <motion.li
              style={{ '--accent-color': '#2E8B57' }}
              className='shadow rounded-4 p-4 m-0 bg-white border-start border-5 border-danger position-relative'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-1 fw-bold text-dark">Know Your Leader</h5>
              <p className="mb-0 text-muted">Fullstack Engineer (2024 - Present)</p>
              <small className="text-primary">Currently serving notice period.</small>
              <p className="mt-2 text-muted">
                Developed and deployed a fully functional political feedback application using React, .Net Core Webapi, SQl Server. Managed a small engineering team to implement features like notification systems (FCM), real-time dashboards, leader profile mapping, and multi-role authentication. Handled full CI/CD pipelines with Azure. Architected and scaled backend using Redis cache and optimized MongoDB indexing.
              </p>
              <div className="badges mt-3 d-flex flex-wrap gap-2">
                <span className="badge bg-danger">Angular</span>
                <span className="badge bg-primary">React</span>
                <span className="badge bg-success">Flutter (basic)</span>
                <span className="badge bg-primary">.NET Core WebAPI</span>
                <span className="badge bg-success">Node.js</span>
                <span className="badge bg-secondary">PHP</span>
                <span className="badge bg-secondary">MySQL</span>
                <span className="badge bg-dark">SQL Server</span>
                <span className="badge bg-warning text-dark">MongoDB</span>
                <span className="badge bg-info text-dark">Azure</span>
                <span className="badge bg-danger">Firebase</span>
                <span className="badge bg-danger">Redis</span>
              </div>
            </motion.li>

            <motion.li
              style={{ '--accent-color': '#41516C' }}
              className='shadow rounded-4 p-4 m-0 bg-white border-start border-5 border-primary position-relative'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-1 fw-bold text-dark">UBTIINC</h5>
              <p className="mb-0 text-muted">Fullstack Developer (2023 - 2024)</p>
              <small className="text-secondary">Junior Software Engineer</small>
              <p className="mt-2 text-muted">
                Built enterprise-grade ESG compliance dashboards using Angular and .NET Core. Implemented secure authentication, role-based dashboards, dynamic reporting charts, and multi-tenant user support. Integrated with Microsoft Azure for hosting, app services, storage blobs, and CI/CD deployment pipelines. Created reusable Angular components and API endpoints for sustainability data tracking.
              </p>
              <div className="badges mt-3 d-flex flex-wrap gap-2">
                <span className="badge bg-danger">Angular</span>
                <span className="badge bg-primary">.NET CORE</span>
                <span className="badge bg-dark">SQL Server</span>
                <span className="badge bg-info text-dark">Azure</span>
              </div>
            </motion.li>

            <motion.li
              style={{ '--accent-color': '#1B5F8C' }}
              className='shadow rounded-4 p-4 m-0 bg-white border-start border-5 border-info position-relative'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="mb-1 fw-bold text-dark">Sirius, A CDW Company</h5>
              <p className="mb-0 text-muted">Fullstack Developer Intern (2022)</p>
              <small className="text-secondary">Intern</small>
              <p className="mt-2 text-muted">
                Assisted in building internal tools and dashboards for asset management and procurement using React and Node.js. Focused on CRUD operations, form validation, and MongoDB integrations. Collaborated with senior developers to build responsive UIs and connect to REST APIs. Participated in agile ceremonies and weekly code reviews.
              </p>
              <div className="badges mt-3 d-flex flex-wrap gap-2">
                <span className="badge bg-secondary">HTML</span>
                <span className="badge bg-secondary">CSS</span>
                <span className="badge bg-warning text-dark">JavaScript & jQuery</span>
                <span className="badge bg-success">React</span>
                <span className="badge bg-dark">NodeJS (Express)</span>
                <span className="badge bg-success-subtle text-dark">MongoDB</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}