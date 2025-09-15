import PortfolioHero from '@/components/sections/portfolio-hero';
import PortfolioGallery from '@/components/sections/portfolio-gallery';
import Cta from '@/components/sections/cta';

export default function PortfolioPage() {
  return (
    <div className="portfolio-page-gradient">
      <PortfolioHero />
      <PortfolioGallery />
      <Cta />
    </div>
  );
}
