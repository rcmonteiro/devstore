import { GetProductParams } from '@/lib/types/product'
import { z } from 'zod'
import data from '../data.json'

export const GET = async (req: Request, { params }: GetProductParams) => {
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product nof found' }, { status: 400 })
  }

  return Response.json(product)
}
