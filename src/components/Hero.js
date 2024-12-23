import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: ['Designer', 'Developer', 'Explorer', 'Linux and Computer Learner'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    // Cleanup on component unmount
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Aditya Sharma</h1>
        <p>I'm <span ref={typedElement}></span></p>
      </div>
    </section>
  );
}
