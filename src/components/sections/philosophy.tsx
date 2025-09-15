"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    const leftCol = q('.philosophy-left');
    const rightCol = q('.philosophy-right');

    gsap.fromTo(leftCol, 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
     gsap.fromTo(rightCol, 
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-headline font-bold">The Dual Lens</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My approach is built on a simple but powerful duality: the logic of engineering and the creativity of design.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="philosophy-left">
            <Card className="h-full bg-card/50 backdrop-blur-sm p-4 text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit mb-4">
                    <Code className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-3xl">Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The engineering mindset brings structure, efficiency, and scalability. Every line of code is a deliberate choice, contributing to a robust and maintainable foundation. It's about building things the right way, for the long term.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="philosophy-right">
            <Card className="h-full bg-card/50 backdrop-blur-sm p-4 text-center">
               <CardHeader>
                <div className="mx-auto bg-secondary/10 text-secondary p-4 rounded-full w-fit mb-4">
                    <Brush className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-3xl">Creativity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The design philosophy focuses on empathy, intuition, and beauty. It's about understanding the human on the other side of the screen. Every pixel and interaction is crafted to create a seamless, delightful, and memorable experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
