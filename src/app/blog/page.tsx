import BlogHero from '@/components/sections/blog-hero';
import BlogList from '@/components/sections/blog-list';
import Cta from '@/components/sections/cta';

export default function BlogPage() {
  return (
    <div className="blog-page-gradient">
      <BlogHero />
      <BlogList />
      <Cta />
    </div>
  );
}
