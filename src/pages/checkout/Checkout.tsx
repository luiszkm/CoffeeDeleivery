import { useState } from 'react'
import { TabCard } from '../../components/TabCard'
import { PurchaseForm } from './components/PurchaseForm'
import { useForm, FormProvider } from 'react-hook-form'
import { PaymentMethod } from './components/PaymentMethod';

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
  paymentMethod: 'debit' | 'credit' | 'money'

}

export function Checkout() {
  const id = String(new Date().getSeconds())

  const clientAddressForm = useForm<ClientAddress>({
    defaultValues: {
      id: id,
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      paymentMethod: 'money',
      createdAt: new Date()
    }
  })

  const { handleSubmit, reset } = clientAddressForm


  const [amountProduct, setAmountProduct] = useState(1)
  function handleAmountProduct(amount: number) {
    amountProduct < 1 ? setAmountProduct(1) : setAmountProduct(prevState => prevState + amount)
  }

  function handleSubmitForm(data: any) {
    alert(data)
    console.log(data);
    
    reset()
  }
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
      <section>
        <h2 className="text-lg font-bold mb-4">Cafés selecionados</h2>

        <div className='bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-md flex flex-col items-center gap-6 p-10 max-w-md'>
          <TabCard
            amountProduct={amountProduct}
            changeAmountProduct={handleAmountProduct} />

          <TabCard
            amountProduct={amountProduct}
            changeAmountProduct={handleAmountProduct} />

          <div className='flex items-center flex-col gap-3 w-full'>
            <div className='flex items-center w-full justify-between text-base-text'>
              <span className='text-sm'>Total de Itens</span>
              <span className='text-md'>R$ 33,33</span>
            </div>
            <div className='flex items-center w-full justify-between'>
              <span className='text-sm'>Entrega</span>
              <span className='text-md'>R$ 3,00</span>
            </div>
            <div className='flex items-center w-full justify-between text-base-title text-xl'>
              <strong className=''>Total</strong>
              <strong className=''>R$ 36,33</strong>
            </div>
          </div>

          <button className='w-full p-3 uppercase flex items-center justify-center bg-yellow-normal text-wite text-sm font-bold rounded-md hover:bg-yellow-dark hover:animate-bounce'
            type='submit'
            onClick={ handleSubmit(handleSubmitForm)}
          >confirmar pedido
          </button>
        </div>
      </section>
    </div>
  )
}
