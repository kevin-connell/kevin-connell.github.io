import AboutMe from '../compnents/AboutMe';
import ProjectList from '../compnents/ProjectList';
import Skills from '../compnents/Skills';
import WelcomeMessage from '../compnents/WelcomeMessage';

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
