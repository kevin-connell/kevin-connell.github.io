import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

interface DevIconCircle {
  devIcon: true;
  icon: string;
  title: string;
}

interface FontAwesomeIconCircle {
  devIcon: false;
  icon: IconProp;
  title: string;
}

type SkillCircleProps = DevIconCircle | FontAwesomeIconCircle;

const SkillCircle = ({ devIcon, icon, title }: SkillCircleProps) => {
  const [isSeen, setSeen] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = domRef.current;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const waitTime = Math.floor(Math.random() * 400) + 500;

      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setSeen(true);
        }, waitTime);
        observer.unobserve(element);
      }
    });

    observer.observe(element);
  }, []);

  return (
    <div className="skillBox">
      <div ref={domRef} className={`skillCircle${isSeen ? ' bubblePop' : ''}`}>
        {devIcon ? <i className={icon} /> : <FontAwesomeIcon icon={icon} />}
      </div>
      <p className="skillTitle">{title}</p>
    </div>
  );
};

export default SkillCircle;
