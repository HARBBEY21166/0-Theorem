
"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brush, Rocket, Megaphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "We build scalable, high-performance software solutions tailored to your specific business needs. From complex enterprise systems to nimble single-purpose applications, our code is clean, efficient, and built to last. We focus on robust architecture and future-proof technologies.",
    icon: <Code className="w-8 h-8" />,
    asset: "/code-mockup.svg",
    align: "right"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Our design process is human-centered. We conduct deep user research to create intuitive, engaging, and aesthetically pleasing interfaces. From wireframes to high-fidelity prototypes, we ensure your digital product is not just beautiful but also a joy to use.",
    icon: <Brush className="w-8 h-8" />,
    asset: "/design-mockup.svg",
    align: "left"
  },
    {
    id: "brand-identity",
    title: "Brand Identity",
    description: "A strong brand is more than a logo. We help you develop a cohesive brand identity that tells your story and connects with your audience. This includes logo design, color palettes, typography, and a comprehensive brand style guide to ensure consistency across all platforms.",
    icon: <Megaphone className="w-8 h-8" />,
    asset: "/brand-mockup.svg",
    align: "right"
  },
  {
    id: "front-end-engineering",
    title: "Front-End Engineering",
    description: "We bring designs to life with pixel-perfect, responsive, and interactive front-end code. Specializing in modern frameworks like React and Next.js, we build user interfaces that are fast, accessible, and optimized for all devices.",
    icon: <Rocket className="w-8 h-8" />,
    asset: "/frontend-mockup.svg",
    align: "left"
  },
];

const AnimatedCode = () => (
  <div className="bg-[#0D1117] border border-gray-700 rounded-lg p-4 h-full text-sm font-code overflow-hidden">
    <pre>
      <code className="text-[#c9d1d9]">
        <span className="text-[#ff7b72]">const</span>{' '}
        <span className="text-[#d2a8ff]">animateHero</span> = () => {'{'}<br />
        {'  '}<span className="text-[#79c0ff]">gsap</span>.<span className="text-[#d2a8ff]">timeline</span>()
        <br />
        {'    '}.<span className="text-[#d2a8ff]">from</span>(<span className="text-[#a5d6ff]">'#headline'</span>, {'{'} <span className="text-[#79c0ff]">y</span>: <span className="text-[#F1F5F9]">50</span>, <span className="text-[#79c0ff]">opacity</span>: <span className="text-[#F1F5F9]">0</span>, <span className="text-[#79c0ff]">duration</span>: <span className="text-[#F1F5F9]">1</span> {'}'})
        <br />
        {'    '}.<span className="text-[#d2a8ff]">from</span>(<span className="text-[#a5d6ff]">'#subheadline'</span>, {'{'} <span className="text-[#79c0ff]">y</span>: <span className="text-[#F1F5F9]">30</span>, <span className="text-[#79c0ff]">opacity</span>: <span className="text-[#F1F5F9]">0</span> {'}'}, <span className="text-[#a5d6ff]">'-=0.7'</span>);
        <br />
        {'}'};
      </code>
    </pre>
  </div>
);

const AnimatedDesign = () => (
    <div className="relative w-full h-full">
        <Image src="/design-mockup.svg" alt="UI/UX Design Mockup" fill className="object-contain" />
    </div>
);


export default function ServicesDeepDive() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        const q = gsap.utils.selector(section);
        const textCol = q('.text-col');
        const assetCol = q('.asset-col');
        const isRightAligned = section.dataset.align === 'right';

        gsap.fromTo(textCol,
          { x: isRightAligned ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
            }
          }
        );
        gsap.fromTo(assetCol,
          { x: isRightAligned ? 100 : -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
            }
          }
        );
      }
    });
  }, []);

  const getAsset = (id: string) => {
    switch (id) {
        case 'custom-software-development':
            return <AnimatedCode />;
        case 'ui-ux-design':
            return <div className="p-4 bg-card rounded-lg h-full"><Image src="https://i.pinimg.com/1200x/14/0f/da/140fda9f2dcaa23a084f0c1995d9e05f.jpg" alt="UI Design" width={600} height={400} className="rounded-md w-auto h-full" data-ai-hint="design mockup" /></div>;
        case 'brand-identity':
             return <div className="p-4 bg-card rounded-lg h-full"><Image src="https://i.pinimg.com/1200x/3a/0c/b7/3a0cb736d0974f4234afffdcaf25f0e3.jpg" alt="Brand Identity" width={600} height={400} className="rounded-md w-auto h-full" data-ai-hint="brand identity" priority /></div>;
        case 'front-end-engineering':
            return <div className="p-4 bg-card rounded-lg h-full"><Image src="https://i.pinimg.com/1200x/a5/34/da/a534daeebc0440a8c1fdc48a19ac5efe.jpg" alt="Frontend Engineering" width={600} height={400} className="rounded-md w-auto h-full" data-ai-hint="frontend code" priority /></div>;
        default:
            return null;
    }
  }


  return (
    <section id="services-deep-dive" className="py-20 sm:py-32 space-y-32">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            id={service.id}
            ref={el => sectionsRef.current[index] = el}
            data-align={service.align}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${index > 0 ? 'mt-32' : ''}`}
          >
            <div className={`text-col ${service.align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
              <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary bg-primary/10 p-3 rounded-lg">{service.icon}</div>
                  <h3 className="text-3xl font-headline font-bold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                {service.description}
              </p>
            </div>
            <div className={`asset-col ${service.align === 'right' ? 'md:order-2' : 'md:order-1'}`}>
              {getAsset(service.id)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
