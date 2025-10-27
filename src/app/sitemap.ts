
import { MetadataRoute } from 'next';

const URL = 'https://zerotheorem.com'; // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/portfolio',
    '/pricing',
    '/services',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
