import React from "react";
import Image from "./Image";
import phoneprev1 from "./img/s1prev1.png";
import mobilefw from "./img/mobilefw.png";
import toolkit from "./img/toolkit.png";
import framekit from "./img/framekit.png";
import desktopfw from "./img/desktopfw.png";
import typography from "./img/typography.png";
import colorpalette from "./img/colorpalette.png";
import buttons from "./img/buttons.png";
import logo from "./img/logo.png";
import databasefw from "./img/databasefw.png";
import cicdazure from "./img/cicdazure.png";
import cicderror from "./img/cicderror.png";
import cicderror1 from "./img/cicderror1.png";
import apifunction from "./img/apifunction.png";
import databaseac from "./img/databaseac.png";
import testing from "./img/testing.png";
import testing1 from "./img/testing1.png";
import todo from "./img/todo.png";



const Cookingboard = () => {
  return (
    <main>
      <section className="container-fluid bg-strawberry">
        <div className="row col-md-12 pt-255 align-items-center">
          <div className="col-md-6 text-md-end">
            <img src={phoneprev1} alt="phonepreview1" className="img-fluid pr-180"></img>
          </div>
          <article className="col-lg-4 col-md-6 text-md-start">
            <h1 className="pj1">Cooking Board</h1>
            <p className="d-block pj3">Food Recipe Web App</p>
            <div className="d-block">
            <a href="https://cooking-board.vercel.app/">cookingboard.live/</a>
            </div>
            <h2 className="d-inline-block pj2 pt-40">Overview</h2>
            <p className="d-inline-block pj3 pt-1">
              Presenting an array of meticulously crafted recipes from my previous career, offered for everyone's enjoyment. 
              It's a rich spread of knowledge and skills spanning across the old and the new. Just as food holds the ability to bring people together, this project represents the fusion of my journey from the past to the present.
            </p>
            <h2 className="d-inline-block pj2 pt-40">Goal</h2>
            <p className="d-inline-block pj3 pt-1">
              Utilize an agile software development process to efficiently develop a user-friendly single-page web app that seamlessly facilitates quick and easy recipe searching.
            </p>
          </article>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-vanilla">
        <div className="d-inline-block col-lg-5 text-md-start mt-150 mx-150">
          <h2 className="pj2">Design</h2>
          <p className="d-inline-block pj3 pt-1">
          Gaining inspiration from various popular recipe websites, using their foundation to construct the wireframe layout. 
          This approach infuses proven design elements into the layout.            
          </p>
        </div>
        <div className="container justify-content-center pt-10">
          <Image image={mobilefw} alt="mobilefw"/>
        </div>
        <div className="row col-md-12 pt-40 justify-content-around align-items-center text-center">
          <div className="col-md-4 text-md-end">
            <img src={toolkit} alt="toolkit" className=""></img>
          </div>
          <div className="col-md-4 text-md-start pt-md-10">
            <img src={framekit} alt="framekit" className=""></img>
          </div>
        </div>
        <div className="container justify-content-around pt-40">
          <Image image={desktopfw} alt="desktopfw"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-chocolate">
        <div className="pt-150 col-md-6 text-center mx-auto">
          <h2 className="pj2">Style</h2>
          <p className="d-block pj3 pt-1">
          Poppins, with its modern and clean design, effortlessly communicates a sense of professionalism yet fun to users. 
          The color palette takes inspiration from the classic Neapolitan ice cream, featuring soft shades of vanilla, hot pink, and rich chocolate.           
          </p>
        </div>
        <div className="row col-md-12 pt-40 justify-content-around text-center">
          <div className="col-md-3">
            <img src={typography} alt="typography" className="pt-md-40"></img>
          </div>
          <div className="col-md-3">
            <img src={colorpalette} alt="colorpalette" className="pt-md-40"></img>
          </div>
          <div className="col-md-3">
            <img src={buttons} alt="buttons" className="pt-md-40"></img>
          </div>
          <div className="col-md-3">
            <img src={logo} alt="logo" className="pt-md-40"></img>
          </div>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-strawberry">
        <div className="col-lg-5 offset-lg-6 text-wrap pt-150 mx-150">
          <h2 className="pj2">Development</h2>
          <p className="d-inline-block pj3 pt-1">
          Embracing the potential of Microsoft Azure was an intuitive decision for my project, as it offered an set of robust tools perfectly aligned with my project's requirements. 
          Leveraging Azure Cosmos DB for efficient data management, Azure Functions for RESTful APIs and Azure Static Web Apps for streamlined deployment.            
          </p>
        </div>
        <div className="container justify-content-center pt-10">
          <Image image={databasefw} alt="databasefw"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-vanilla">
        <div className="d-block col-lg-5 text-md-start pt-150 mx-150">
          <h2 className="pj2">Test Driven Development (TDD)</h2>
          <p className="d-inline-block pj3 pt-1">
          Created tests for rendering, image visibility, link functionality, and mock data validation to ensure the reliability and correctness of my web app's components. 
          </p>
        </div>
        <div className="container justify-content-center pt-40">
          <Image image={testing} alt="testing"/>
        </div>
        <div className="d-block col-lg-5 text-md-start pt-40 mx-150">
          <p className="pj3">
          Setup pre-commit test automation process using GitHub Actions workflow to enforce a robust CI/CD pipeline for my project, guaranteeing that code changes undergo rigorous testing before integration, thus enhancing code quality and reliability.
          </p>
        </div>
        <div className="container justify-content-center pt-40">
          <Image image={testing1} alt="testing1"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-chocolate">
        <div className="d-block col-md-6 text-center pt-150 mx-auto">
          <h2 className="pj2">CI/CD</h2>
          <p className="d-inline-block pj3 pt-1">
          Implemented Continuous Integration and Continuous Deployment (CI/CD) using Git and Azure Static Web Apps CI/CD practices to automate code testing, 
          build processes, and deployment, ensuring a streamlined and efficient development workflow.            
          </p>
        </div>
        <div className="container justify-content-center pt-40">
          <Image image={cicdazure} alt="cicdazure"/>
        </div>
        <div className="d-block col-md-6 text-center mx-auto">
          <p className="d-inline-block pj3 pt-40">
          During the CI/CD process, encountered errors related to deprecated packages. 
          Successfully resolved these issues by performing updates with npm and modifying the package-lock.json file, 
          ensuring the project's dependencies were up-to-date and compatible with the latest versions.   
          </p>
        </div>
        <div className="container justify-content-center pt-40">
          <Image image={cicderror} alt="cicderror"/>
        </div>
        <div className="container justify-content-center pt-10">
          <Image image={cicderror1} alt="cicderror1"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-strawberry">
        <div className="d-inline-block col-lg-5 text-md-start mt-150 mx-150">
          <h2 className="pj2">APIs & Azure Functions</h2>
          <p className="d-inline-block pj3 pt-1">
          Developed and deployed RESTful APIs to Azure Functions which seamlessly retrieve data from a Cosmos database. 
          These APIs enable users to perform various queries, including searches by user input, specific IDs, and strings, 
          thereby enhancing the flexibility and accessibility of data retrieval.           
          </p>
        </div>
        <div className="container justify-content-center pt-40">
          <Image image={apifunction} alt="apifunction"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-vanilla">
        <div className="col-lg-5 offset-lg-6 text-wrap pt-150 mx-150">
          <h2 className="pj2">Azure Cosmos Database</h2>
          <p className="d-inline-block pj3 pt-1">
          NoSQL Azure Cosmos Database for its efficient serverless non-relational data structure, 
          allowing quick and flexible data queries that perfectly suited the needs of the web application.
          </p>
        </div>
        <div className="container col-12 justify-content-center pt-40">
          <Image image={databaseac} alt="databaseac"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

      <section className="container-fluid bg-chocolate">
        <div className="d-block pt-150 col-md-6 text-center mx-auto">
          <h2 className="d-block pj2">Review</h2>
          <p className="d-block pj3 pt-1">
            The Cooking Board project has been a remarkable journey, It's been a profound learning experience, as I transitioned from culinary arts to coding. 
            I was able to learn the essentials of modern web development, React.js and Azure services. Challenges emerged, notably in creating APIs, Azure authentication, implementing Git and addressing CI/CD issues with deprecated packages. 
            However, extreme perseverance and meticulous problem-solving led to my success. This project showcases my adaptability, resilience, and commitment to mastering new skills. As I look ahead, I am excited to continue refining this project as I explore new horizons in the world of web development.        
          </p>
        </div>
        <div className="container col-12 justify-content-center text-center pt-40">
          <Image image={todo} alt="todo"/>
        </div>
        <div className="d-inline-block mb-150"></div>
      </section>

    </main>  
  )
}

export default Cookingboard
