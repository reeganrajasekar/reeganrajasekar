import Image from 'next/image'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import "./page.css"

export default function Experience() {
  return(
    <main>
      <Navbar></Navbar>
      <section className='p-3 d-flex align-items-center justify-content-center flex-column gap-4 top'>
        <h2 className='heading mt-3'>Experience</h2>
        <div className="w-100">
          <ul className='ul'>
            <li style={{'--accent-color':'#41516C'}} className='shadow'>
              <div className="date">UBTIINC</div>
              <div className="title">Fullstack Developer ( 2023-now )</div>
              <div className="descr text-secondary h6">Junior Software Engineer</div>
              <div className="badges px-2 mb-2">
                <span className="bg-danger">Angular</span>
                <span className="bg-primary">.NET CORE</span>
                <span className="sql">SQL Server</span>
              </div>
            </li>
            <li style={{'--accent-color':'#1B5F8C'}} className='shadow'>
              <div className="date">Sirius , A CDW Company</div>
              <div className="title">Fullstack Developer ( 2022 )</div>
              <div className="descr text-secondary h6">Intern</div>
              <div className="badges px-2 mb-2">
                <span className="html">HTML</span>
                <span className="css">CSS</span>
                <span className="js">JavaScript&JQuery</span>
                <span className="react">React</span>
                <span className="node">NodeJS(Express JS)</span>
                <span className="mongo">MongoDB</span>
              </div>
            </li>
        </ul>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
