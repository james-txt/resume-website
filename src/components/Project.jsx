import React from "react";
import cookingboardprev from "./img/cookingboardprev.png";
import pwalletprev from "./img/pwalletprev.png";
import cybersecurityawarenessprev from "./img/cybersecurityawarenessprev.png";
import pubmedfetcherprev from "./img/pubmedfetcherprev.gif";
import splashdashprev from "./img/splashdashprev.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>

      <div className="my-4 mx-4 mx-md-5">
        <div className="container-xl align-items-center project bg-purple">
          <a href="https://app.splashdash.com/reports/competitive-overview-for-ctmovingandstorage+jd7129ydjbfex4ybn32j80bagn7nnk5f" className="text-decoration-none">
            <div className="row px-5 py-3">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="splashdash" src={splashdashprev}></img>
              </div>
              <div className="col-md-4 my-auto">
                <h1 className="text-md-end text-center pt-3 tx-white Poppins fw-semibold">SplashDash</h1>
                <p className="fs-6 text-center text-md-end tx-white fw-medium Montserrat">Marketing Report Tool</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="my-4 mx-4 mx-md-5">
        <div className="container-xl align-items-center project bg-turq">
          <a href="https://github.com/james-txt/pocketwallet" className="text-decoration-none">
            <div className="row px-5 py-3">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="pwallet" src={pwalletprev}></img>
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
      
      <div className="my-4 mx-4 mx-md-5">
        <div className="container-xl align-items-center project bg-green">
          <Link to={`/cookingboard`} className="text-decoration-none">
            <div className="row px-5 py-3">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="cookingboard" src={cookingboardprev}></img>
              </div>
              <div className="col-md-4 my-auto mx-auto">
                <h1 className="text-md-end text-center pt-3 tx-white Poppins fw-semibold">Cooking Board</h1>
                <p className="fs-6 text-center text-md-end tx-white fw-medium Montserrat">Simple recipe web app</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="my-4 mx-4 mx-md-5">
        <div className="container-xl align-items-center project bg-peach">
          <a href="https://cybersecurity-awareness.vercel.app" className="text-decoration-none">
            <div className="row px-5 py-3">
              <div className="col-md-8 d-flex justify-content-center">
                <img className="img-fluid projectimg mx-auto d-block" alt="cybersecurityawareness" src={cybersecurityawarenessprev}></img>
              </div>
              <div className="col-md-4 my-auto">
                <h1 className="text-md-end text-center pt-3 tx-white Poppins fw-semibold">Cybersecurity Awareness Campaign</h1>
                <p className="fs-6 text-center text-md-end tx-white fw-medium Montserrat">Innovatech Solutions web app</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* <div className="my-4 mx-4 mx-md-5">
        <div className="container-xl align-items-center project bg-peach">
          <a href="https://github.com/james-txt/yaleswecas" className="text-decoration-none">
            <div className="row px-5 py-3">
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
      </div> */}

    </div>
  )
}

export default Project
