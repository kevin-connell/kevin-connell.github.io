import React from "react";
import Project from "../compnents/Project";

function Portfolio() {
    return (
        <main class="container-fluid">
            <div class="row mb-2">
                <Project 
                title="BetterMe"
                image="https://kevinconnell96.github.io/images/betterMe.png"
                description="A recipe and fitness application that showcases my skills with APIs"
                link="https://kevinconnell96.github.io/BetterMe/"/>
                <Project 
                title="Coding Quiz"
                image="https://kevinconnell96.github.io/images/mainQuiz.png"
                description="A quiz application that utilizes local storage to store high scores exhibits an adaptive, sleek design."
                link="https://kevinconnell96.github.io/codeQuiz_KTC/"/>
                <Project 
                title= "Weather Dashboard"
                description= "A weather application that provides current weather data as well as a five day forecast using an API."
                image= "https://kevinconnell96.github.io/images/weatherDashboardDesktop.png"
                link="https://kevinconnell96.github.io/weatherDashboard_KTC/"/>
                <Project 
                title= "Book Chat"
                description= "A book club application that allows users to discuss their favorite books"
                image= "https://kevinconnell96.github.io/images/bookChat.png"
                link="https://book--chat.herokuapp.com/"/>
                <Project 
                title= "Eat Sushi!"
                description= "This application uses a database to store sushi that the user can input and eat!"
                image= "https://kevinconnell96.github.io/images/sushi.png"
                link="https://obscure-anchorage-32634.herokuapp.com/"/>
                <Project 
                title= "Node Employee System"
                description= "This is a node.js application that alows a user to track departments, employees, and roles within a company"
                image= "https://kevinconnell96.github.io/images/employeeSystem.png"
                link="https://github.com/kevinconnell96/employeeSystem"/>
            </div>
        </main>
    );
}

export default Portfolio;