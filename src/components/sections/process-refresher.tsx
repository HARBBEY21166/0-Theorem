"use client";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { name: 'Discover' },
  { name: 'Design' },
  { name: 'Develop' },
  { name: 'Deploy' },
];

export default function ProcessRefresher() {
  const sectionRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });

    tl.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power2.inOut' });

    stepsRef.current.forEach((step, index) => {
      tl.fromTo(step, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        "-=0.8"
      );
    });
  }, []);

  return (
    <section id="process-refresher" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold">Our Proven Method</h2>
        </div>
        <div className="mt-16 relative">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.name} ref={el => stepsRef.current[index] = el} className="flex flex-col items-center z-10 opacity-0">
                <div className="w-6 h-6 rounded-full bg-primary border-2 border-background flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                </div>
                <p className="mt-4 font-headline text-lg">{step.name}</p>
              </div>
            ))}
          </div>
          <div ref={lineRef} className="absolute top-3 left-0 w-full h-0.5 bg-border/40 transform origin-left" />
        </div>
        <div className="text-center mt-12">
          <Link href="/#process" className="text-primary inline-flex items-center group">
            See our detailed process
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
