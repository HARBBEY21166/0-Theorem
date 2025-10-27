
import PricingHero from '@/components/sections/pricing-hero';
import PricingTiers from '@/components/sections/pricing-tiers';
import PricingFaq from '@/components/sections/pricing-faq';
import CustomSolutionCta from '@/components/sections/custom-solution-cta';
import PricingAssurance from '@/components/sections/pricing-assurance';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Invest in precision. Explore our structured pricing packages for web development, WordPress, UI/UX design, and more. Every project is custom-tailored.',
};

export default function PricingPage() {
  return (
    <div className="pricing-page-gradient">
      <PricingHero />
      <PricingTiers />
      <PricingFaq />
      <CustomSolutionCta />
      <PricingAssurance />
    </div>
  );
}
