import React from "react";
import headshot from "./img/user.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header class="mb-2">
      <div class="container-xl mx-auto">
      <br/>
        <div class="d-flex align-items-center mx-4">
          <Link to={`/`}>
            <img class="headshot border border-black rounded-circle" alt="headshot" src={headshot}/>
          </Link>
          <div>
            <p1 class="Questrial p-2 fs-5">James Lo</p1>
          </div>
          <nav class="d-flex ms-auto align-items-center me-2">
            <a href="https://github.com/james-txt/" class="bttn">
              <i class="fa fa-github" aria-hidden="true" />
            </a>
            {/*<a href="https://www.linkedin.com/in/james-txt" class="bttn">
              <i class="fa fa-linkedin" aria-hidden="true" />
            </a>*/}
            <a href="https://maps.app.goo.gl/jdVqkjfwU4U7DRqx5" class="bttn">
              <i class="fa fa-map-marker" aria-hidden="true" />
            </a>
          </nav>
        </div>
        <div class="d-flex justify-content-end mx-4">
          <nav>
              <Link to={`/`}>
                <p1 class="bproject bttn">Projects</p1>
              </Link>
              <span class="px-2">|</span>
              <a href="/James Lo Resume Aug2023.pdf" target="_blank" rel="noopener noreferrer">
                <p1 class="bresume bttn">Resume</p1>
              </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar