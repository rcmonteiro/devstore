import { AddToCartButton } from '@/components/add-to-cart-button'
import { env } from '@/env'
import { getFeaturedProducts } from '@/lib/data/get-featured-products'
import { getProduct } from '@/lib/data/get-product'
import { GetProductParams } from '@/lib/types/product'
import { Metadata } from 'next'
import Image from 'next/image'

export const generateMetadata = async ({
  params,
}: GetProductParams): Promise<Metadata> => {
  const { title } = await getProduct(params.slug)
  return {
    title,
    metadataBase: new URL(env.APP_URL),
  }
}

export async function generateStaticParams() {
  const products = await getFeaturedProducts()
  return products.map((product) => {
    return {
      slug: product.slug,
    }
  })
}

export default async function ProductPage({ params }: GetProductParams) {
  const slug = params.slug
  const { id, title, description, price, image } = await getProduct(slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={image}
          height={1000}
          width={1000}
          quality={100}
          alt=""
          priority
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">{description}</p>
        <div className="flex items-center gap-3 mt-8">
          <span className="inline-block py-2.5 font-semibold px-5 bg-violet-500 rounded-full">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de{' '}
            {(price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-2">
            {Array.from(['P', 'M', 'G', 'GG']).map((size) => {
              return (
                <button
                  key={size}
                  type="button"
                  className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
                >
                  {size}
                </button>
              )
            })}
          </div>
        </div>

        <AddToCartButton productId={id} />
      </div>
    </div>
  )
}
