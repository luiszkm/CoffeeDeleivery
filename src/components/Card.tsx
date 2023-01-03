import { PurchaseButton } from './PurchaseButton'
import { useState } from 'react'

import { useShopCar } from '../hooks/useShopCar'

type Product = {
  data: {
    id: string
    image: string
    name: string
    price: number
    description: string
    type: string[]
  }
}


export function Card({data}: Product) {

  const { handleAddProductInShopCar } = useShopCar()

  const [amountProduct, setAmountProduct] = useState(1)

  function handleAmountProduct(amount: number) {
    amountProduct < 1 ? setAmountProduct(1) : setAmountProduct(prevState => prevState + amount)
  }

  function AddProductInShopCar() {

    const productAdd = {
      id: data.id,
      amount: amountProduct,
      name: data.name,
      price: data.price,
    }
    handleAddProductInShopCar(productAdd)
  }
  return (
    <div className="w-64  flex pb-5 relative mt-[10px] items-center justify-between flex-col bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md ">
      <div className="relative -top-5 flex items-center flex-col gap-3">
        <img src={data.image} alt={data.name}
        className="w-[120px] h-[120px] object-cover" />
       <div className="flex items-center gap-3">
       {data.type.map(item=>(
            <span className=" px-1 py-2 rounded-[10px] uppercase font-bold bg-yellow-light text-yellow-dark">
              {item}
            </span>
          ))}
       
       </div>
      </div>
      <div>
        <h3 className="font-mono text-xl font-bold text-center text-base-subTitle">
          {data.name}
        </h3>
        <p className="text-sm text-base-label text-center">
          {data.description}
        </p>
      </div>
      <PurchaseButton price={data.price}
        changeAmountProduct={handleAmountProduct}
        addProduct={AddProductInShopCar}
        amountProduct={amountProduct}
      />
    </div>
  )
}
