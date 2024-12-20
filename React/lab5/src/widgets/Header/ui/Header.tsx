import { Menu } from "../../../entities/Menu"
import classes from './Header.module.sass'

function Header() {
  return (
    <div className={classes.header}>
      <Menu />  
    </div>
  )
}

export default Header
