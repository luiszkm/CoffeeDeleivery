import { ShoppingCartButton } from './ShoppingCartButton'

export function PurchaseButton() {
  return (
    <div>
      <span>
        {' '}
        <small>R$</small> 9.99
      </span>
      <div>
        <div>
          <button></button>1<button></button>
        </div>
        <ShoppingCartButton />
      </div>
    </div>
  )
}
