import type { NextRequest } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export const GET = async (req: NextRequest) => {
  const { searchParams } = req.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  )

  return Response.json(products)
}
