import React from "react";
import WelcomeMessage from "../compnents/WelcomeMessage";
import ProjectList from "../compnents/ProjectList";
import AboutMe from "../compnents/AboutMe";
import Skills from "../compnents/Skills";



function Welcome() {
    return (
        <>
        <WelcomeMessage />
        <ProjectList />
        <Skills />
        <AboutMe />
        </>
    );
}

export default Welcome;