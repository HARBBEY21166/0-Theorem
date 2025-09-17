
"use client";

import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function HeroSection() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subheadlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo(ctaRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8');
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        {/* Placeholder for a background element */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
        <div className="overflow-hidden pb-2">
          <h1 ref={headlineRef} className="text-5xl md:text-7xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            We Solve the Equation of Digital Excellence.
          </h1>
        </div>
        <div className="overflow-hidden">
          <p ref={subheadlineRef} className="mt-4 text-lg md:text-xl max-w-2xl text-foreground/80">
            Zero Theorem is where precise software engineering meets visionary graphic design to build foundational solutions.
          </p>
        </div>
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="group relative">
            <Link href="#portfolio">
              View Our Work
              <span className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="group relative overflow-hidden border-2">
             <Link href="#cta">
              Get a Quote
              <span className="absolute inset-0 border-2 border-accent scale-125 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-md" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-8 w-8 text-foreground/50 animate-bounce" />
      </div>
    </section>
  );
}
