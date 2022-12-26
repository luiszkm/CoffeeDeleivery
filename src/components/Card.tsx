import { PurchaseButton } from './PurchaseButton'
import { useState } from 'react'

import coffee from '../assets/coffee.jpg'
import { useShopCar } from '../hooks/useShopCar'
interface Product {
  id: string
  name: string
  amount: number
  price: number
}


export function Card() {
  const { handleAddProductInShopCar } = useShopCar()

  const [amountProduct, setAmountProduct] = useState(1)

  function handleAmountProduct(amount: number) {
    amountProduct < 1 ? setAmountProduct(1) : setAmountProduct(prevState => prevState + amount)
  }


  function AddProductInShopCar() {

    const productAdd: Product = {
      id: '1',
      amount: amountProduct,
      name: 'coffee',
      price: 99999
    }
    handleAddProductInShopCar(productAdd)
  }
  return (
    <div className="w-64 h-80 flex pb-6 relative mt-[10px] items-center justify-between flex-col bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md ">
      <div className="relative -top-5 flex items-center flex-col gap-3">
        <img src={coffee} alt="" />
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
      <PurchaseButton
      changeAmountProduct={handleAmountProduct}
      addProduct={AddProductInShopCar}
      amountProduct={amountProduct}
       />
    </div>
  )
}
