import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";

interface InputProps {
  placeholder: string
  type: HTMLInputTypeAttribute
  value: string
  className: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Inputs = (props: InputProps) => {
  return (
    <Input
      type={props.type}
      value={props.value}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}