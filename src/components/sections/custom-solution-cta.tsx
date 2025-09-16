"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function CustomSolutionCta() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="custom-solution-cta" className="py-20 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold max-w-2xl mx-auto">
          Need a Bespoke Theorem?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          These packages are a foundation. Let's craft a perfect solution for your specific goals, timeline, and budget.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="group relative text-lg px-8 py-6 bg-primary">
            <Link href="/contact">
              Schedule a Consultation
              <span className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
