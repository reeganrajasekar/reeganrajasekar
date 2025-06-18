"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import Logo from "@/public/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const page = usePathname();
  const [nav, setNav] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image src={Logo} alt="Scion Logo" className="logo"></Image>
        </a>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex">
          <li className="nav-item">
            <Link
              className={"nav-link " + (page == "/" ? "active" : "")}
              href="/"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                "nav-link " + (page == "/projects.html" ? "active" : "")
              }
              href="/projects.html"
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                "nav-link " + (page == "/experience.html" ? "active" : "")
              }
              href="/experience.html"
            >
              EXPERIENCE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="mailto://areeganrajasekar@gmail.com"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setNav(true)}
          className="d-sm-block d-lg-none btn navbar-nav ms-auto"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav
          style={{ display: nav ? "flex" : "none" }}
          className="mobilenav navbar-nav bg-dark"
        >
          <li className="nav-item mb-5">
            <span
              className="nav-link bg-white text-dark d-inline px-3 shadow rounded-circle"
              onClick={() => setNav(false)}
            >
              X
            </span>
          </li>
          <li className="nav-item">
            <Link
              className={"nav-link " + (page == "/" ? "active" : "")}
              href="/"
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                "nav-link " + (page == "/projects.html" ? "active" : "")
              }
              href="/projects.html"
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                "nav-link " + (page == "/experience.html" ? "active" : "")
              }
              href="/experience.html"
            >
              EXPERIENCE
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="blank" href="//blog.reegan.website">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="mailto://reegan2002a@gmail.com@gmail.com"
            >
              CONTACT
            </Link>
          </li>
        </nav>
      </div>
    </nav>
  );
}
