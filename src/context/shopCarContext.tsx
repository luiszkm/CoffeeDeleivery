import { ReactNode, createContext, useState } from "react"


export interface Product {
  id: string
  name: string
  amount: number
  price: number
}

export interface ShopCarDataProps {
  products: Product[]
  handleAddProductInShopCar: any
}
interface ShopCarProvider {
  children: ReactNode
}

export const shopCarContext = createContext({} as ShopCarDataProps)

export function ShopCarProvider({ children }: ShopCarProvider) {
  const [products, setProducts] = useState<Product[]>([])
  console.log(products);
  
  function handleAddProductInShopCar(product:Product){
    setProducts(prevState=> [...prevState, product])
    console.log("deu certo")
  }
  
  return (
    <shopCarContext.Provider value={{
      products,
      handleAddProductInShopCar
    }}>
      {children}
    </shopCarContext.Provider>
  )
}