import {
  faBootstrap,
  faJsSquare,
  faNodeJs,
  faNpm,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';

import './Skills.css';
import SkillCircle from '../SkillCircle';

const Skills = () => {
  return (
    <Container id="skillContainer">
      <h2 style={{ color: '#808080', position: 'absolute', top: '-45px' }}>
        SKILLS
      </h2>
      <SkillCircle
        devIcon={true}
        icon={'devicon-html5-plain-wordmark'}
        title="HTML5"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-css3-plain-wordmark'}
        title="CSS3"
      />
      <SkillCircle devIcon={false} icon={faJsSquare} title="JavaScript" />
      <SkillCircle
        devIcon={true}
        icon={'devicon-jquery-plain-wordmark'}
        title="JQuery"
      />
      <SkillCircle devIcon={false} icon={faReact} title="React" />
      <SkillCircle devIcon={false} icon={faBootstrap} title="Bootstrap" />
      <SkillCircle devIcon={false} icon={faNodeJs} title="Node.js" />
      <SkillCircle devIcon={false} icon={faNpm} title="npm Packages" />
      <SkillCircle
        devIcon={true}
        icon="devicon-express-original"
        title="Express.js"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-visualstudio-plain'}
        title="VSCode"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-mongodb-plain-wordmark'}
        title="MongoDB"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-mysql-plain-wordmark'}
        title="MySQL"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-sequelize-plain'}
        title="Sequelize"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-handlebars-plain'}
        title="Handlebars"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-photoshop-plain'}
        title="Photoshop"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-slack-plain'}
        title="Slack Workspace"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-git-plain'}
        title="Git System"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-github-original'}
        title="GitHub"
      />
      <SkillCircle
        devIcon={true}
        icon={'devicon-heroku-plain-wordmark'}
        title="Heroku"
      />
      <SkillCircle devIcon={false} icon={faTerminal} title="Command Line" />
      <SkillCircle devIcon={false} icon={faPlus} title="More to come..." />
    </Container>
  );
};

export default Skills;
