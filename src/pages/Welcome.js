import React from "react";
import WelcomeMessage from "../compnents/WelcomeMessage";
import ProjectList from "../compnents/ProjectList";
import AboutMe from "../compnents/AboutMe";



function Welcome() {
    return (
        <>
        <WelcomeMessage />
        <ProjectList />
        <AboutMe />
        </>
    );
}

export default Welcome;