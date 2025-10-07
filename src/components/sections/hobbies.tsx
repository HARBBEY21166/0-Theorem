"use client";

import { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Tv, Music, Gamepad2, Brush } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hobbies = [
  {
    icon: <Brush className="w-8 h-8" />,
    title: "Trying Design Trends",
    description: "Experimenting with modern aesthetics and innovative visual styles to stay ahead of the curve.",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Listening to Music",
    description: "Finding inspiration and rhythm in every beat music fuels my creativity and focus.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Gaming",
    description: "Immersing myself in virtual worlds that challenge strategy, imagination, and storytelling.",
  },
  {
    icon: <Tv className="w-8 h-8" />,
    title: "Movies",
    description: "Exploring powerful stories, visuals, and cinematography that inspire creative storytelling.",
  },
];

export default function Hobbies() {
    const sectionRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current, {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
        });
    }, []);

  return (
    <section ref={sectionRef} id="hobbies" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold">Beyond the Binary</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            When I'm not in front of a screen, I'm exploring other passions that fuel my creativity and perspective.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={hobby.title} ref={el => cardsRef.current[index] = el}>
                <Card className="p-8 text-center flex flex-col items-center bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-2 group rounded-xl">
                    <div className="bg-primary/10 text-primary p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        {hobby.icon}
                    </div>
                    <h3 className="text-xl font-headline font-semibold">{hobby.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{hobby.description}</p>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
