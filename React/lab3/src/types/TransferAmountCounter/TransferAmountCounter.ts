import { Control, FieldError } from "react-hook-form";
import { FormValues } from "../Form/Form";

export type TransferAmountProps = {
  control: Control<FormValues>,
  error?: FieldError,
  countCommission: (value: number) => {
    commission: number;
    sumWithCommission: number;
  },
}