'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export const CartWidget = () => {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="size-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
