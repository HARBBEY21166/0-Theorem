import HeroSection from '@/components/sections/hero';
import TrustBar from '@/components/sections/trust-bar';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Process from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import Cta from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Cta />
    </>
  );
}
