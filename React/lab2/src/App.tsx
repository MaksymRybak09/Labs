import classes from './App.module.sass'
import MyAudio from './components/MyAudio/MyAudio'

function App() {
   return (
      <div className={classes.app}>
         <MyAudio url='audio/Metamorphosis.mp3' />
         <MyAudio url='audio/Psycho Cruise.mp3' />
      </div>
  )
}

export default App
