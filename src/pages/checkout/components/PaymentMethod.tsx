import { CreditCard, CurrencyDollar } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export function PaymentMethod() {
  const { register,formState: { errors } } = useFormContext()
  const isError = Object.entries(errors)

  
  return (
    <div className="w-full p-10 bg-base-card rounded-md flex flex-col gap-8 ">
      <div className="flex flex-col items-start gap-3">
        <span className="text-base-subTitle flex items-center gap-2">
          <CurrencyDollar size={22} color="#8047F8" />
          Pagamento</span>
        <span className="text-base-text text-sm ml-[30px]">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </span>
      </div>

      <div className="flex items-center flex-col gap-3 text-2xs w-full sm:flex-row ">

        <label className="flex items-center gap-3 bg-base-button py-4 px-2 uppercase rounded-md cursor-pointer focus-within:border-[1px]  focus-within:bg-purple-light focus-within:border-purple-normal w-full hover:animate-bounce "
          htmlFor="creditCard">
          <CreditCard size={16} color="#8047F8" /> Cartão de crédito
          <input className="w-[1px] h-[1px] border-0 -m-[1px] opacity-0 absolute"
            id="creditCard"
            {...register("products.paymentMethod",
              { required: true })}
            type="radio"
            value="credit" />
        </label>
        <label className="flex items-center gap-3 bg-base-button py-4 px-2 uppercase rounded-md cursor-pointer focus-within:border-[1px]  focus-within:bg-purple-light focus-within:border-purple-normal w-full hover:animate-bounce"
          htmlFor="debitCard">
          <CreditCard size={16} color="#8047F8" /> Cartão de débito

          <input id="debitCard" className="w-[1px] h-[1px] border-0 -m-[1px] opacity-0 absolute"
            {...register("products.paymentMethod",
              { required: true })}
            type="radio"
            value="debit" />
        </label>
        <label className="flex items-center gap-3 bg-base-button py-4 px-2 uppercase rounded-md cursor-pointer focus-within:border-[1px]  focus-within:bg-purple-light focus-within:border-purple-normal w-full hover:animate-bounce "
          htmlFor="money">
          <CreditCard size={16} color="#8047F8" /> Dinheiro
          <input id="money" className="w-[1px] h-[1px] border-0 -m-[1px] opacity-0 absolute"
            {...register("products.paymentMethod",
              { required: true })}
            type="radio"
            value="money" />
        </label>
      </div>
      
      {isError.length > 0 ?
        <p className="text-[#ff0000] text-2xs font-bold">Por favor, preencha Todos os Campos</p> : ''}
    </div>
  )
}