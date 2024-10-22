import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      img: image(),
    }),
});

export const collections = {
  products: productsCollection,
};
