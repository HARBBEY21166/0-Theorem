"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function PricingHero() {
  const headlineRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subheadlineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(headlineRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.2 }
    )
    .fromTo(subheadlineRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8 }, 
        '-=0.6'
    );
  }, []);

  const headline = "Invest in Precision.";

  return (
    <section id="pricing-hero" className="py-24 sm:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold">
            {headline.split(' ').map((word, index) => (
                <span key={index} className="inline-block overflow-hidden pb-2">
                    <span ref={el => headlineRef.current[index] = el} className="inline-block">
                        {word}{' '}
                    </span>
                </span>
            ))}
        </h1>
        <div className="overflow-hidden">
            <p ref={subheadlineRef} className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
                Your vision is unique. These are structured starting points for our most common collaborations. Every project is custom-tailored.
            </p>
        </div>
      </div>
    </section>
  );
}
