"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const allProjects = [
  {
    id: "portfolio-1",
    title: "Project Alpha",
    category: "Web Dev",
    imageUrl: "https://picsum.photos/seed/p1/800/600",
    imageHint: "abstract network",
    width: 800,
    height: 600,
    challenge: "To create a scalable and performant web application for data visualization.",
    solution: "We built a custom solution using Next.js and D3.js, creating an interactive and intuitive dashboard.",
    result: "The new platform increased user engagement by 150% and reduced data processing time by 80%.",
    testimonial: "Zero Theorem delivered a product that exceeded all our expectations."
  },
  {
    id: "portfolio-2",
    title: "Project Beta",
    category: "UI/UX",
    imageUrl: "https://picsum.photos/seed/p2/800/1200",
    imageHint: "web dashboard",
    width: 800,
    height: 1200,
    challenge: "To redesign a complex enterprise software to be more user-friendly and modern.",
    solution: "Our team conducted extensive user research and created a design system that streamlined the user experience.",
    result: "The redesign led to a 75% reduction in user errors and a 90% satisfaction score.",
    testimonial: "The team's dedication and attention to detail were phenomenal."
  },
  {
    id: "portfolio-3",
    title: "Project Gamma",
    category: "Branding",
    imageUrl: "https://picsum.photos/seed/p3/800/600",
    imageHint: "mobile interface",
    width: 800,
    height: 600,
    challenge: "To create a memorable brand identity for a new startup in a crowded market.",
    solution: "We developed a unique brand strategy, logo, and visual language that resonated with the target audience.",
    result: "The new brand helped the startup secure $2M in seed funding and gain significant market traction.",
    testimonial: "I was impressed by their streamlined process and constant communication."
  },
  {
    id: "portfolio-4",
    title: "Project Delta",
    category: "Web Dev",
    imageUrl: "https://picsum.photos/seed/p4/800/1000",
    imageHint: "data visualization",
    width: 800,
    height: 1000,
    challenge: "To build a high-traffic e-commerce platform with a seamless checkout experience.",
    solution: "We leveraged Shopify's API with a custom Next.js frontend for maximum flexibility and performance.",
    result: "The new site handles 10,000 concurrent users and has a 20% higher conversion rate.",
    testimonial: "They are not just a vendor, but a true partner in our success."
  },
  {
    id: "portfolio-5",
    title: "Project Epsilon",
    category: "UI/UX",
    imageUrl: "https://picsum.photos/seed/p5/800/800",
    imageHint: "mobile app design",
    width: 800,
    height: 800,
    challenge: "To design a mobile app for a fitness brand that is both motivating and easy to use.",
    solution: "We used gamification and a clean, minimalist interface to create an engaging user experience.",
    result: "The app achieved 1 million downloads in its first year with a 4.9-star rating.",
    testimonial: "Their expertise in both design and engineering is unparalleled."
  },
  {
    id: "portfolio-6",
    title: "Project Zeta",
    category: "Branding",
    imageUrl: "https://picsum.photos/seed/p6/800/600",
    imageHint: "brand guidelines",
    width: 800,
    height: 600,
    challenge: "To rebrand a legacy company to appeal to a younger demographic.",
    solution: "We created a bold, modern brand identity with a vibrant color palette and a fresh tone of voice.",
    result: "The rebrand led to a 300% increase in social media engagement from the target demographic.",
    testimonial: "They truly understood our vision and brought it to life with incredible skill."
  },
];

const filters = ["All", "Web Dev", "UI/UX", "Branding"];

const PortfolioItem = ({ project, onOpen }: { project: typeof allProjects[0], onOpen: (project: typeof allProjects[0]) => void }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="group relative cursor-pointer"
        onClick={() => onOpen(project)}
    >
        <div className="overflow-hidden rounded-lg">
            <Image
                src={project.imageUrl}
                alt={project.title}
                width={project.width}
                height={project.height}
                data-ai-hint={project.imageHint}
                className="w-full h-auto object-cover transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <p className="text-sm font-bold text-secondary">{project.category}</p>
            <h3 className="text-2xl font-bold font-headline text-white mt-1">{project.title}</h3>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="h-16 w-16 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">View</div>
        </div>
    </motion.div>
);

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = useMemo(() =>
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );
  
  const handleOpen = (project: typeof allProjects[0]) => {
    setSelectedProject(project);
  };
  
  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    if (selectedProject) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex]);
    }
  }

  const handlePrev = () => {
     if (selectedProject) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProject(filteredProjects[prevIndex]);
    }
  }


  return (
    <section id="portfolio-gallery" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          <div className="bg-card/50 p-2 rounded-full flex gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full px-6"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <PortfolioItem key={project.id} project={project} onOpen={handleOpen} />
                ))}
            </AnimatePresence>
        </motion.div>

      </div>
      
        <AnimatePresence>
            {selectedProject && (
                <Dialog open={!!selectedProject} onOpenChange={(open) => !open && handleClose()}>
                     <DialogContent className="max-w-6xl w-full p-0 bg-card border-border overflow-hidden motion-safe:animate-scale-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
                            <div className="relative h-[300px] md:h-auto">
                                <Image
                                    src={selectedProject.imageUrl}
                                    alt={selectedProject.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-8 md:p-12 overflow-y-auto">
                                <h2 className="text-3xl font-headline font-bold text-primary">{selectedProject.title}</h2>
                                <p className="text-sm text-muted-foreground mt-1">{selectedProject.category}</p>

                                <div className="mt-8 space-y-6 text-foreground/90">
                                    <div>
                                        <h3 className="font-bold font-headline text-lg">The Challenge</h3>
                                        <p className="mt-2 text-muted-foreground">{selectedProject.challenge}</p>
                                    </div>
                                     <div>
                                        <h3 className="font-bold font-headline text-lg">Our Solution</h3>
                                        <p className="mt-2 text-muted-foreground">{selectedProject.solution}</p>
                                    </div>
                                     <div>
                                        <h3 className="font-bold font-headline text-lg">The Result</h3>
                                        <p className="mt-2 text-muted-foreground">{selectedProject.result}</p>
                                    </div>
                                    {selectedProject.testimonial && (
                                         <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                                            "{selectedProject.testimonial}"
                                        </blockquote>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleClose} className="absolute top-4 right-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/70 text-white">
                            <X className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 left-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/70 text-white">
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/70 text-white">
                            <ArrowRight className="h-6 w-6" />
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    </section>
  );
}