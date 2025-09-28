import Link from 'next/link';
import Image from 'next/image';
import { Dribbble, Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#" },
  { icon: <Twitter className="w-5 h-5" />, href: "#" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  { icon: <Dribbble className="w-5 h-5" />, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/zero-theorem-blue.svg" alt="Zero Theorem Logo" width={38} height={38} />
              <span className="font-bold font-headline text-lg">Zero Theorem</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2 text-center md:text-left">
              Solving the equation of digital excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <h3 className="font-headline font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href} className="text-center">
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-headline font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/40 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Zero Theorem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
