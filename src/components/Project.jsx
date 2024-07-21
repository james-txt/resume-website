import React from "react";
import cookingboardprev from "./img/cookingboardprev.png";
import pwalletprev from "./img/pwalletprev.png";
import pubmedfetcherprev from "./img/pubmedfetcherprev.gif";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>

      <div className="my-4 mx-5">
        <div className="container-xl align-items-center project bg-peach">
          <a href="https://github.com/james-txt/pocketwallet" className="text-decoration-none">
            <div className="row p-5">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="pubmedfetcher" src={pwalletprev}></img>
              </div>
              <div className="col-md-4 my-auto">
                <h1 className="text-md-end text-center pt-3 tx-white Poppins fw-semibold">pocket Wallet</h1>
                <p className="fs-6 text-center text-md-end tx-white fw-medium Montserrat">Crypto wallet extension</p>
                <p className="fs-7 text-center text-md-end tx-white fw-medium Montserrat">- Work in progress -</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      <div className="mt-4 mx-5">
        <div className="container-xl align-items-center project bg-red">
          <Link to={`/cookingboard`} className="text-decoration-none">
            <div className="row p-5">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="cookingboard" src={cookingboardprev}></img>
              </div>
              <div className="col-md-4 my-auto">
                <h1 className="text-md-end text-center pt-3 tx-white Poppins fw-semibold">Cooking Board</h1>
                <p className="fs-6 text-center text-md-end tx-white fw-medium Montserrat">Simple recipe web app</p>
              </div>
            </div>
          </Link>
        </div>
      </div>



      <div className="my-4 mx-5">
        <div className="container-xl align-items-center project bg-turq">
          <a href="https://github.com/james-txt/yaleswecas" className="text-decoration-none">
            <div className="row p-5">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="pubmedfetcher" src={pubmedfetcherprev}></img>
              </div>
              <div className="col-md-4 my-auto">
                <h1 className="text-md-end text-center pt-3 tx-white Poppins fw-semibold">PubMed Publication Fetcher</h1>
                <p className="fs-6 text-center text-md-end tx-white fw-medium Montserrat">Publications app</p>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Project
