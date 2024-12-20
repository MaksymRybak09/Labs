import classes from './FormTextArea.module.sass';
import { FormTextAreProps } from "../types/FormTextAreaTypes";

function FormGroup(props: FormTextAreProps) {
  return (
    <div className={classes['form-group']}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        {...props.register}
        className={props.errors ? classes["input-error"] : ""}
      />
      {props.errors && <p className={classes["error-message"]}>{props.errors.message}</p>}
    </div>
  )
}

export default FormGroup
