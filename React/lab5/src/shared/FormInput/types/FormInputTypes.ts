import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type FormInputProps = {
  label: string,
  id: string,
  type?: string,
  register: UseFormRegisterReturn,
  errors?: FieldError,
};