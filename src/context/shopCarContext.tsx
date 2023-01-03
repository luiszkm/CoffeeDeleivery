import { ReactNode, createContext, useState } from "react"


export interface Product {
  id: string
  name: string
  amount: number
  price: number
  imageUrl: string
}

export interface ShopCarDataProps {
  products: Product[]
  loadProducts: number | undefined
  handleAddProductInShopCar:(params: Product) => void
  handleRemoveProductInShopCar: (params: Product) => void
  handleAlternateAmountProduct: any
}
interface ShopCarProvider {
  children: ReactNode
}

export const shopCarContext = createContext({} as ShopCarDataProps)

export function ShopCarProvider({ children }: ShopCarProvider) {
  const [products, setProducts] = useState<Product[]>([])
  const [loadProducts, setLoadProducts] = useState(0)
  
  
  function handleAddProductInShopCar(product:Product){
    setProducts(prevState=> [...prevState, product])
  }
  function handleRemoveProductInShopCar(productForDelete:Product){
    const productsRemoved = products.filter(product=>product.id !== productForDelete.id)
    setProducts(productsRemoved)
  }

  function handleAlternateAmountProduct(productForAlter:Product , updateAmount: number ){
    let productAlter = products.find(productFind => productFind.id === productForAlter.id) || {amount:1, price: 1}
    productAlter.amount = updateAmount

    setLoadProducts(Number(productAlter.amount * productAlter.price))
    
  }
  
  return (
    <shopCarContext.Provider value={{
      products,
      loadProducts,
      handleAddProductInShopCar,
      handleRemoveProductInShopCar,
      handleAlternateAmountProduct
    }}>
      {children}
    </shopCarContext.Provider>
  )
}