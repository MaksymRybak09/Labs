import { Control, FieldError } from "react-hook-form";
import { FormValues } from "../Form/Form";

export type BudgetOption = {
  value: string,
}

export type FormSelectProps = {
  control: Control<FormValues>;
  budgetOptions: BudgetOption[],
  otherOptions: BudgetOption[],
  error?: FieldError,
};