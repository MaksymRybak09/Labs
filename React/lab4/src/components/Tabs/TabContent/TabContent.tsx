import { TabContentProps } from "../../../types/Tabs/TabsGroup"

function TabContent(props: TabContentProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default TabContent
