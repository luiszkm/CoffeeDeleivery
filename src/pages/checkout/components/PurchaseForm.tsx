import { useFormContext } from "react-hook-form";
import { Input } from "../../../components/Input";
import { MapPinLine } from "phosphor-react";


export function PurchaseForm() {
  const { register } = useFormContext()
  return (
    <div className="flex items-start flex-col gap-4 bg-base-card rounded-sm p-10 w-full max-w-[640px]">
      <div className="flex flex-col ">
        <span className="flex items-center gap-2">
        <MapPinLine size={22} color="#C47F17" />
           Endereço de entrega
           </span>
        <span className="flex items-center gap-[30px]">
          <div></div>
          Informe o endereço onde deseja receber seu pedido
          </span>
      </div>

      <Input placeholder="CEP" id="cep" primary {...register('cep')} />
      <Input placeholder="Rua" id="street"  {...register('street')} />

      <div className="flex items-center  gap-4 w-full ">
        <Input placeholder="Número" id="number" primary {...register('number')} />
        <Input placeholder="Complemento" id="complement"  {...register('complement')} />

      </div>
      <div className="flex justify-between items-center gap-4 w-full  ">
        <Input placeholder="Bairro" id="district" primary {...register('district')} />
        <Input placeholder="Cidade" id="city"  {...register('city')} />
        <Input placeholder="UF" id="state" secondary  {...register('state')} />
      </div>
    </div>
  )

}