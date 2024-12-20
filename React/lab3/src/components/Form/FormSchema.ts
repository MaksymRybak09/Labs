import * as yup from 'yup';

export const formSchema = yup.object({
  edrpou: yup
    .string()
    .matches(/^\d{10}$/, "ЄДРПОУ або РНОКПП повинні містити тільки 10 цифр")
    .required("ЄДРПОУ або РНОКПП обов'язкові"),
  name: yup.string().required("Назва одержувача є обов'язковою"),
  iban: yup
    .string()
    .matches(/^UA\d{27}$/, "Невірний формат IBAN")
    .required("Рахунок IBAN є обов'язковим"),
  isBudgetChecked: yup.boolean().required(),
  category: yup.string().required(),
  paymentPurpose: yup
    .string()
    .when('isBudgetChecked', {
      is: true,
      then: (schema) => 
        schema
          .min(6, "Призначення платежу повинно містити щонайменше 6 символів")
          .matches(/^\d{10}$/, "Призначення платежу повинно містити 'РНОКПП'"),
      otherwise: (schema) => 
        schema
          .min(6, "Призначення платежу повинно містити щонайменше 6 символів")
    })
    .required("Призначення платежу обов'язкове"),
    sender: yup.string().required("Поле відправник є обов'язковим"),
    phone: yup
      .string()
      .matches(/^(?:\+380|0)\d{9}$/, "Невірний номер телефону")
      .required("Номер телефону є обов'язковим"),
    transferAmount: yup
      .number()
      .min(10, "Сума повинна бути більше 10 грн.")
      .max(29000, "Сума повинна бути менша 29 000 грн.")
      .required("Вкажіть суму переказу"),
});