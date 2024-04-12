export interface Product {
  id: number
  title: string
  slug: string
  image: string
  description: string
  price: number
  featured: boolean
}

export interface GetProductParams {
  params: {
    slug: string
  }
}

export interface SearchProductParams {
  searchParams: {
    q: string
  }
}
