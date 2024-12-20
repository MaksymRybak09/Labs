import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type FormTextAreProps = {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
};
