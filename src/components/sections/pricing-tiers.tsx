
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Code, Palette, LayoutTemplate, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const WordPressIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-3.5 0-6.5-2.2-6.5-5.5S8.5 1 12 1s6.5 2.2 6.5 5.5-3 5.5-6.5 5.5z"/>
        <path d="M12 12c1.5 0 3.5 0 5.5 0 2.5 0 4.5 1.5 4.5 4s-2 4-4.5 4-3-1.5-4-3"/>
        <path d="M12 12c-1.5 0-3.5 0-5.5 0-2.5 0-4.5 1.5-4.5 4s2 4 4.5 4 3-1.5 4-3"/>
        <path d="M2.5 9c0-2 1.5-4 4-4"/>
        <path d="M21.5 9c0-2-1.5-4-4-4"/>
    </svg>
)

const pricingData = {
  "Website Development": {
    icon: <Code className="w-5 h-5 mr-2" />,
    accentColor: "primary",
    packages: [
      {
        name: "Starter",
        price: "R 1,800",
        description: "1 Page / Landing Page",
        features: [
          "Mobile responsive",
          "Up to 4 sections (Home, About, Services, Contact)",
          "Contact form + social links",
        ],
        delivery: "3-4 days",
      },
      {
        name: "Business Website",
        price: "R 3,500",
        description: "Up to 5 Pages",
        features: [
          "Custom-coded with React.js / HTML & CSS",
          "Up to 5 pages (Home, About, Services, Portfolio/Blog, Contact)",
          "Basic SEO + responsive design",
        ],
        delivery: "5-7 days",
      },
      {
        name: "Professional Website",
        price: "R 6,000",
        description: "10 Pages with advanced features",
        features: [
          "Custom-coded with animations",
          "Blog setup, gallery, testimonial slider",
          "Google Analytics + SEO basics",
        ],
        delivery: "7-10 days",
      },
    ],
  },
  "WordPress Websites": {
    icon: <WordPressIcon className="w-5 h-5 mr-2" />,
    accentColor: "secondary",
    packages: [
      {
        name: "Basic WordPress Site",
        price: "R 2,800",
        description: "5 Pages, easy to manage",
        features: [
          "Premium theme setup",
          "Up to 5 pages",
          "Free plugins for speed & security",
        ],
        delivery: "5-7 days",
      },
      {
        name: "Business WordPress Site",
        price: "R 4,500",
        description: "10 Pages with customization",
        features: [
          "Custom theme customization",
          "SEO setup, contact forms, social media integration",
        ],
        delivery: "7-10 days",
      },
      {
        name: "E-Commerce WordPress",
        price: "From R 7,000",
        description: "WooCommerce Store",
        features: [
          "Up to 10 products (add more at R 200 each)",
          "Cart, checkout, payment gateway setup",
          "Stock management system",
        ],
        delivery: "Varies",
      },
    ],
  },
  "UI/UX Design": {
    icon: <LayoutTemplate className="w-5 h-5 mr-2" />,
    accentColor: "accent",
    packages: [
      {
        name: "Landing Page Design",
        price: "R 1,200",
        description: "A single, high-impact page.",
        features: [],
        delivery: ""
      },
      {
        name: "Full Website Design",
        price: "R 2,500",
        description: "Up to 5 Pages in Figma.",
        features: [],
        delivery: ""
      },
      {
        name: "Mobile App UI",
        price: "R 3,800",
        description: "Up to 10 Screens.",
        features: [],
        delivery: ""
      },
      {
        name: "Complete UI/UX Package",
        price: "R 5,500",
        description: "Website/App + Prototype.",
        features: [],
        delivery: ""
      },
    ],
  },
  "Graphic Design": {
    icon: <Palette className="w-5 h-5 mr-2" />,
    accentColor: "yellow", // Custom color, will need to be handled
    packages: [
      { name: "Logo Design", price: "R 1,000", description: "", features: [], delivery: "" },
      { name: "Business Card Design", price: "R 700", description: "", features: [], delivery: "" },
      { name: "Flyer / Poster Design", price: "R 900", description: "", features: [], delivery: "" },
      {
        name: "Full Brand Kit",
        price: "R 3,000",
        description: "Logo, Card, Letterhead, Social Pack.",
        features: [],
        delivery: ""
      },
    ],
  },
  "Mobile App Development": {
    icon: <Smartphone className="w-5 h-5 mr-2" />,
    accentColor: "purple", // Custom color
    packages: [
      {
        name: "Basic App",
        price: "R 5,000",
        description: "2-3 Screens",
        features: ["Info display, contact form, links"],
        delivery: ""
      },
      {
        name: "Business App",
        price: "R 8,000",
        description: "Up to 6 Screens",
        features: [
          "User authentication (login/signup)",
          "Services / Products showcase",
          "Contact & chat integration",
        ],
        delivery: ""
      },
      {
        name: "E-Commerce / Booking App",
        price: "From R 12,000",
        description: "Advanced Functionality",
        features: [
          "Shopping cart OR booking system",
          "Payment gateway setup",
          "Push notifications",
        ],
        delivery: ""
      },
    ],
  },
};

type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  delivery: string;
};

const getAccentColorStyle = (color: string) => {
  const colorMap: { [key: string]: string } = {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
    accent: "hsl(var(--accent))",
    yellow: "#FBBF24", // Tailwind yellow-400
    purple: "#A78BFA", // Tailwind violet-400
    foreground: "hsl(var(--foreground))",
  };
  return { color: colorMap[color] || colorMap['primary'] };
};

const getButtonColorStyle = (color: string) => {
    const colorMap: { [key: string]: string } = {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        yellow: "#FBBF24",
        purple: "#A78BFA",
        foreground: "hsl(var(--foreground))",
    };

    const foregroundMap: { [key: string]: string } = {
        primary: "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent-foreground))",
        yellow: "#18181B", // zinc-900
        purple: "#18181B",
        foreground: "hsl(var(--background))",
    }

    return { 
        backgroundColor: colorMap[color] || colorMap['primary'],
        color: foregroundMap[color] || foregroundMap['primary']
    };
};


const PackageCard = ({ pkg, accentColor }: { pkg: Package, accentColor: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="h-full"
  >
    <Card className="h-full flex flex-col bg-card/50 hover:bg-card border-border/20 hover:border-primary/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-2xl" style={getAccentColorStyle(accentColor)}>
          {pkg.name}
        </CardTitle>
        {pkg.description && <CardDescription>{pkg.description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-4xl font-bold font-headline mb-6">{pkg.price}</div>
        {pkg.features.length > 0 && (
          <ul className="space-y-3 text-muted-foreground">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {pkg.delivery && (
            <p className="text-xs text-muted-foreground mb-4">
                <strong>Delivery:</strong> {pkg.delivery}
            </p>
        )}
        <Button size="lg" className="w-full" style={getButtonColorStyle(accentColor)} asChild>
          <Link href="https://wa.me/27641663906" target="_blank" rel="noopener noreferrer">
            Get Started
          </Link>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default function PricingTiers() {
  return (
    <section id="pricing-tiers" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="Website Development" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto mb-10">
            {Object.entries(pricingData).map(([title, data]) => (
              <TabsTrigger key={title} value={title} className="py-3 flex items-center justify-center">
                {data.icon} {title}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {Object.entries(pricingData).map(([title, data]) => (
              <TabsContent key={title} value={title}>
                <motion.div
                  key={title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.packages.map((pkg) => (
                      <PackageCard key={pkg.name} pkg={pkg} accentColor={data.accentColor} />
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
