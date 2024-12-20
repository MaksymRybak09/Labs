import { ButtonProps } from "../types/ButtonTypes"
import classes from './Button.module.sass';

function Button(props: ButtonProps) {
  return (
    <button className={classes.button}
      type={props.type ?? "button"}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

export default Button
