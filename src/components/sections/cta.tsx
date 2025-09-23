
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Cta() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const particleContainer = particleContainerRef.current;
    if (!button || !particleContainer) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      gsap.to(button, {
        x: (e.clientX - (rect.left + rect.width / 2)) * 0.2,
        y: (e.clientY - (rect.top + rect.height / 2)) * 0.2,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        ease: 'elastic.out(1, 0.3)',
        duration: 1,
      });
    };
    
    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      particle.style.width = `${gsap.utils.random(2, 5)}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = `hsl(var(--primary) / ${gsap.utils.random(0.5, 1)})`;
      particleContainer.appendChild(particle);

      gsap.set(particle, { x, y, opacity: 1 });

      gsap.to(particle, {
        x: '+=random(-40, 40)',
        y: '+=random(-40, 40)',
        opacity: 0,
        duration: gsap.utils.random(0.5, 1.5),
        ease: 'power2.out',
        onComplete: () => particle.remove(),
      });
    };
    
    const onButtonEnter = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      for(let i = 0; i < 20; i++) {
        createParticle(x, y);
      }
    }

    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseleave', onMouseLeave);
    button.addEventListener('mouseenter', onButtonEnter);


    return () => {
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseleave', onMouseLeave);
      button.removeEventListener('mouseenter', onButtonEnter);
    };
  }, []);

  return (
    <section id="cta" className="py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold max-w-3xl mx-auto">
          Ready to build something extraordinary?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's turn your vision into a reality. We're here to help you create a digital solution that stands out.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="group relative text-lg px-12 py-8" style={{ willChange: 'transform' }}>
            <Link ref={buttonRef} href="mailto:contact@zerotheorem.com">
              <span className="relative z-10">Start a Project</span>
               <div ref={particleContainerRef} className="absolute inset-0 overflow-hidden rounded-md"></div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
