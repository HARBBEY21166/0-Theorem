import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-auto flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold font-headline">Zero Theorem</span>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/services">Services</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#portfolio">Work</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/#process">Process</Link>
            </Button>
            <Button asChild>
              <Link href="/#cta">Start a Project</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
