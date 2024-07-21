import React from "react";
import headshot from "./img/user.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="mb-2">
      <div className="container-xl mx-auto">
      <br/>
        <div className="d-flex align-items-center mx-4">
          <Link to={`/`}>
            <img className="headshot border border-black rounded-circle" alt="headshot" src={headshot}/>
          </Link>

            <h4 className="Questrial p-2 my-auto">James Lo</h4>

          <nav className="d-flex ms-auto align-items-center me-2">
            <a href="https://github.com/james-txt/" className="bttn">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
            {/*<a href="https://www.linkedin.com/in/james-txt" className="bttn">
              <i className="fa fa-linkedin" aria-hidden="true" />
            </a>*/}
            <a href="https://maps.app.goo.gl/b1ytkgWiRpfuUpWq5" className="bttn">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </a>
          </nav>
        </div>
          <nav className="d-flex justify-content-end mx-4">
              <Link to={`/`}>
                <p className="bproject bttn">Projects</p>
              </Link>
              <span className="px-2 my-2">|</span>
              <a href="/James Lo Resume.pdf" target="_blank" rel="noopener noreferrer">
                <p className="bresume bttn">Resume</p>
              </a>
          </nav>
      </div>
    </header>
  )
}

export default Navbar