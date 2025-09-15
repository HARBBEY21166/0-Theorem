"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function AboutHero() {
  const photoRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
    tl.fromTo(photoRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 })
      .fromTo(headlineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(subheadlineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");
  }, []);

  return (
    <section id="about-hero" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div ref={photoRef} className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="https://picsum.photos/seed/abiodun/400/400"
                alt="Abiodun Abbey Aina"
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-primary/20 shadow-2xl shadow-primary/20"
                data-ai-hint="professional man portrait"
                priority
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
            </div>
          </div>
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="overflow-hidden">
                <h1 ref={headlineRef} className="text-4xl md:text-6xl font-headline font-bold">
                The Mind Behind the Theorem
                </h1>
            </div>
            <div className="overflow-hidden">
                <p ref={subheadlineRef} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                A fusion of logical precision and creative vision. I don't just build products; I solve complex digital equations with elegance and purpose.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
