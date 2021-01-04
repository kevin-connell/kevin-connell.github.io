import React, { useEffect, useRef, useState } from 'react';
import "./WelcomeMessage.css"

const WelcomeMessage = () => {

    const [isViewed, setViewed] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let waitTime = 400;
            if (entries[0].isIntersecting) {
                setTimeout(() => {setViewed(true);}, waitTime);
                observer.unobserve(domRef.current);
            };
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <main className="welcomeContainer">
        <div className="welcomeCircleContainer">
            <figure className={`welcomeCircle${isViewed ? ' welcomePop' : ''}` } ref={domRef}>
                <img className="welcomeIllustration" src="https://res.cloudinary.com/djlzaftm2/image/upload/v1609798748/KevinIllustration_fskjhd.png" alt="Kevin illustration"/>
            </figure>
        </div>
        <h2 id="welcomeText">I'm Kevin, a Philadelphia-based artist & full-stack developer with a passion for solving problems with creativity</h2>
        </main>
    );
}

export default WelcomeMessage;