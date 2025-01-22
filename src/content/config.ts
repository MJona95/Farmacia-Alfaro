import { defineCollection, z } from "astro:content";

//z -> zod schema 

const articles = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(). url(),
        readtime: z.number(),
        description: z.string()
    })
})

export const collection = { articles }