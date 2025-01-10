import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Cookingboard from "./components/Cookingboard";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>        
        <script src="https://kit.fontawesome.com/2565ff5cba.js" crossorigin="anonymous"></script>
        <title>James Lo's Portfolio</title>
      </Helmet>
        <Navbar/>
      <main>
        <Routes>
            <Route exact path="/cookingboard" element={<Cookingboard />} />
            <Route path="/" element={<Project />} />
        </Routes>
      </main>
        <Footer/>
    </div>
  );
}

export default App;