export type FormValues = {
  edrpou: string;
  name: string;
  iban: string;
  isBudgetChecked: boolean;
  category: string;
  paymentPurpose: string;
  sender: string;
  phone: string;
  transferAmount: number;
};

export type FormProps = {
  onSubmit: (formData: FormValues) => void,
}