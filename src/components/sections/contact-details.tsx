"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Calendar, Github, Instagram, Linkedin } from 'lucide-react';

import Link from 'next/link';

const contactLinks = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "zerotheorem01@gmail.com",
    href: "mailto:zerotheorem01@gmail.com",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    label: "Schedule a Meeting",
    href: "#", // Replace with your Calendly link
  },
];

const socialLinks = [
    {
        icon: <Github className="w-6 h-6" />,
        label: "https://github.com/HARBBEY21166",
        href: "#",
    },
    {
        icon: <Instagram className="w-6 h-6" />,
        label: "Instagram",
        href: "https://www.instagram.com/zero.theorem?igsh=MTZpaHV0M2s0czEx",
    },
    {
        icon: <Linkedin className="w-6 h-6" />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/abbey0/",
    },
]

export default function ContactDetails() {
  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(q('.contact-headline'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(q('.contact-subheadline'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(q('.contact-item'), { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.8 }, "-=0.5")
      .fromTo(q('.social-item'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.5");
  }, []);

  return (
    <div ref={containerRef} className="space-y-12">
      <div className="overflow-hidden">
        <h1 className="contact-headline text-5xl md:text-6xl font-headline font-bold">Let's Build the Future. Together.</h1>
      </div>
      <div className="overflow-hidden">
        <p className="contact-subheadline text-lg md:text-xl text-muted-foreground">
          Have an idea brewing? Let's unlock its potential. Tell me about your project, and I'll get back to you soon.
        </p>
      </div>

      <ul className="space-y-6">
        {contactLinks.map((link) => (
          <li key={link.label} className="contact-item">
            <Link href={link.href} className="group inline-flex items-center gap-4 text-lg hover:text-primary transition-colors duration-300">
                <div className="bg-card/50 group-hover:bg-primary/10 p-3 rounded-md transition-colors duration-300">
                    {link.icon}
                </div>
                <span className="font-medium">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
            <div key={link.label} className="social-item">
                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 block">
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
}
