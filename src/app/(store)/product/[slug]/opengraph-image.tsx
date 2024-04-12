import { env } from '@/env'
import { getProduct } from '@/lib/data/get-product'
import { GetProductParams } from '@/lib/types/product'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function OgImage({ params }: GetProductParams) {
  const slug = params.slug
  const { title, image, price } = await getProduct(slug)

  const imageUrl = new URL(image, env.APP_URL).toString()

  // Font
  const interSemiBold = fetch(
    new URL('./Inter-SemiBold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: colors.zinc[950],
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '30px 60px',
        }}
      >
        <div
          style={{
            color: colors.zinc[100],
            fontSize: 48,
            background: `${colors.violet[700]}50`,
            padding: '20px 30px',
            borderRadius: '99999px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: colors.zinc[100],
            fontSize: 96,
            padding: '10px 30px',
          }}
        >
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
          })}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
