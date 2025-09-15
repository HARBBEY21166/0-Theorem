import { Marquee } from '@/components/ui/marquee';

const logos = [
  "Google", "Microsoft", "Spotify", "Airbnb", "Netflix", "Amazon", "Meta", "Apple"
];

const PlaceholderLogo = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-10 text-2xl font-bold text-foreground/40 font-headline">
    {name}
  </div>
);

export default function TrustBar() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <p className="text-center text-sm font-bold tracking-wider uppercase text-muted-foreground mb-8">
          Trusted by the world's leading companies
        </p>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s]">
            {logos.map((name) => (
              <div key={name} className="w-48 h-12 flex items-center justify-center">
                 <PlaceholderLogo name={name} />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
