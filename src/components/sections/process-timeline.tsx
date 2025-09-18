"use client";

import { useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Step = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        const items = gsap.utils.toArray<Element>('.timeline-item-desktop');
        const line = (timelineRef.current as any)?.querySelector('.timeline-line-desktop');

        gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });
        gsap.to(line, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: true,
          },
        });

        items.forEach((item, index) => {
          const card = item.querySelector('.timeline-card');
          const dot = item.querySelector('.timeline-dot');
          const isEven = index % 2 === 0;

          gsap.fromTo(card,
            { x: isEven ? -100 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
          
          ScrollTrigger.create({
            trigger: item,
            start: 'top center',
            end: 'bottom center',
            toggleClass: { targets: dot, className: "active" },
          })
        });
    });
    
    mm.add("(max-width: 767px)", () => {
        const items = gsap.utils.toArray('.timeline-item-mobile');
         gsap.fromTo(items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: timelineRef.current,
                start: 'top 80%',
              },
            }
          );
    });

    return () => mm.revert();
  }, [steps]);

  return (
    <div ref={timelineRef} className="mt-16 md:mt-24">
      {/* Desktop Timeline */}
      <div className="hidden md:block relative max-w-3xl mx-auto">
        <div className="timeline-line-desktop absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border/40" />
        {steps.map((step, index) => (
          <div key={step.name} className="timeline-item-desktop relative my-16">
            <div className="timeline-dot absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full border-2 border-border transition-all duration-300" />
            <div className={`timeline-card w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
              <Card className="bg-card/80 backdrop-blur-sm">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="text-primary">{step.icon}</div>
                  <CardTitle className="font-headline">{step.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={step.name} className="timeline-item-mobile flex gap-4">
            <div className="flex flex-col items-center">
              <div className="text-primary bg-primary/10 p-3 rounded-full">
                {step.icon}
              </div>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold">{step.name}</h3>
              <p className="mt-1 text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
       <style jsx>{`
        .timeline-dot.active {
          background-color: hsl(var(--primary));
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 4px hsla(var(--primary), 0.3);
        }
      `}</style>
    </div>
  );
}
