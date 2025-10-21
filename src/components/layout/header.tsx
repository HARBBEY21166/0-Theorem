
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState, useTransition, useEffect } from 'react';
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
  const [showLoader, setShowLoader] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href === pathname) return;

    setShowLoader(true);
    
    startTransition(() => {
        router.push(href);
    });
  };

  useEffect(() => {
    if (!isPending) {
        // A short delay to allow the new page to start rendering before hiding loader
        const timer = setTimeout(() => setShowLoader(false), 500);
        return () => clearTimeout(timer);
    }
  }, [isPending]);


  return (
    <>
      {showLoader && (
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
      <header className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-opacity duration-300",
        showLoader ? 'opacity-0' : 'opacity-100'
        )}>
        <div className="container flex h-14 items-center">
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
                        <SheetHeader className="sr-only">
                            <SheetTitle>Mobile Navigation Menu</SheetTitle>
                            <SheetDescription>
                                A list of links to navigate to other pages of the site, including services, portfolio, pricing, about, blog, and contact.
                            </SheetDescription>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        handleLinkClick(link.href, e);
                                        setIsSheetOpen(false);
                                    }}
                                    className="block px-2 py-1 text-lg"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button asChild className="mt-4">
                                <Link href="/contact" onClick={(e) => {
                                    handleLinkClick('/contact', e);
                                    setIsSheetOpen(false);
                                }}>Start a Project</Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </header>
    </>
  );
}
