import { ShoppingCartButton } from './ShoppingCartButton'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'


interface ClientAddressProps{
 address:{
  id: string;
  cep: string
  street: string
  number: string
  complement: string
  district: string
  city: string
  state: string
  createdAt: Date
 }
}


export function Header() {
  const {address}= JSON.parse(localStorage.getItem('@ClientAddressCoffee') || "{}") 


  return (
    <header className="flex items-center justify-between px-4 py-8">
      <NavLink to="/">
        <img
          src="/img/logo.svg"
          alt="copo de cafe roxo escrito coffee delivery ao lado"
        />
      </NavLink>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 p-2 rounded-md bg-purple-light text-sm text-purple-dark">
          <MapPin size={22} weight="fill" /> 
          {!address ? "Brasil" : `${address?.city.toLowerCase()}, ${address?.state.toUpperCase()}`}
        </button>
        <NavLink to="/checkout">
          <ShoppingCartButton primary />
        </NavLink>
      </div>
    </header>
  )
}
