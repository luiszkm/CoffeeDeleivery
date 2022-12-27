import { Minus, Plus, Trash } from "phosphor-react";
import coffee from '../assets/coffee.jpg'

interface TabCardProps {
  amountProduct: number
  changeAmountProduct: (params: number) => void
}

export function TabCard({ changeAmountProduct, amountProduct }: TabCardProps) {
  const isMinusOne = amountProduct == 1

  return (

    <div className="flex items-center gap-5 relative p-2 w-full max-w-[368px] border-b-[1px] pb-6 border-base-button">
      <img className="h-16 w-16 bg-cover"
        src={coffee} alt="" />
      <div>
        <span className="text-base-subTitle"> expresso</span>
        <div className="flex items-center gap-2 ">
          <div className="bg-base-button w-[72px] rounded-md gap-1 flex items-center h-9  px-2 justify-between text-base-title  ">
            <button className=" text-purple-normal disabled:opacity-80"
              disabled={isMinusOne}
            >
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
          <button className="text-purple-normal flex items-center gap-1 bg-base-button rounded-md h-9 px-2 hover:bg-base-hover">
            <Trash size={16} />
            <span className="text-base-text text-xs uppercase">Remover</span>
          </button>
        </div>
      </div>


      <span className="text-base-text font-bold top-2 right-1 absolute">R$ 9.99</span>

    </div>

  )


}