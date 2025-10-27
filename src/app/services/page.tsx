
import ServicesHero from '@/components/sections/services-hero';
import ServicesGrid from '@/components/sections/services-grid';
import ServicesDeepDive from '@/components/sections/services-deep-dive';
import TechStack from '@/components/sections/tech-stack';
import ProcessRefresher from '@/components/sections/process-refresher';
import Cta from '@/components/sections/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our capabilities, including custom software development, UI/UX design, brand identity, and front-end engineering. We architect and animate digital experiences.',
};

export default function ServicesPage() {
  return (
    <div className="services-page-gradient">
      <ServicesHero />
      <ServicesGrid />
      <ServicesDeepDive />
      <TechStack />
      <ProcessRefresher />
      <Cta />
    </div>
  );
}
