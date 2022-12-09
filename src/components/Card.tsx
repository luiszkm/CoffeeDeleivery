import { PurchaseButton } from './PurchaseButton'
import coffee from '../assets/coffee.jpg'

export function Card() {
  return (
    <div className="w-64 h-80 flex pb-6 relative mt-[10px] items-center justify-between flex-col bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md ">
      <div className="relative -top-5 flex items-center flex-col gap-3">
        <img 
          src={coffee}
          alt=""
        />
        <span className=" px-1 py-2 rounded-[10px] uppercase font-bold bg-yellow-light text-yellow-dark">
          Tradicional
        </span>
      </div>
      <div>
        <h3 className="font-mono text-xl font-bold text-base-subTitle">
          Expresso
        </h3>
        <p className="text-sm text-base-label">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <PurchaseButton />
    </div>
  )
}
