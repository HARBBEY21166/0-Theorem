import AboutHero from '@/components/sections/about-hero';
import Philosophy from '@/components/sections/philosophy';
import Journey from '@/components/sections/journey';
import Toolbox from '@/components/sections/toolbox';
import Hobbies from '@/components/sections/hobbies';
import Cta from '@/components/sections/cta';

export default function AboutPage() {
  return (
    <div className="about-page-gradient">
      <AboutHero />
      <Philosophy />
      <Journey />
      <Toolbox />
      <Hobbies />
      <Cta />
    </div>
  );
}
