
import BlogHero from '@/components/sections/blog-hero';
import BlogList from '@/components/sections/blog-list';
import Cta from '@/components/sections/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The Zero Theorem Journal. Insights on design, development, and digital strategy. A deep dive into the theorems that build great products.',
};

export default function BlogPage() {
  return (
    <div className="blog-page-gradient">
      <BlogHero />
      <BlogList />
      <Cta />
    </div>
  );
}
