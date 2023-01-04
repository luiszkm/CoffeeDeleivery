import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successLogo from '../assets/Success.svg'



export function Success () {


  return(
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
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102a</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </section>
      <img src={successLogo} alt="" />

    </div>
  )
}