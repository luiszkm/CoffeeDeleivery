import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Hero() {
  return (
    <main className="flex flex-col w-full bg-main-texture bg-cover px-4 md:flex-row gap-14 ">
      <div className="max-w-xl w-full">
        <div>
          <h1 className="text-base-title font-mono text-4xl font-extrabold p-2 text-center">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="text-base-subTitle text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <span className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-dark">
              <ShoppingCart size={16} />
            </span>
            Compra simples e segura
          </span>
          <span className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-normal">
              <Package size={16} />
            </span>
            O café chega fresquinho até você
          </span>
          <span className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-base-text">
              <Coffee size={16} />
            </span>
            Embalagem mantém o café intacto
          </span>
          <span className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full flex items-center justify-center bg-yellow-normal">
              <Timer size={16} />
            </span>
            Entrega rápida e rastreada
          </span>
        </div>
      </div>
      <img
        className="max-w-sm mx-auto my-0"
        src="/img/Imagem.png"
        alt="copo grande de café com um funo amarelo"
      />
    </main>
  )
}
