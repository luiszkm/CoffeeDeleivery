import { CreditCard, CurrencyDollar } from "phosphor-react";
import { useFormContext } from "react-hook-form";

export function PaymentMethod() {
  const { register } = useFormContext()

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

      <div className="flex items-center flex-col gap-3 text-xs w-full sm:flex-row ">

        <label className="flex items-center gap-3 bg-base-button p-4 uppercase rounded-md cursor-pointer focus-within:border-[1px]  focus-within:bg-purple-light focus-within:border-purple-normal w-full hover:animate-bounce "
          htmlFor="creditCard">
          <CreditCard size={16} color="#8047F8" /> Cartão de crédito
          <input className="w-[1px] h-[1px] border-0 -m-[1px] opacity-0 absolute"
            id="creditCard"
            {...register("payment",
              { required: true })}
            type="radio"
            value="creditCard" />
        </label>
        <label className="flex items-center gap-3 bg-base-button p-4 uppercase rounded-md cursor-pointer focus-within:border-[1px]  focus-within:bg-purple-light focus-within:border-purple-normal w-full hover:animate-bounce"
          htmlFor="debitCard">
          <CreditCard size={16} color="#8047F8" /> Cartão de débito

          <input id="debitCard" className="w-[1px] h-[1px] border-0 -m-[1px] opacity-0 absolute"
            {...register("payment",
              { required: true })}
            type="radio"
            value="debitCard" />
        </label>
        <label className="flex items-center gap-3 bg-base-button p-4 uppercase rounded-md cursor-pointer focus-within:border-[1px]  focus-within:bg-purple-light focus-within:border-purple-normal w-full hover:animate-bounce "
          htmlFor="money">
          <CreditCard size={16} color="#8047F8" /> Dinheiro
          <input id="money" className="w-[1px] h-[1px] border-0 -m-[1px] opacity-0 absolute"
            {...register("payment",
              { required: true })}
            type="radio"
            value="money" />
        </label>
      </div>
    </div>
  )
}