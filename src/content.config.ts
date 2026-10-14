import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    videoId: z.string(),
    publishedAt: z.coerce.date(),
    officialLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { videos };
