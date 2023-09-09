import React from "react";
import cookingboardprev from "./img/cookingboardprev.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <div class="my-5 mx-5">
        <div class="container-xl align-items-center project bg-red">
          <Link to={`/cookingboard`} class="text-decoration-none linkwrapper">
            <div class="row p-5">
              <div class="col-md-8">
                <img class="img-fluid projectimg" alt="cookingboard" src={cookingboardprev}></img>
              </div>
              <div class="col-md-4 my-auto">
                <h1 class="text-md-end text-center pt-3 tx-white Poppins fw-semibold">Cooking Board</h1>
                <p class="fs-6 text-md-end tx-white fw-medium Montserrat">Simple recipe web app</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
