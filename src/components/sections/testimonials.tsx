
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    title: "CEO, Tech Innovators",
    quote: "Working with Zero Theorem was a game-changer. Their expertise in both design and engineering is unparalleled. They delivered a product that exceeded all our expectations.",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    title: "Founder, Creative Solutions",
    quote: "The team's dedication and attention to detail were phenomenal. They truly understood our vision and brought it to life with incredible skill and creativity.",
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    title: "Marketing Director, Future Co.",
    quote: "I was impressed by their streamlined process and constant communication. They are not just a vendor, but a true partner in our success.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stories of partnership, innovation, and success.
          </p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const imageData = PlaceHolderImages.find(p => p.id === testimonial.id);
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-transparent border-0 shadow-none">
                      <CardContent className="relative flex flex-col items-center justify-center p-8 md:p-12 text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10">
                            <svg width="100" height="78" viewBox="0 0 100 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 0H62.2021L0 78H37.7979L100 0Z" fill="currentColor"/>
                                <path d="M25.5319 0H0V29.7021L25.5319 0Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <p className="text-xl md:text-2xl font-medium text-foreground/90 max-w-3xl z-10">
                          {testimonial.quote}
                        </p>
                        <div className="mt-8 flex items-center gap-4 z-10">
                          <Avatar className="w-12 h-12 border-2 border-primary/50">
                            {imageData && <AvatarImage src={imageData.imageUrl} alt={testimonial.name} data-ai-hint={imageData.imageHint} />}
                            <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold font-headline text-lg">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px] hidden lg:inline-flex" />
          <CarouselNext className="right-[-50px] hidden lg:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
