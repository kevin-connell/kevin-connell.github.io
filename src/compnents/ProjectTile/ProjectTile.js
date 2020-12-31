import { useState, useEffect, useRef } from "react";
import React from 'react';
import { Collapse } from "reactstrap";

const ProjectTile = (props) => {

    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {setIsOpen(!isOpen)}

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            };
        });
        observer.observe(domRef.current);
    }, []);

    const clickLink = () => {window.open(props.link, '_blank')}



    return (
        <div onClick={clickLink} onMouseEnter={toggle} onMouseLeave={toggle} className={`projectTile fade-in-section ${props.dark ? 'dark' : ''} ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <img className="projectImage" src={props.image} alt={props.title}></img>
            <div className="projectTitle" style={{backgroundColor: props.color}}>
                <h2>{props.title}</h2>
                <Collapse isOpen={isOpen}>
                    <h5 style={{paddingBottom: "8px"}} className="text">{props.description}</h5>
                </Collapse>
            </div>
        </div>
    );
}

export default ProjectTile;