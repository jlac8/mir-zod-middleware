import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1, "Title is required."),
  price: z.number().positive("Price must be greater than 0."),
  description: z.string().min(1, "Description is required.").max(200, "Description cannot exceed 200 characters."),
  category: z.enum(["electronics", "clothing", "furniture"]),
  image: z.string().url("Image must be a valid URL").optional(),
});

export type Product = z.infer<typeof productSchema>;
