import { z } from 'zod'

const envSchema = z.object({
  APP_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_FORCE_API_DELAY: z.coerce.boolean(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
