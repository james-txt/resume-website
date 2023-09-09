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


const Cookingboard = () => {
  return (
    <main>
      <section class="container-fluid bg-strawberry">
        <div class="row col-md-12 pt-255 align-items-center">
          <div class="col-md-6 text-md-end">
            <img src={phoneprev1} alt="phonepreview1" class="img-fluid pr-180"></img>
          </div>
          <article class="col-lg-4 col-md-6 text-md-start">
            <pj1>Cooking Board</pj1>
            <pj3 class="d-block">Food Recipe Web App
            <a class="d-block pt-10" href="https://www.cookingboard.live/">cookingboard.live/</a>
            </pj3>
            <pj2 class="d-inline-block pt-40">Overview</pj2>
            <pj3 class="d-inline-block pt-1">
              Presenting an array of meticulously crafted recipes from my previous career, offered for everyone's enjoyment. 
              It's a rich spread of knowledge and skills spanning across the old and the new. Just as food holds the ability to bring people together, this project represents the fusion of my journey from the past to the present.
            </pj3>
            <pj2 class="d-inline-block pt-40">Goal</pj2>
            <pj3 class="d-inline-block pt-1">
              Develop an simple user-friendly single-page web app that provides quick and easy recipe searching with a seamless interface.
            </pj3>
          </article>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-vanilla">
        <div class=" d-inline-block col-lg-5 text-md-start mt-150 mx-150">
         <pj2>Design</pj2>
          <pj3 class="d-inline-block pt-1">
          Gaining inspiration from various popular recipe websites, using their foundation to construct the wireframe layout. 
          This approach infuses proven design elements into the layout.            
          </pj3>
        </div>
        <div class="container justify-content-center pt-10">
          <Image image={mobilefw} alt="mobilefw"/>
        </div>
        <div class="row col-md-12 pt-40 justify-content-around align-items-center text-center">
          <div class="col-md-4 text-md-end">
            <img src={toolkit} alt="toolkit" class=""></img>
          </div>
          <div class="col-md-4 text-md-start pt-md-10">
            <img src={framekit} alt="framekit" class=""></img>
          </div>
        </div>
        <div class="container justify-content-around pt-40">
          <Image image={desktopfw} alt="desktopfw"/>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-chocolate">
        <div class="pt-150 col-md-6 text-center mx-auto">
          <pj2>Style</pj2>
            <pj3 class="d-block pt-1">
            Poppins, with its modern and clean design, effortlessly communicates a sense of professionalism yet fun to users. 
            The color palette takes inspiration from the classic Neapolitan ice cream, featuring soft shades of vanilla, hot pink, and rich chocolate.           
            </pj3>
        </div>
        <div class="row col-md-12 pt-40 justify-content-around text-center">
          <div class="col-md-3">
            <img src={typography} alt="typography" class="pt-md-40"></img>
          </div>
          <div class="col-md-3">
            <img src={colorpalette} alt="colorpalette" class="pt-md-40"></img>
          </div>
          <div class="col-md-3">
            <img src={buttons} alt="buttons" class="pt-md-40"></img>
          </div>
          <div class="col-md-3">
            <img src={logo} alt="logo" class="pt-md-40"></img>
          </div>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-strawberry">
        <div class="col-lg-5 offset-lg-6 text-wrap pt-150 mx-150">
         <pj2>Development</pj2>
          <pj3 class="d-inline-block pt-1">
          Embracing the potential of Microsoft Azure was an intuitive decision for my project, as it offered an set of robust tools perfectly aligned with my project's requirements. 
          Leveraging Azure Cosmos DB for efficient data management, Azure Functions for RESTful APIs and Azure Static Web Apps for streamlined deployment.            
          </pj3>
        </div>
        <div class="container justify-content-center pt-10">
          <Image image={databasefw} alt="databasefw"/>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-vanilla">
        <div class="d-block col-lg-5 text-md-start pt-150 mx-150">
          <pj2>CI/CD</pj2>
            <pj3 class="d-inline-block pt-1">
            Implemented Continuous Integration and Continuous Deployment (CI/CD) using Git and Azure Static Web Apps CI/CD practices to automate code testing, 
            build processes, and deployment, ensuring a streamlined and efficient development workflow.            
            </pj3>
        </div>
        <div class="container justify-content-center pt-40">
          <Image image={cicdazure} alt="cicdazure"/>
        </div>
        <div class="d-block col-lg-5 text-md-start pt-40 mx-150">
          <pj3 class="d-inline-block pt-40">
          During the CI/CD process, encountered errors related to deprecated packages. 
          Successfully resolved these issues by performing updates with npm and modifying the package-lock.json file, 
          ensuring the project's dependencies were up-to-date and compatible with the latest versions.   
          </pj3>
        </div>
        <div class="container justify-content-center pt-40">
          <Image image={cicderror} alt="cicderror"/>
        </div>
        <div class="container justify-content-center pt-10">
          <Image image={cicderror1} alt="cicderror1"/>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-chocolate">
        <div class="d-block pt-150 col-md-6 text-center mx-auto">
          <pj2 class="d-block">APIs & Azure Functions</pj2>
            <pj3 class="d-block pt-1">
            Developed and deployed RESTful APIs to Azure Functions which seamlessly retrieve data from a Cosmos database. 
            These APIs enable users to perform various queries, including searches by user input, specific IDs, and strings, 
            thereby enhancing the flexibility and accessibility of data retrieval.           
            </pj3>
        </div>
        <div class="container justify-content-center pt-40">
          <Image image={apifunction} alt="apifunction"/>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-strawberry">
        <div class="col-lg-5 offset-lg-6 text-wrap pt-150 mx-150">
         <pj2>Azure Cosmos Database</pj2>
          <pj3 class="d-inline-block pt-1">
          NoSQL Azure Cosmos Database for its efficient serverless non-relational data structure, 
          allowing quick and flexible data queries that perfectly suited the needs of the web application.
          </pj3>
        </div>
        <div class="container col-12 justify-content-center pt-40">
          <Image image={databaseac} alt="databaseac"/>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-vanilla">
        <div class="d-block col-lg-5 text-md-start pt-150 mx-150">
          <pj2>Test Driven Development (TDD)</pj2>
            <pj3 class="d-inline-block pt-1">
            Implemented Continuous Integration and Continuous Deployment (CI/CD) using Git and Azure Static Web Apps CI/CD practices to automate code testing, 
            build processes, and deployment, ensuring a streamlined and efficient development workflow.            
            </pj3>
        </div>
        {/*<div class="container justify-content-center pt-40">
            <Image image={cicdazure} alt="cicdazure"/>
          </div>*/}
        <div class="d-inline-block mb-150"></div>
      </section>

      <section class="container-fluid bg-chocolate">
        <div class="d-block pt-150 col-md-6 text-center mx-auto">
          <pj2 class="d-block">Review</pj2>
            <pj3 class="d-block pt-1">
            Developed and deployed RESTful APIs to Azure Functions which seamlessly retrieve data from a Cosmos database. 
            These APIs enable users to perform various queries, including searches by user input, specific IDs, and strings, 
            thereby enhancing the flexibility and accessibility of data retrieval.           
            </pj3>
        </div>
        <div class="container justify-content-center pt-40">
          <Image image={apifunction} alt="apifunction"/>
        </div>
        <div class="d-inline-block mb-150"></div>
      </section>

    </main>  
  )
}

export default Cookingboard
