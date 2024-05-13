import React, { useEffect, useRef, useState } from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  const [isViewed, setViewed] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = domRef.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const waitTime = 400;

      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setViewed(true);
        }, waitTime);
        observer.unobserve(element);
      }
    });

    observer.observe(element);
  }, []);

  return (
    <main className="welcomeContainer">
      <div className="welcomeCircleContainer">
        <figure
          ref={domRef}
          className={`welcomeCircle${isViewed ? ' welcomePop' : ''}`}
        >
          <img
            alt="Kevin illustration"
            className="welcomeIllustration"
            src="https://res.cloudinary.com/djlzaftm2/image/upload/v1609798748/KevinIllustration_fskjhd.png"
          />
        </figure>
      </div>
      <h2 id="welcomeText">
        I'm Kevin, a Philadelphia-based artist & full-stack developer with a
        passion for solving problems with creativity
      </h2>
    </main>
  );
};

export default WelcomeMessage;
