import z from 'zod'

const envSchema = z.object({
    VITE_REACT_API_URL: z.string().url(),
})

console.log(import.meta.env)

export const env = envSchema.parse(import.meta.env)
