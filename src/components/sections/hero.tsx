
"use client";

import { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

// @ts-ignore
import type { SplineViewer } from '@splinetool/viewer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<SplineViewer>, SplineViewer>;
    }
  }
}

export default function HeroSection() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Spline is heavy on mobile, so we only load it on desktop.
    const checkIsDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      }
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    if (window.innerWidth >= 768) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.57/build/spline-viewer.js';
      document.head.appendChild(script);
    }
    
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subheadlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo(ctaRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8');

    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center overflow-hidden">
       <div className="absolute inset-0 z-0 bg-background">
          {isDesktop ? (
            <spline-viewer hint url="https://prod.spline.design/PFrf9m-mSJfKX8Ul/scene.splinecode"></spline-viewer>
          ) : (
            <Image 
              src="https://i.pinimg.com/1200x/47/d4/f8/47d4f83418e236917636810a3563cc61.jpg"
              alt="Abstract background"
              fill
              style={{ objectFit: 'fill' }}
              className="opacity-20"
              priority
              data-ai-hint="abstract background"
            />
          )}
      </div>
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
        <div className="overflow-hidden pb-2">
          <h1 ref={headlineRef} className="text-5xl md:text-7xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-400 py-4">
            We Solve the Equation of Digital Excellence.
          </h1>
        </div>
        <div className="overflow-hidden">
          <p ref={subheadlineRef} className="mt-4 text-lg md:text-xl max-w-2xl text-white">
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
              <span className="absolute inset-0 border-2 border-primary scale-125 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-md" />
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
