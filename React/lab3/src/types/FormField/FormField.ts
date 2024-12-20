import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type FormFieldProps = {
  label: string,
  id: string,
  register: UseFormRegisterReturn,
  error?: FieldError,
  placeholder?: string,
  type?: string,
}