import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { Collapse } from 'reactstrap';

interface ProjectTileProps {
  color: string;
  dark: boolean;
  description: string;
  image: string;
  link: string;
  title: string;
}

const ProjectTile = ({
  color,
  dark,
  description,
  image,
  link,
  title,
}: ProjectTileProps) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const element = domRef.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    });

    observer.observe(element);
  }, []);

  const clickLink = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      key={link}
      ref={domRef}
      className={`projectTile fade-in-section ${dark ? 'dark' : ''} ${
        isVisible ? 'is-visible' : ''
      }`}
      onClick={clickLink}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <img alt={title} className="projectImage" src={image}></img>
      <div className="projectTitle" style={{ backgroundColor: color }}>
        <h2>{title}</h2>
        <Collapse isOpen={isOpen}>
          <h5 className="text" style={{ paddingBottom: '8px' }}>
            {description}
          </h5>
        </Collapse>
      </div>
    </div>
  );
};

export default ProjectTile;
