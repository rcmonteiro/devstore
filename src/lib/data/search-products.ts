import { api } from '../api'
import { Product } from '../types/product'

export const searchProduct = async (query: string): Promise<Product[]> => {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })
  const products = await response.json()
  return products
}
