import React from 'react';
import { Container } from 'reactstrap';
import ProjectTile from '../ProjectTile';
import "./ProjectList.css"
import projects from '../UserInput'

const ProjectList = () => {

    return (
        <Container id="projectContainer">
            {projects.map((item, index) => <ProjectTile key={index} title={item.title} description={item.description} color={item.color} link={item.link} image={item.image}/>)}
        </Container>
    );
}

export default ProjectList;