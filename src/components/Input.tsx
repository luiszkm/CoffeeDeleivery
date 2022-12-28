import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  primary?: boolean;
  secondary?: boolean;
}

export function Input({ id, primary = false, secondary = false, ...rest }: InputProps) {
  return (
    <label htmlFor={id} className={secondary ? "max-w-[60px]" : !primary ? "w-full" : "min-w-[196px] max-w-[196px]"}>
      <input className='bg-base-input p-3 w-full  border-base-button border-[1px] rounded outline-none text-base-text text-sm focus:border-yellow-dark placeholder:text-base-label'
        type="text" {...rest} id={id} />
    </label>
  )
}
