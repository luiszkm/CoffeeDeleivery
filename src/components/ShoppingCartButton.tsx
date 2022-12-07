import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

interface ShoppingCartProps {
  primary?: boolean
}
export function ShoppingCartButton({ primary = false }: ShoppingCartProps) {
  const [product, setProducts] = useState(0)
  return (
    <button
      className={
        primary
          ? 'flex items-center justify-center p-2 rounded-md relative bg-yellow-light text-yellow-dark'
          : 'flex items-center justify-center p-2 rounded-md bg-purple-dark text-wite hover:bg-purple-normal'
      }
    >
      {product > 0 && primary ? (
        <span className="w-5 h-5 text-wite rounded-full flex items-center justify-center absolute -top-2 -right-2 bg-yellow-dark">
          {product}
        </span>
      ) : (
        ''
      )}
      <ShoppingCart size={22} weight="fill" />
    </button>
  )
}
