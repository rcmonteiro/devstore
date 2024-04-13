import { env } from '@/env'

export const api = async (path: string, init?: RequestInit) => {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(`/api${path}`, baseUrl)

  // Forçando um delay artificial no carregamento de todas as chamadas da API
  // if (env.NEXT_PUBLIC_FORCE_API_DELAY) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000))
  // }
  return fetch(url, init)
}
