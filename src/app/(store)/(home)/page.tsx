import { getFeaturedProducts } from '@/lib/data/get-featured-products'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative first-of-type:col-span-6 first-of-type:row-span-6 col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              width={860}
              height={860}
              quality={100}
              alt={product.title}
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute group-first-of-type:bottom-28 group-first-of-type:right-28 bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
