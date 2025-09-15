"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "portfolio-1",
    title: "Project Alpha",
    category: "Web Application",
    href: "#"
  },
  {
    id: "portfolio-2",
    title: "Project Beta",
    category: "UI/UX Design",
    href: "#"
  },
  {
    id: "portfolio-3",
    title: "Project Gamma",
    category: "Mobile App",
    href: "#"
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      gsap.fromTo(projectsRef.current,
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
    <section id="portfolio" ref={sectionRef} className="py-20 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold">Featured Work</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                A glimpse into the digital experiences we've crafted for our clients.
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const imageData = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <div key={project.id} ref={el => projectsRef.current[index] = el} className="opacity-0 md:opacity-100 animate-fade-in">
                <Link href={project.href} className="block group relative overflow-hidden rounded-lg shadow-xl">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      width={800}
                      height={600}
                      data-ai-hint={imageData.imageHint}
                      className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-1/4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <p className="text-sm text-secondary">{project.category}</p>
                      <h3 className="text-2xl font-bold font-headline text-white mt-1">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-background/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
