import Image from 'next/image'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Project from "../components/Project/Project"
import "./page.css"

import one from "@/public/1.png"
import two from "@/public/2.png"
import three from "@/public/3.png"
import four from "@/public/4.png"
import Link from 'next/link'


export default function Projects() {
  return(
    <main>
      <Navbar></Navbar>
      <section className='container p-3 d-flex align-items-center justify-content-center flex-column gap-4 top'>
        <h2 className='heading mt-3'>Featured Projects</h2>
        <div className="w-100">
          <div className="container">
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
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4">
                <Project img={four} title="Knowyourleader" desc="Social Media Clone" link="https://user.knowyourleaders.in/"></Project>
              </div>
            </div>
          </div>
        </div>
        <div className='text-end w-100'>
          <Link href="https://github.com/reeganrajasekar">
            <button className='btn-border rounded-pill px-3 py-1'>more on Github</button>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
