import { PurchaseButton } from './PurchaseButton'

export function Card() {
  return (
    <div className="w-64 h-80 bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md ">
      <div>
        <img src="" alt="" />
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