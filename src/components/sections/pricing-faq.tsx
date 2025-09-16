"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What's your availability?",
    answer: "I typically book projects 1-2 months in advance. However, availability can change. The best way to know is to get in touch. For smaller projects, I can sometimes fit them in sooner."
  },
  {
    question: "Do you offer ongoing support or retainers?",
    answer: "Yes, I offer monthly retainer packages for ongoing maintenance, support, and new feature development. This is a great option for clients who need consistent, dedicated time each month. We can discuss a custom retainer that fits your needs after the initial project is complete."
  },
  {
    question: "How do payments work?",
    answer: "For most projects, I split the payment into two parts: a 50% deposit to secure your spot in my schedule, and the final 50% upon project completion and your approval. For larger, project-based work, we can arrange a milestone-based payment schedule."
  },
  {
    question: "What if I need something not listed in the packages?",
    answer: "The packages are starting points. The vast majority of my work is custom-tailored to the client's specific needs. The 'Custom Solution' is my specialty. We'll have a detailed discussion to scope out your exact requirements and I'll provide a custom proposal."
  },
];

export default function PricingFaq() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold">Questions? We have answers.</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-border/40">
              <AccordionTrigger className="text-lg font-headline hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
