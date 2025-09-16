import PricingHero from '@/components/sections/pricing-hero';
import PricingTiers from '@/components/sections/pricing-tiers';
import FeatureComparison from '@/components/sections/feature-comparison';
import PricingFaq from '@/components/sections/pricing-faq';
import CustomSolutionCta from '@/components/sections/custom-solution-cta';
import PricingAssurance from '@/components/sections/pricing-assurance';

export default function PricingPage() {
  return (
    <div className="pricing-page-gradient">
      <PricingHero />
      <PricingTiers />
      <FeatureComparison />
      <PricingFaq />
      <CustomSolutionCta />
      <PricingAssurance />
    </div>
  );
}
