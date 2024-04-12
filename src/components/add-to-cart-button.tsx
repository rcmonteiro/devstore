'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart } = useCart()

  const handleAddToCart = (productId: number) => {
    addToCart(productId)
  }

  return (
    <button
      onClick={() => handleAddToCart(productId)}
      className="flex h-12 items-center justify-center bg-emerald-600 mt-8 rounded-full font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
