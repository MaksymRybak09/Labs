import { FormFieldProps } from "../../types/FormField/FormField";
import styles from './FormField.module.sass';

function FormField(props: FormFieldProps) {
  return (
    <div className={styles.formField}>
      <label htmlFor={props.id} className={styles.label}>{props.label}</label>
      <input 
        id={props.id}
        type={props.type ?? 'text'} 
        placeholder={props.placeholder ?? ''}
        className={styles.input}
        {...props.register}
      />
      {props.error && <p className={styles.error}>{props.error.message}</p>}
    </div>
  );
}

export default FormField;
