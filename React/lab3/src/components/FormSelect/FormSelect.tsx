import { Controller, useWatch } from "react-hook-form";
import { FormSelectProps } from "../../types/FormSelect/FormSelect";
import styles from './FormSelect.module.sass';

function FormSelect(props: FormSelectProps) {
  const isBudgetChecked = useWatch({
    control: props.control,
    name: 'isBudgetChecked',
  });

  const options = isBudgetChecked ? props.budgetOptions : props.otherOptions;
  const textareaPlaceholder = isBudgetChecked
    ? "Призначення платежу (повинно містити 'РНОКПП')"
    : "Введіть призначення платежу";

  return (
    <div className={styles.formSelect}>
      <Controller
        name="isBudgetChecked"
        control={props.control}
        render={({ field }) => (
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={field.value}
              onChange={(e) => {
                field.onChange(e.target.checked);
              }}
            />
            <label className={styles.label}>Бюджетний платіж</label>
          </div>
        )}
      />

      <Controller
        name="category"
        control={props.control}
        render={({ field }) => (
          <select className={styles.select} {...field} disabled={!options.length}>
            <option value="" disabled>
              Оберіть категорію
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        )}
      />

      <Controller
        name="paymentPurpose"
        control={props.control}
        render={({ field }) => (
          <div>
            <label htmlFor="paymentPurpose" className={styles.label}>Призначення платежу</label>
            <textarea 
              id="paymentPurpose"
              className={styles.textarea}
              placeholder={textareaPlaceholder}
              {...field}
            />
            {props.error && <p className={styles.error}>{props.error.message}</p>}
          </div>
        )}
      />
    </div>
  );
}

export default FormSelect;
