import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import a1 from './imgAnim/a1.png';
import a2 from './imgAnim/a2.png';
import a3 from './imgAnim/a3.png';
import a4 from './imgAnim/a4.png';
import a5 from './imgAnim/a5.png';
import a6 from './imgAnim/a6.png';

const GsapAnim = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation with ScrollTrigger
    gsap.utils.toArray('.image').forEach((image) => {
      gsap.fromTo(
        image, // Target each image element
        { opacity: 0, y: 150 }, // Initial state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: image, // This targets the current image in the loop
            start: 'top 80%', // Start when the top of the image reaches 80% of the viewport
            end: 'bottom 20%', // End when the bottom of the image reaches 20% of the viewport
            scrub: false, // Make it scrub smoothly with the scroll position
            once: true, // Trigger animation only once
            markers: false, // Optional: Add markers for debugging
          },
        }
      );
    });
  }, []);

  return (
    <div className=" space-x-4 flex justify-center items-center flex-wrap  h-[350px] bg-zinc-100 gap-20 text-center">
      {/* Correct image paths using the imports */}
      <span className="image">
        <img src={a1} alt="Image1" className="w-24 h-24 object-cover" />
        <br />
        <p>PURPOSEFUL <br /> ACTIVES</p>
      </span>
      <span className="image">
        <img src={a2} alt="Image2" className="w-24 h-24 object-cover" />
        <br />
        <p>PURPOSEFUL <br /> ACTIVES</p>
      </span>
      <span className="image">
        <img src={a3} alt="Image3" className="w-24 h-24 object-cover" />
        <br />
        <p>PURPOSEFUL <br /> ACTIVES</p>
      </span>
      <span className="image">
        <img src={a4} alt="Image4" className="w-24 h-24 object-cover" />
        <br />
        <p>PURPOSEFUL <br /> ACTIVES</p>
      </span>
      <span className="image">
        <img src={a5} alt="Image5" className="w-24 h-24 object-cover" />
        <br />
        <p>PURPOSEFUL <br /> ACTIVES</p>
      </span>
      <span className="image">
        <img src={a6} alt="Image6" className="w-24 h-24 object-cover" />
        <br />
        <p>PURPOSEFUL <br /> ACTIVES</p>
      </span>
    </div>
  );
};

export default GsapAnim;

