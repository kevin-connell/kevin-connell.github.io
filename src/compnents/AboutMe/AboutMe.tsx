import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'reactstrap';
import './AboutMe.css';

const AboutMe = () => {
  const handleLink = (event: React.MouseEvent<HTMLElement>) => {
    const linkToGoTo = event.currentTarget.getAttribute('data-link');

    if (linkToGoTo) window.open(linkToGoTo, '_blank');
  };

  return (
    <Container id="aboutMeContainer">
      <main id="contentPlayground">
        <div id="bioContainer">
          <div id="bioText">
            <h3 className="whiteText">ABOUT ME</h3>
            <p className="whiteText">
              I am a creative full stack web developer, with a background in
              fine arts and art history. I am eager to leverage my experience
              leading a painting department with newly acquired web development
              skills to solve problems in the tech industry. I recently
              graduated from the University of Pennsylvania LPS Coding Bootcamp.
              Innovative problem-solving, creativity and teamwork are the core
              of my strengths! I enjoy visiting museums, hiking, cooking, and
              staying up to date with current events.
            </p>
          </div>
          <div id="contactInfo">
            <h5>
              <a
                href="mailto: kevin.t.connell@gmail.com"
                style={{ color: 'lightskyblue' }}
              >
                kevin.t.connell@gmail.com
              </a>
            </h5>
            <h5>
              <a href="tel:267-370-4348" style={{ color: 'lightskyblue' }}>
                (267) 370-4348
              </a>
            </h5>
          </div>
        </div>
        <div id="headShotContainer">
          <img
            alt="Kevin Connell"
            id="headShot"
            src="https://res.cloudinary.com/djlzaftm2/image/upload/v1609362081/IMG_4147_vll4ys.jpg"
          ></img>
          <div id="linkCircles">
            <div className="linkContainer">
              <figure
                className="circleEl"
                data-link="https://www.linkedin.com/in/kevinconnell20/"
                onClick={handleLink}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </figure>
              <p className="circleText">LinkedIn</p>
            </div>
            <div className="linkContainer">
              <figure
                className="circleEl"
                data-link="https://github.com/kevinconnell96"
                onClick={handleLink}
              >
                <FontAwesomeIcon icon={faGithub} />
              </figure>
              <p className="circleText">GitHub</p>
            </div>
            <div className="linkContainer">
              <figure
                className="circleEl"
                data-link="https://docs.google.com/document/d/1i3KouhU4TKPGRY89seNG_4QRuLBVtr4ul0ppZD8a7Lw/edit?usp=sharing"
                onClick={handleLink}
              >
                <FontAwesomeIcon icon={faFileAlt} />
              </figure>
              <p className="circleText">Resume</p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default AboutMe;
