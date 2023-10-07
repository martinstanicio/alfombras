import { defineCollection, z } from "astro:content";
import { names } from "../util/fragances";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      img: image(),
      fragances: z.array(z.enum(names)).optional(),
    }),
});

export const collections = {
  products: productsCollection,
};
