"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PricingAssurance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="pricing-assurance" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 text-muted-foreground">
          <ShieldCheck className="w-6 h-6 text-green-500" />
          <p className="font-medium">
            You'll receive a detailed project proposal and timeline before any work begins. No surprises.
          </p>
        </div>
      </div>
    </section>
  );
}
