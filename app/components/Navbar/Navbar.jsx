"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import Logo from "@/public/logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const isActive = (path) => (pathname === path ? "active" : "");

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "unset";
  }, [nav]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm mt-2">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src={Logo} alt="Reegan Logo" className="logo" title="Reegan Rajasekar" />
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex">
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/")}`} href="/">HOME</Link>
          </li>
          {/* <li className="nav-item">
            <Link className={`nav-link ${isActive("/projects")}`} href="/projects">PROJECTS</Link>
          </li> */}
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/experience")}`} href="/experience">EXPERIENCE</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/skills")}`} href="/skills">SKILLS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="mailto:areeganrajasekar@gmail.com">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setNav(true)} className="d-lg-none btn nav-btn" type="button">
          <HiOutlineMenuAlt3 size={28} />
        </button>

        {/* Mobile Nav Menu with Framer Motion */}
        <AnimatePresence>
          {nav && (
            <motion.nav
              key="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="mobilenav"
            >
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/")}`} href="/" onClick={() => setNav(false)}>HOME</Link>
              </li>
              {/* <li className="nav-item">
                <Link className={`nav-link ${isActive("/projects")}`} href="/projects" onClick={() => setNav(false)}>PROJECTS</Link>
              </li> */}
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/experience")}`} href="/experience" onClick={() => setNav(false)}>EXPERIENCE</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/skills")}`} href="/skills" onClick={() => setNav(false)}>SKILLS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="mailto:areeganrajasekar@gmail.com" onClick={() => setNav(false)}>CONTACT</Link>
              </li>
              <span className="close-btn" onClick={() => setNav(false)}>✕</span>

            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}