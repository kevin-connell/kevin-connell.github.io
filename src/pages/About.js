import React from "react";

function About() {
  return (
    <main className="container-fluid container-opaque">
        <h2 className="customPadding2">About Kevin Connell</h2>
        <img src="https://kevinconnell96.github.io/images/profilePicture.jpg" alt="Kevin Connell" id="profilePic"/>
        <p>Hello! I am a Philadelphia-based artist expanding my skill set into the world of computer science. There isan extremely large overlap of problem-solving skills and creativity that goes into art-making and code-baking! I am looking to exploit those similarities and make my way into a new career path. Although, art remains my passion, there are many ways that I can apply my skills. I hope that this growing field gives me the ablility to show what I am made of!</p>
        <div className="clearfix"></div>
        <a className="btn btn-primary slideEm" href="https://github.com/kevinconnell96">GitHub</a>
        <a className="btn btn-primary slideEm" href="https://kevinconnell.myportfolio.com/">Art Portfolio</a>
        <a className="btn btn-primary slideEm" href="https://www.linkedin.com/in/kevin-connell-bbb704b4/">LinkedIn</a>
    </main>
  );
}

export default About;