import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Free birthday music URL - you can replace with your own
  const musicUrl = "https://cdn.pixabay.com/audio/2022/03/10/audio_4a26f03c2a.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log("Audio play failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={musicUrl} type="audio/mpeg" />
      </audio>
      
      <Button
        onClick={toggleMusic}
        size="lg"
        className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 bg-gradient-to-r from-primary to-secondary animate-glow"
        aria-label={isPlaying ? "Выключить музыку" : "Включить музыку"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </Button>
    </>
  );
};

export default BackgroundMusic;
