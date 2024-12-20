import { MenuLink } from "../../../shared/MenuLink"
import { menuConfig } from "../config/MenuConfig"

function Menu() {
  return (
    <div>
      {menuConfig.map(menuItem => (
        <MenuLink 
          key={menuItem.id}
          label={menuItem.title}
          to={menuItem.path}
        />
      ))}
    </div>
  )
}

export default Menu
