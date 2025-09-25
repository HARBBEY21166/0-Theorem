"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
  {
    id: 'blog-post-1',
    title: 'The Art of the Component',
    category: 'Development',
    date: '2024-07-15',
    description: 'A deep dive into building reusable, maintainable, and scalable React components.',
    author: 'Abiodun Abbey Aina',
    imageHint: 'abstract code',
  },
  {
    id: 'blog-post-2',
    title: 'Design Systems for Scale',
    category: 'UI/UX',
    date: '2024-07-10',
    description: 'How a well-structured design system can accelerate your development process and unify your brand.',
    author: 'Abiodun Abbey Aina',
    imageHint: 'design system grid',
  },
  {
    id: 'blog-post-3',
    title: 'The "Why" Before the "What"',
    category: 'Strategy',
    date: '2024-07-05',
    description: 'Exploring the importance of a strong digital strategy before a single line of code is written.',
    author: 'Abiodun Abbey Aina',
    imageHint: 'strategy whiteboard',
  },
  {
    id: 'blog-post-4',
    title: 'Animating with Framer Motion',
    category: 'Development',
    date: '2024-06-28',
    description: 'A practical guide to creating fluid, meaningful animations in your React applications.',
    author: 'Abiodun Abbey Aina',
    imageHint: 'smooth animation curves',
  },
  {
    id: 'blog-post-5',
    title: 'The Psychology of Color',
    category: 'UI/UX',
    date: '2024-06-22',
    description: 'How to use color effectively to evoke emotion and guide user behavior in your designs.',
    author: 'Abiodun Abbey Aina',
    imageHint: 'color palette',
  },
    {
    id: 'blog-post-6',
    title: 'Server Components in Next.js 14',
    category: 'Development',
    date: '2024-06-15',
    description: 'Unlocking performance gains by understanding and implementing React Server Components.',
    author: 'Abiodun Abbey Aina',
    imageHint: 'server architecture diagram',
  },
];

const PostCard = ({ post }: { post: typeof posts[0] }) => {
  const imageData = PlaceHolderImages.find(p => p.id === post.id);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
    <Card className="h-full bg-card/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 group flex flex-col">
        <CardHeader>
            {imageData && (
                 <Link href="#">
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                        <Image
                            src={imageData.imageUrl}
                            alt={post.title}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={post.imageHint}
                            className="transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </Link>
            )}
            <div className="flex justify-between items-center text-sm text-muted-foreground">
                <Badge variant={
                    post.category === 'Development' ? 'default' :
                    post.category === 'UI/UX' ? 'secondary' : 'outline'
                }>{post.category}</Badge>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            <CardTitle className="font-headline text-2xl pt-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <CardDescription>{post.description}</CardDescription>
        </CardContent>
        <CardContent>
            <Link href="#" className="inline-flex items-center font-semibold text-primary group-hover:underline">
                Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </CardContent>
    </Card>
    </motion.div>
  );
};


export default function BlogList() {
  return (
    <section id="blog-list" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
