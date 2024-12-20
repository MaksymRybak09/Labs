import { useAudio } from "../../hooks/useAudio"
import { MyAudioProps } from "../../types/MyAudio/MyAudioTypes";
import classes from './myAudio.module.sass';

function MyAudio(props: MyAudioProps) {
   const {
      isPlaying,
      volume,
      play,
      pause,
      rewind,
      changeVolume,
   } = useAudio(props.url);

   return (
      <div className={classes.audioPlayer}>
         <button onClick={isPlaying ? pause : play} className={classes.audioButton}>
            {isPlaying ? 'Pause' : 'Play'}
         </button>
         <button onClick={() => rewind(0)} className={classes.audioButton}>
            Replay
         </button>
         <label>{Math.round(volume * 100)}%</label>
         <input 
            type="range" 
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={(e) => changeVolume(Number(e.target.value))}
            className={classes.audioSlider}
         />
      </div>
   )
}

export default MyAudio
