import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/posts/' }),
	schema: ({ image }) =>
		z.object({
			author: z.string(),
			date: z.string(),
			image: image(),
			title: z.string(),
			url: z.string(),
		}),
});

export const collections = {
	posts: postsCollection,
};
