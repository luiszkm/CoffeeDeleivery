import { useEffect, useState } from 'react'
import { TabCard } from '../../components/TabCard'
import { PurchaseForm } from './components/PurchaseForm'
import { useForm, FormProvider } from 'react-hook-form'
import { PaymentMethod } from './components/PaymentMethod';
import { useShopCar } from '../../hooks/useShopCar';
import emptyCar from "../../assets/emptyCart.svg"
import { json, useNavigate } from 'react-router-dom';

type ProductsPurchases = {
  id: string
  name: string
  amount: string
  price: string

}
interface ProductsInformationProps {
  totalPrice: string
  paymentMethod: 'debit' | 'credit' | 'money'
  products: ProductsPurchases[]
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

export function Checkout() {
  const { products, handleRemoveProductInShopCar, loadProducts , setProducts } = useShopCar()
  const navigate = useNavigate();


  const id = String(new Date().getSeconds())

  const clientAddressForm = useForm<PurchaseInformationProps>({
    defaultValues: {
      address: {
        id: id,
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        createdAt: new Date()
      }
    }
  })


  const totalPriceProducts = products.reduce((total, price) => total + Number(price.amount * price.price), 0)
  const currentPrice = Number((totalPriceProducts) / 100)

  let frete = totalPriceProducts > 5000 ? 0 : totalPriceProducts > 3000 ? 5 : 10
  const freteBrl = frete.toLocaleString('pt-br', { minimumFractionDigits: 2 })

  const totalPrice = Number(currentPrice + frete)
  const totalPriceBrl = totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })

  const { handleSubmit, reset, formState: { errors } } = clientAddressForm

  const isError = Object.entries(errors);

  function handleSubmitForm(data: PurchaseInformationProps) {
    alert('ok')

    localStorage.setItem('@ClientAddressCoffee', JSON.stringify(data))
    navigate('/success')
    setProducts([])
    reset()
  }
  let test

  useEffect(() => {
    const loadPrice = () => {
      test = products.reduce((total, price) => total + Number(price.amount * price.price), 0)

    }
    loadPrice()

  }, [loadProducts])
  return (
    <div className="flex flex-col items-center w-full gap-8 md:flex-row">
      <section>
        <h2 className="text-lg font-bold mb-4">Complete seu pedido</h2>
        <form action=""
          className="flex flex-col items-center gap-3 w-full max-w-[640px]"
        >
          <FormProvider  {...clientAddressForm}>
            <PurchaseForm />
            <PaymentMethod />
          </FormProvider>

        </form>
      </section>
      <section className='w-full max-w-md'>
        <h2 className="text-lg font-bold mb-4">Cafés selecionados</h2>

        {
        products.length > 0 ?
          <div className='bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md flex flex-col items-center gap-6 p-10 max-w-md'>
            {products && products.map(product => (
              <TabCard
                key={String(product.id)}
                RemoveProduct={() => handleRemoveProductInShopCar(product)}
                data={product}

              />
            ))}




            <div className='flex items-center flex-col gap-3 w-full'>
              <div className='flex items-center w-full justify-between text-base-text'>
                <span className='text-sm'>Total de Itens</span>
                <span className='text-md'>R$ {currentPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className='flex items-center w-full justify-between'>
                <span className='text-sm'>Entrega</span>{test}
                <span className='text-md'>{frete === 0 ? "Frete Gratis" : ` R$ ${freteBrl}`}</span>
              </div>
              <div className='flex items-center w-full justify-between text-base-title text-xl'>
                <strong className=''>Total</strong>
                <strong className=''

                >R$ {totalPriceBrl}</strong>
              </div>
            </div>

            <button className='w-full p-3 uppercase flex items-center justify-center bg-yellow-normal text-wite text-sm font-bold rounded-md hover:bg-yellow-dark hover:animate-bounce 
           disabled:opacity-60 disabled:bg-yellow-dark disabled:hover:animate-none disabled:cursor-not-allowed'
              type='submit'
              onClick={handleSubmit(handleSubmitForm)}
              disabled={isError.length > 0}
            >confirmar pedido
            </button>
          </div> :
          <div className='bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md flex flex-col items-center p-3'>
            <strong>Seu carrinho está vazio</strong>
              <img  className='h-[342px] w-[400px]'
               src={emptyCar} alt="seu carrinho está vazio." />
          </div>
        }
      </section>
    </div>
  )
}
