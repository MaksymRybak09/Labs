import classes from './App.module.sass'
import Form from './components/Form/Form'
import { FormValues } from './types/Form/Form'

function App() {
   const onSubmit = (formData: FormValues): void => {
      console.log(formData);
   }

   return (
      <div className={classes.app}>
         <Form onSubmit={onSubmit}/>
      </div>
  )
}

export default App
