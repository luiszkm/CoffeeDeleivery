import { ShoppingCartButton } from './ShoppingCartButton'
import { Intersect, Minus, Plus } from 'phosphor-react'
import { useShopCar } from '../hooks/useShopCar'

interface PurchaseButtonProps {
  amountProduct: number
  changeAmountProduct: (params:number) => void
  addProduct: () => void
}


export function PurchaseButton({amountProduct, changeAmountProduct, addProduct}:PurchaseButtonProps) {

  const isMinusOne = amountProduct == 1


 

  return (
    <div>
      <span className="text-2xl text-base-text font-bold font-mono ">
        <small className="text-sm font-sans">R$</small> 9.99
      </span>
      <div className="flex items-center gap-2">
        <div className="bg-base-button w-[72px] rounded-md gap-1 flex items-center p-2 justify-between text-base-title ">
          <button className=" text-purple-normal disabled:opacity-80"
            disabled={isMinusOne}>
            <Minus size={14} weight="bold"
              onClick={() => changeAmountProduct(-1)}
            />
          </button>
          {amountProduct}
          <button className=" text-purple-normal ">
            <Plus size={14} weight="bold"
              onClick={() => changeAmountProduct(1)}
            />
          </button>
        </div>
        <ShoppingCartButton
          onClick={()=>addProduct()}
        />
      </div>
    </div>
  )
}
