"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Badge } from '../ui/badge';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { feature: "Logo & Brand Guide", foundation: true, architecture: true, ecosystem: true },
  { feature: "Up to 5 Pages", foundation: false, architecture: true, ecosystem: false },
  { feature: "Unlimited Pages", foundation: false, architecture: false, ecosystem: true },
  { feature: "Custom Web Design", foundation: false, architecture: true, ecosystem: true },
  { feature: "Responsive Development", foundation: false, architecture: true, ecosystem: true },
  { feature: "CMS Integration", foundation: false, architecture: true, ecosystem: true },
  { feature: "SEO Setup", foundation: false, architecture: true, ecosystem: true },
  { feature: "User Accounts", foundation: false, architecture: false, ecosystem: true },
  { feature: "Database Integration", foundation: false, architecture: false, ecosystem: true },
  { feature: "API Development", foundation: false, architecture: false, ecosystem: true },
  { feature: "2 Design Revisions", foundation: true, architecture: false, ecosystem: false },
  { feature: "3 Design Revisions", foundation: false, architecture: true, ecosystem: false },
  { feature: "Unlimited Revisions", foundation: false, architecture: false, ecosystem: true },
  { feature: "Ongoing Support", foundation: false, architecture: "Add-on", ecosystem: "Included" },
];

const tiers = [
  { name: "The Foundation", accent: "secondary" },
  { name: "The Architecture", accent: "primary" },
  { name: "The Ecosystem", accent: "accent" },
];

export default function FeatureComparison() {
  const tableRef = useRef(null);

  useEffect(() => {
    const rows = gsap.utils.toArray('.table-row');
    gsap.fromTo(rows,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const renderCellContent = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />;
    }
    return <Badge variant="outline">{value}</Badge>;
  };

  return (
    <section id="feature-comparison" className="py-20 sm:py-32">
      <div ref={tableRef} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-headline font-bold">Side-by-Side Comparison</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                For clients who need to see every detail.
            </p>
        </div>
        <div className="border border-border/40 rounded-lg overflow-hidden bg-card/30">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-1/3 font-bold text-lg text-foreground">Feature</TableHead>
                {tiers.map(tier => (
                  <TableHead key={tier.name} className="text-center font-bold text-lg">
                    <span style={{ color: `hsl(var(--${tier.accent}))` }}>{tier.name}</span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((item, index) => (
                <TableRow key={index} className="table-row border-t border-border/20">
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">{renderCellContent(item.foundation)}</TableCell>
                  <TableCell className="text-center">{renderCellContent(item.architecture)}</TableCell>
                  <TableCell className="text-center">{renderCellContent(item.ecosystem)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
