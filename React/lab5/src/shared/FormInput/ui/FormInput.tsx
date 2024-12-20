import classes from './FormInput.module.sass';
import { FormInputProps } from "../types/FormInputTypes";

function FormInput(props: FormInputProps) {
  return (
    <div className={classes['form-group']}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type ?? 'text'}
        {...props.register}
        className={props.errors ? classes["input-error"] : ""}
      />
      {props.errors && <p className={classes["error-message"]}>{props.errors.message}</p>}
    </div>
  )
}

export default FormInput
