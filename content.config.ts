import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const commonSchema = z.object({
  tag: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.date(),
  path: z.string(),
  feature: z.boolean(),
  img: z.string(),
  toc: z.string(),
  alt: z.string(),
});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/blog/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
    content_ko: defineCollection({
      type: "page",
      source: {
        include: "ko/blog/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
    content_zh: defineCollection({
      type: "page",
      source: {
        include: "zh/blog/**",
        prefix: "",
      },
      schema: commonSchema,
    }),
  },
});
