import { ShoppingCart } from 'phosphor-react'
import { useShopCar } from '../hooks/useShopCar'
import { ButtonHTMLAttributes } from 'react'


interface ShoppingCartProps extends ButtonHTMLAttributes < HTMLButtonElement > {
  primary?: boolean
}
export function ShoppingCartButton({ primary = false, ...rest}: ShoppingCartProps) {
  const { products } = useShopCar()

  console.log(products.length);
  
  return (
    <button {...rest}
      className={
        primary
          ? 'flex items-center justify-center p-2 rounded-md relative bg-yellow-light text-yellow-dark'
          : 'flex items-center justify-center p-2 rounded-md bg-purple-dark text-wite hover:bg-purple-normal'
      }

    >
      {  primary ? (
        <span className="w-5 h-5 text-wite rounded-full flex items-center justify-center absolute -top-2 -right-2 bg-yellow-dark">
          {products.length}
        </span>
      ) : (
        ''
      )}
      <ShoppingCart size={22} weight="fill" />
    </button>
  )
}
