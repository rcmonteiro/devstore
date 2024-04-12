import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/rcmonteiro.png"
            className="size-6 rounded-full"
            alt="User avatar"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}
