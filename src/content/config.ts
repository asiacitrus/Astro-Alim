import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		blogcategories: z.array(z.string()),
		blogtags: z.array(z.string()),
	}),
});

const surah=defineCollection({
	schema: z.object({
		title: z.string(),
		DATE: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		SurahNumber: z.string(),
		BookCode: z.string(),
		TotalAyah: z.string(),
	}),
})

export const collections = { blog,surah };
