import React from 'react';
import { faBootstrap, faJsSquare, faNodeJs, faNpm, faReact } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'reactstrap';
import "./Skills.css"
import SkillCircle from '../SkillCircle';
import { faPlus, faTerminal } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {

    return (
        <Container id="skillContainer">
            <h2 style={{color: "#808080", position: "absolute", top: "-45px"}}>SKILLS</h2>
            <SkillCircle title="HTML5" devicon={true} icon={'devicon-html5-plain-wordmark'} />
            <SkillCircle title="CSS3" devicon={true} icon={'devicon-css3-plain-wordmark'} />
            <SkillCircle title="JavaScript" icon={faJsSquare} />
            <SkillCircle title="JQuery" devicon={true} icon={'devicon-jquery-plain-wordmark'} />
            <SkillCircle title="React" icon={faReact} />
            <SkillCircle title="Bootstrap" icon={faBootstrap} />
            <SkillCircle title="Node.js" icon={faNodeJs} />
            <SkillCircle title="npm Packages" icon={faNpm} />
            <SkillCircle title="Express.js" devicon={true} icon={'devicon-express-original'} />
            <SkillCircle title="VSCode" devicon={true} icon={'devicon-visualstudio-plain'} />
            <SkillCircle title="MongoDB" devicon={true} icon={'devicon-mongodb-plain-wordmark'} />
            <SkillCircle title="MySQL" devicon={true} icon={'devicon-mysql-plain-wordmark'} />
            <SkillCircle title="Sequelize" devicon={true} icon={'devicon-sequelize-plain'} />
            <SkillCircle title="Handlebars" devicon={true} icon={'devicon-handlebars-plain'} />
            <SkillCircle title="Photoshop" devicon={true} icon={'devicon-photoshop-plain'} />
            <SkillCircle title="Slack Workspace" devicon={true} icon={'devicon-slack-plain'} />
            <SkillCircle title="Git System" devicon={true} icon={'devicon-git-plain'} />
            <SkillCircle title="GitHub" devicon={true} icon={'devicon-github-original'} />
            <SkillCircle title="Heroku" devicon={true} icon={'devicon-heroku-plain-wordmark'} />
            <SkillCircle title="Command Line" icon={faTerminal} />
            <SkillCircle title="More to come..." icon={faPlus} />
        </Container>
    );
}

export default Skills;