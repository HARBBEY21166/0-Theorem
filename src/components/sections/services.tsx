"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brush, Rocket, Megaphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Building robust, scalable web applications with cutting-edge technologies for seamless performance.",
  },
  {
    icon: <Brush className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide an exceptional user experience.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Digital Strategy",
    description: "Crafting data-driven strategies to boost your online presence and achieve your business goals.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Brand Identity",
    description: "Developing a unique brand identity that resonates with your audience and sets you apart.",
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
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
    }
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold">Our Capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We offer a complete suite of services to transform your ideas into digital reality.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.title} ref={el => cardsRef.current[index] = el} className="opacity-0 md:opacity-100 animate-fade-in">
                <Card className="h-full bg-card/50 hover:bg-card hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group rounded-lg">
                <CardHeader className="items-center text-center">
                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {service.icon}
                    </div>
                    <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
