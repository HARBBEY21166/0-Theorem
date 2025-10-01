
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useTransition } from 'react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { usePathname, useRouter } from 'next/navigation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isReloading, setIsReloading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsReloading(true);
    setTimeout(() => {
      if (href === pathname) {
          router.refresh();
      } else {
          router.push(href);
      }
      // A small delay to allow navigation/refresh to start before hiding loader
      setTimeout(() => setIsReloading(false), 100);
    }, 8000);

    if (isSheetOpen) {
      setIsSheetOpen(false);
    }
  };

  const isActuallyLoading = isPending || isReloading;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {isActuallyLoading && (
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
      <div className={cn("container flex h-14 items-center", isActuallyLoading && "opacity-0")}>
        <div className="mr-auto flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/zero-theorem-blue.svg" alt="Zero Theorem Logo" width={38} height={38} />
            <span className="font-bold font-headline">Zero Theorem</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
                 <Button variant="ghost" asChild key={link.href}>
                    <Link href={link.href} onClick={(e) => handleLinkClick(link.href, e)}>{link.label}</Link>
                 </Button>
            ))}
            <ThemeToggle />
            <Button asChild>
                <Link href="/contact" onClick={(e) => handleLinkClick('/contact', e)}>Start a Project</Link>
            </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col gap-4 mt-8">
                        {navLinks.map(link => (
                             <Link
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleLinkClick(link.href, e)}
                                className="block px-2 py-1 text-lg"
                             >
                                {link.label}
                            </Link>
                        ))}
                         <Button asChild className="mt-4">
                            <Link href="/contact" onClick={(e) => handleLinkClick('/contact', e)}>Start a Project</Link>
                        </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
