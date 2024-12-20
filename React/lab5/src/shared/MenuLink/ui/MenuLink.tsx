import { Link } from "react-router-dom"
import { MenuLinkProps } from "../types/MenuLinkTypes"
import classes from './MenuLink.module.sass'

function MenuLink(props: MenuLinkProps) {
  return (
    <Link to={props.to} className={classes['menu-link']}>
      {props.label}
    </Link>
  )
}

export default MenuLink
