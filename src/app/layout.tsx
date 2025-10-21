
"use client";

import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { inter, poppins } from '@/app/fonts';
import { useState, useEffect, useTransition } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
      </head>
      <body className={cn("font-body antialiased")}>
        {isLoading && (
            <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-background z-[999]">
                <div className="w-64 h-64">
                    <DotLottieReact
                    src="https://lottie.host/f0e7431f-49f5-428c-8d8a-a625216ebbe7/W3UqdgLOaR.lottie"
                    loop
                    autoplay
                    />
                </div>
            </div>
        )}
        <div className={cn(isLoading && "opacity-0")}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Toaster />
            </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
