import { InputHTMLAttributes, useEffect } from 'react'
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  primary?: boolean;
  secondary?: boolean;
  required?: boolean;
}

export function Input({ id, required = true, primary = false, secondary = false, ...rest }: InputProps) {
  const { register } = useFormContext()


  return (
    <label htmlFor={id} className={secondary ? "max-w-[60px]" : !primary ? "w-full" : "min-w-[196px] max-w-[196px]"}>
      <input className='bg-base-input p-3 w-full  border-base-button border-[1px] rounded outline-none text-base-text text-sm focus:border-yellow-dark placeholder:text-base-label'
        type="text"
        id={id}
        {...rest}
        {...register(`address.${id}`, { required: required })}
         />
          
    </label>
  )
}
