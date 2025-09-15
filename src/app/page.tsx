import HeroSection from '@/components/sections/hero';
import TrustBar from '@/components/sections/trust-bar';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Process from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import Cta from '@/components/sections/cta';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
