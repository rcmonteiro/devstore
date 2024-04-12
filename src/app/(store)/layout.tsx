import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-default grid-rows-store gap-5 p-8">
      <CartProvider>
        <Header />
        {children}
      </CartProvider>
    </div>
  )
}
