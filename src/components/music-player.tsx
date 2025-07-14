
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Music, VolumeX } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio('/retro-bg.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;

      const playOnFirstInteraction = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.log("Audio autoplay prevented by browser.");
          });
        }
        window.removeEventListener('click', playOnFirstInteraction);
        window.removeEventListener('keydown', playOnFirstInteraction);
      };

      window.addEventListener('click', playOnFirstInteraction);
      window.addEventListener('keydown', playOnFirstInteraction);

      return () => {
        window.removeEventListener('click', playOnFirstInteraction);
        window.removeEventListener('keydown', playOnFirstInteraction);
        if (audioRef.current) {
          audioRef.current.pause();
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMusic}
              className="rounded-full bg-background/50 backdrop-blur-sm"
              aria-label={isPlaying ? 'Mute music' : 'Unmute music'}
            >
              {isPlaying ? <Music className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{isPlaying ? 'Mute Music' : 'Play Music'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
