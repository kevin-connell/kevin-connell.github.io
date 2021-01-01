import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillCircle = (props) => {

    const [isSeen, setSeen] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let waitTime = Math.floor(Math.random() * 400) + 500;
            if (entries[0].isIntersecting) {
                setTimeout(() => {setSeen(true);}, waitTime);
                observer.unobserve(domRef.current);
            };
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <div className="skillBox">
            <div className={`skillCircle${isSeen ? ' bubblePop' : ''}` } ref={domRef}>
                {props.devicon ? <i class={props.icon} /> : <FontAwesomeIcon icon={props.icon} /> }
            </div>
            <p className="skillTitle">{props.title}</p>
        </div>
    );
}

export default SkillCircle;