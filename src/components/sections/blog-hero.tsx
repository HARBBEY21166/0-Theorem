"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function BlogHero() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
      .fromTo(subheadlineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.8');
  }, []);

  return (
    <section id="blog-hero" className="py-24 sm:py-32 text-center">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden pb-2">
            <h1 ref={headlineRef} className="text-5xl md:text-7xl font-headline font-bold">
            The Zero Theorem Journal
            </h1>
        </div>
        <div className="overflow-hidden">
            <p ref={subheadlineRef} className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Insights on design, development, and digital strategy. A deep dive into the theorems that build great products.
            </p>
        </div>
      </div>
    </section>
  );
}
