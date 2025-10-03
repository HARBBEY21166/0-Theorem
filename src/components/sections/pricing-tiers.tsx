"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
    {
    name: "Graphics Design",
    price: "Starting at $2,500",
    tagline: "Visuals that captivate your audience.",
    accentColor: "accent",
    features: [
      "Logo & Icon Design",
      "Social Media Asset Kit",
      "Marketing Material Templates",
      "Business Card Design",
      "Up to 3 Revisions",
    ],
  },
  {
    name: "The Foundation",
    price: "Starting at $4,500",
    tagline: "Establish your core identity.",
    accentColor: "secondary",
    features: [
      "Full Brand Strategy",
      "Logo Design Suite",
      "Comprehensive Style Guide",
      "Social Media Kit",
      "2 Design Revisions",
    ],
  },
  {
    name: "The Architecture",
    price: "Starting at $9,500",
    tagline: "Build your digital home.",
    accentColor: "primary",
    recommended: true,
    features: [
      "Includes 'The Foundation'",
      "Custom Website Design",
      "Up to 5 Pages",
      "Responsive Development",
      "CMS & SEO Setup",
    ],
  },
  {
    name: "The Ecosystem",
    price: "Project-Based",
    tagline: "Create a scalable platform.",
    accentColor: "foreground",
    features: [
      "Everything in 'Architecture'",
      "Web Application Development",
      "User Accounts & Database",
      "API Integrations",
      "Unlimited Potential",
    ],
  },
];

export default function PricingTiers() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
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

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('custom-solution-cta')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section ref={sectionRef} id="pricing-tiers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={tier.name} ref={el => cardsRef.current[index] = el} className="h-full">
              <Card className={cn(
                "h-full flex flex-col bg-card/50 hover:bg-card border-2 border-transparent transition-all duration-300 group relative overflow-hidden",
                tier.recommended ? 'border-primary shadow-2xl shadow-primary/20' : 'hover:border-border'
              )}>
                {tier.recommended && (
                  <div className="absolute top-4 -right-12 transform rotate-45 bg-primary text-primary-foreground px-12 py-1.5 text-sm font-bold shadow-md">
                    Most Common
                  </div>
                )}
                <div 
                  className="absolute top-0 left-0 h-1 w-full opacity-50" 
                  style={{ background: `hsl(var(--${tier.accentColor}))` }} 
                />
                
                <CardHeader className="text-center pt-10">
                  <CardTitle className="text-2xl font-headline" style={{ color: `hsl(var(--${tier.accentColor}))` }}>{tier.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{tier.tagline}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold font-headline text-foreground">{tier.price.split(' ')[2]}</span>
                    <span className="text-sm text-muted-foreground ml-1">{tier.name === "The Ecosystem" ? "" : "/ starting"}</span>
                     <p className="text-lg font-bold font-headline">{tier.name !== "The Ecosystem" ? tier.price.split(' ')[0] + ' ' + tier.price.split(' ')[1] : tier.price}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={handleGetStartedClick}
                    size="lg" 
                    className="w-full text-lg" 
                    style={tier.accentColor === 'foreground' ? {
                      backgroundColor: `hsl(var(--foreground))`,
                      color: `hsl(var(--background))`
                    } : { 
                      backgroundColor: `hsl(var(--${tier.accentColor}))`,
                      color: `hsl(var(--${tier.accentColor}-foreground))`
                    }}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
