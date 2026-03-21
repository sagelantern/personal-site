import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

const family = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/family' }),
  schema: z.object({
    year: z.number(),
    title: z.string(),
  }),
});

export const collections = { writing, family };
