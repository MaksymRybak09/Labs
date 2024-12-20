import { BrowserRouter } from 'react-router-dom'
import classes from './App.module.sass'
import TabsGroup from './components/Tabs/TabsGroup'

function App() {
   return (
      <div className={classes.app}>
         <BrowserRouter>
            <TabsGroup />
         </BrowserRouter>
      </div>
  )
}

export default App
