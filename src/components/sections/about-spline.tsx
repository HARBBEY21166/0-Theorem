"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<any>, any>;
    }
  }
}

export default function AboutSpline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js';
    document.head.appendChild(script);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about-spline" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 h-[300px] md:h-[500px]">
        <spline-viewer
          hint
          url="https://prod.spline.design/TWERz0weQDv7pm3S/scene.splinecode"
        ></spline-viewer>
      </div>
    </section>
  );
}
