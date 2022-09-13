// import React from "react";
import Navbar from "./Navbar/Navbar.js";
import About from "./About/About.js";
import Section from "./Section/Section.js";
import "./style.css";
import Footer from "./Footer/Footer.js";
const App=()=>{
 return (
    <div>
        <Navbar />
        <About />
        <Section
        head="Section 1"
        para=""
        />

       <Section
        head="Section 2"
        para=""
        />

       <Section
        head="Section 3"
        para=""
        />
    </div>
 )
}
export default App;