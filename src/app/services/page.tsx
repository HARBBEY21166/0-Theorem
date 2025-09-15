import ServicesHero from '@/components/sections/services-hero';
import ServicesGrid from '@/components/sections/services-grid';
import ServicesDeepDive from '@/components/sections/services-deep-dive';
import TechStack from '@/components/sections/tech-stack';
import ProcessRefresher from '@/components/sections/process-refresher';
import Cta from '@/components/sections/cta';

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
