
import PortfolioHero from '@/components/sections/portfolio-hero';
import PortfolioGallery from '@/components/sections/portfolio-gallery';
import Cta from '@/components/sections/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'A curated selection of our work where strategic thinking meets elegant execution. See proof of our practice in web development, UI/UX, and branding.',
};

export default function PortfolioPage() {
  return (
    <div className="portfolio-page-gradient">
      <PortfolioHero />
      <PortfolioGallery />
      <Cta />
    </div>
  );
}
