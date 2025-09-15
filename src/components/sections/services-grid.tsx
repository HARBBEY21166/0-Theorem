"use client";

import { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brush, Rocket, Megaphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Code className="w-10 h-10" />,
    title: "Custom Software Development",
    targetId: "custom-software-development",
  },
  {
    icon: <Brush className="w-10 h-10" />,
    title: "UI/UX Design",
    targetId: "ui-ux-design",
  },
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Brand Identity",
    targetId: "brand-identity",
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Front-End Engineering",
    targetId: "front-end-engineering",
  }
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);
  
  const handleCardClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="services-grid" ref={sectionRef} className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} ref={el => cardsRef.current[index] = el}>
              <Card 
                onClick={() => handleCardClick(service.targetId)}
                className="h-full bg-card/50 hover:bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group rounded-lg cursor-pointer text-center p-8 flex flex-col items-center justify-center aspect-square"
              >
                <div className="bg-primary/10 text-primary p-6 rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-headline text-center">{service.title}</h3>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
