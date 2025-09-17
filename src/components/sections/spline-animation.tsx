"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function SplineAnimation() {
  return (
    <section id="spline-animation" className="relative h-[500px] w-full flex items-center justify-center">
      <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <Spline
              scene="https://prod.spline.design/TWERz0weQDv7pm3S/scene.splinecode"
          />
      </Suspense>
    </section>
  );
}
