"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-background z-50">
      <div className="w-64 h-64">
        <DotLottieReact
          src="https://lottie.host/f0e7431f-49f5-428c-8d8a-a625216ebbe7/W3UqdgLOaR.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};
