import { useEffect, useRef, useState } from "react";

export function useAudio(url: string) {
   const [isPlaying, setIsPlaying] = useState(false);
   const [volume, setVolume] = useState(1);
   const audioElement = useRef<HTMLAudioElement | null>(null);

   useEffect(() => {
      const audio = new Audio(url);
      audioElement.current = audio;
   }, []);

   useEffect(() => {
      if (audioElement.current) {
         audioElement.current.volume = volume;
      }
   }, [volume]);

   const play = () => {
      if (audioElement.current) {
         audioElement.current.play();
         setIsPlaying(true);
      }
   }

   const pause = () => {
      if (audioElement.current) {
         audioElement.current.pause();
         setIsPlaying(false);
      }
   }

   const rewind = (time: number) => {
      if (audioElement.current) {
         audioElement.current.currentTime = time;
      }
   }

   const changeVolume = (newVulume: number) => {
      if (audioElement.current) {
         audioElement.current.volume = newVulume;
         setVolume(newVulume);
      }
   }

   return {
      isPlaying,
      volume,
      play,
      pause,
      rewind,
      changeVolume,
   };
}