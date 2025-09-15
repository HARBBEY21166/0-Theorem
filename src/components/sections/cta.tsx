import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Cta() {
  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold max-w-3xl mx-auto">
          Ready to build something extraordinary?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Let's turn your vision into a reality. We're here to help you create a digital solution that stands out.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="group relative text-lg px-8 py-6">
            <Link href="mailto:contact@zerotheorem.com">
              Start a Project
              <span className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
