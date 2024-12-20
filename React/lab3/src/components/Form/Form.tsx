import { useForm } from "react-hook-form";
import { FormProps, FormValues } from "../../types/Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./FormSchema";
import FormField from "../FormField/FormField";
import FormSelect from "../FormSelect/FormSelect";
import TransferAmountCounter from "../SumCounter/TransferAmountCounter";
import styles from './Form.module.sass';

const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      edrpou: "",
      name: "",
      iban: "",
      isBudgetChecked: false,
      category: "",
      paymentPurpose: "",
      sender: "",
      phone: "",
      transferAmount: 10,
    },
  });

  const budgetOptions = [
    { value: "101 Сплата податків і зборів" },
    { value: "109 Полата податкового векселя" },
    { value: "121 Полата адміністративного штрафу" },
  ];

  const otherOptions = [
    { value: "Інші платежі" },
    { value: "Комунальні послуги" },
    { value: "Інтернет / Телебачення" },
    { value: "Платежі до бюджету" },
  ];

  const countCommission = (value: number) => {
    const commissionRate = value < 1000 ? 0.02 : 0.025;
    const commission = value * commissionRate + (value < 1000 ? 4 : 0);
    return {
      commission,
      sumWithCommission: value + commission,
    };
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(props.onSubmit)}>
      <h2>Одержувач</h2>
      {(["edrpou", "name", "iban"] as const).map((field) => (
        <FormField
          key={field}
          id={field}
          type="text"
          label={`Поле ${field}:`}
          placeholder={`Введіть ${field}`}
          register={{ ...register(field) }}
          error={errors[field]}
        />
      ))}

      <h2>Категорія платежу</h2>
      <FormSelect 
        control={control} 
        budgetOptions={budgetOptions}
        otherOptions={otherOptions}
        error={errors.paymentPurpose}
      />

      <h2>Відправник</h2>
      {(["sender", "phone"] as const).map((field) => (
        <FormField
          key={field}
          id={field}
          type="text"
          label={`ПІБ ${field}:`}
          register={{ ...register(field) }}
          error={errors[field]}
        />
      ))}
      
      <TransferAmountCounter 
        control={control}
        error={errors.transferAmount}
        countCommission={countCommission}
      />

      <button type="submit" className={styles.button}>Сплатити</button>
    </form>
  );
}

export default Form;
