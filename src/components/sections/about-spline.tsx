
"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-card/50 rounded-lg animate-pulse" />,
  }
);

export default function AboutSpline() {
  return (
    <section id="about-spline" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 h-[400px] md:h-[500px]">
        <Suspense fallback={<div className="w-full h-full bg-card/50 rounded-lg animate-pulse" />}>
          <Spline scene="https://prod.spline.design/TWERz0weQDv7pm3S/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
}
