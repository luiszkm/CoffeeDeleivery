import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successLogo from '../assets/Success.svg'
interface ProductsInformationProps {
  totalPrice: string
  paymentMethod: 'debit' | 'credit' | 'money'

}

interface ClientAddress {
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

interface PurchaseInformationProps {
  address: ClientAddress
  products: ProductsInformationProps
}


export function Success() {
  const ClientAddress: PurchaseInformationProps = JSON.parse(localStorage.getItem('@ClientAddressCoffee') || '')
  const { address } = ClientAddress
  const { products } = ClientAddress
  return (
    <div className="flex w-full justify-between items-center flex-col lg:flex-row">
      <section >
        <h2 className='text-yellow-dark font-extrabold text-3xl font-mono'>Uhu! Pedido confirmado</h2>
        <span className='text-xl text-base-subTitle'>Agora é só aguardar que logo o café chegará até você</span>

        <div className='flex items-start flex-col gap-8 mt-10 mb-10 text-base-text'>
          <div className="flex items-center gap-3" >
            <div className="bg-purple-normal w-8 h-8 rounded-full flex items-center justify-center">
              <MapPin size={16} color="#ffffff" weight="fill" />
            </div>
            <div className="flex flex-col">
              <span>Entrega em <strong>{`${address.street},${address.number}`}</strong></span>
              <span> {`${address.district.toLowerCase()} - ${address.city.toLowerCase()}, ${address.state}`}</span>
            </div>
          </div>
          <div className="flex items-center gap-3" >
            <div className="bg-yellow-normal w-8 h-8 rounded-full flex items-center justify-center">
              <Timer size={16} color="#ffffff" weight="fill" />
            </div>
            <div className="flex flex-col">
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="flex items-center gap-3" >
            <div className="bg-yellow-dark w-8 h-8 rounded-full flex items-center justify-center">
              <CurrencyDollar size={16} color="#ffffff" weight="fill" />
            </div>
            <div className="flex flex-col">
              <span>Pagamento na entrega</span>
              <strong>{products.paymentMethod === 'credit' ? 'Cartão de Credito':
               products.paymentMethod === 'debit' ? "Cartão de Débito" : "Pagamento em Dinheiro"}</strong>
            </div>
          </div>
        </div>
      </section>
      <img src={successLogo} alt="" />

    </div>
  )
}