import { MetadataRoute } from 'next'
import { blogPosts } from './(default)/blog/blog-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shirutim4u.com'
  const now = new Date()

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: post.contentType === 'pillar' ? 0.9 : 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/mobile-toilets`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...blogEntries,
  ]
}

