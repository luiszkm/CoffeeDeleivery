import { useContext } from "react";
import { shopCarContext,ShopCarDataProps } from "../context/shopCarContext";


export function useShopCar (): ShopCarDataProps {
  const context = useContext(shopCarContext)
  return context
}