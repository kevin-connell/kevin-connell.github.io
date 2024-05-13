import React from 'react';
import { Container } from 'reactstrap';

import ProjectTile from '../ProjectTile';
import './ProjectList.css';
import projects from '../UserInput';

const ProjectList = () => {
  return (
    <Container id="projectContainer">
      <h2 style={{ color: '#808080', position: 'absolute', top: '15px' }}>
        PORTFOLIO
      </h2>
      {projects.map((item) => (
        <ProjectTile
          color={item.color}
          dark={item.dark}
          description={item.description}
          image={item.image}
          link={item.link}
          title={item.title}
        />
      ))}
    </Container>
  );
};

export default ProjectList;
