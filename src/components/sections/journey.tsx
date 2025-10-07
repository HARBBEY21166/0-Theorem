
"use client";

import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Code, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    date: "2010 - 2014",
    title: "B.Sc. Computer Science",
    description: "Laid the foundational knowledge in algorithms, data structures, and software engineering principles.",
  },
  {
    icon: <Code className="w-5 h-5" />,
    date: "2015",
    title: "First Professional Project",
    description: "Developed a full-stack web application for a local business, igniting a passion for web technologies.",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    date: "2016 - 2019",
    title: "Senior Developer at TechCorp",
    description: "Led front-end development on several large-scale projects, honing skills in React and performance optimization.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    date: "2020 - Present",
    title: "Founded Zero Theorem",
    description: "Established a studio to bridge the gap between precise engineering and visionary design, delivering holistic digital solutions.",
  }
];

export default function Journey() {
  const timelineRef = useRef(null);
  
  useEffect(() => {
    const line = (timelineRef.current as any)?.querySelector('.timeline-line');
    const items = gsap.utils.toArray<Element>('.timeline-item');
    
    gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });
    gsap.to(line, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 30%',
        end: 'bottom 70%',
        scrub: true,
      },
    });

    items.forEach(item => {
      const card = item.querySelector('.timeline-card');
      const dot = item.querySelector('.timeline-dot');

      gsap.from(card, {
        x: item.classList.contains('md:items-start') ? -100 : 100,
        opacity: 0,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: dot, className: "active" },
      })
    });
  }, []);

  return (
    <section id="journey" className="py-20 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold">The Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A path defined by a continuous pursuit of knowledge and a passion for building meaningful digital experiences.
          </p>
        </div>

        <div ref={timelineRef} className="relative mt-16 md:mt-24 max-w-3xl mx-auto">
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border/40" />
          {journey.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item relative flex items-start md:justify-center md:items-center my-8 md:my-0 md:[&:not(:first-child)]:mt-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                 <div className="timeline-card mt-3">
                    <p className="text-sm text-primary font-semibold">{item.date}</p>
                    <h3 className="text-xl font-headline font-bold mt-1">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                 </div>
              </div>
              
              <div className="timeline-dot absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-8 h-8 bg-background rounded-full border-2 border-border flex items-center justify-center transition-colors duration-300">
                <div className="text-primary">{item.icon}</div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .timeline-dot.active {
          background-color: hsl(var(--primary));
          border-color: hsl(var(--primary));
        }
        .timeline-dot.active > div {
          color: hsl(var(--primary-foreground));
        }
      `}</style>
    </section>
  );
}

