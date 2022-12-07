import { ShoppingCartButton } from './ShoppingCartButton'
import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-8">
      <img
        src="/img/logo.svg"
        alt="copo de cafe roxo escrito coffee delivery ao lado"
      />
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 p-2 rounded-md bg-purple-light text-sm text-purple-dark">
          <MapPin size={22} weight="fill" />
          Contagem, MG{' '}
        </button>
        <ShoppingCartButton primary />
      </div>
    </header>
  )
}
