import { ShoppingCartButton } from './ShoppingCartButton'
import { Minus, Plus } from 'phosphor-react'
export function PurchaseButton() {
  return (
    <div>
      <span className="text-2xl text-base-text font-bold font-mono ">
        <small className="text-sm font-sans">R$</small> 9.99
      </span>
      <div className="flex items-center gap-2">
        <div className="bg-base-button w-[72px] rounded-md gap-1 flex items-center p-2 justify-between text-base-title">
          <button className=" text-purple-normal">
            <Minus size={14} weight="bold" />
          </button>
          1
          <button className=" text-purple-normal ">
            <Plus size={14} weight="bold" />
          </button>
        </div>
        <ShoppingCartButton />
      </div>
    </div>
  )
}
