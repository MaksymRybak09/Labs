import classes from './App.module.sass'
import Field from './components/Field/Field'

function App() {
  return (
    <div className={classes.app}>
      <Field size={3} />
    </div>
  )
}

export default App
