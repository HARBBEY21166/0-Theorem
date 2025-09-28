
import AboutHero from '@/components/sections/about-hero';
import Philosophy from '@/components/sections/philosophy';
import Journey from '@/components/sections/journey';
import Toolbox from '@/components/sections/toolbox';
import Hobbies from '@/components/sections/hobbies';
import Cta from '@/components/sections/cta';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const AboutSpline = dynamic(() => import('@/components/sections/about-spline'), {
  ssr: false,
  loading: () => <div className="container mx-auto px-4 h-[300px] md:h-[500px] flex justify-center items-center"><Skeleton className="w-full h-full" /></div>
});

export default function AboutPage() {
  return (
    <div className="about-page-gradient">
      <AboutHero />
      <Philosophy />
      <AboutSpline />
      <Journey />
      <Toolbox />
      <Hobbies />
      <Cta />
    </div>
  );
}
