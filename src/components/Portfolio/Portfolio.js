import React from "react";
import Home from "./Home/Home";
import Skill from "./Skill/Skill";
import Project from "./Project/Project";
import Exp from "./Experience/Exp";
import Contact from "./Contact/Contact";

const Portfolio = () => {
    return (
        <div>
            <Home />
            <Skill />
            <Project />
            <Exp />
            <Contact />
        </div>
    )
}

export default Portfolio;
