import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Play,
  Pause,
  RotateCcw,
  Waves,
  CloudRain,
  Mountain,
  Trees,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Slider } from "./ui/slider";

// Utility function to format seconds into MM:SS format
const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Pad with 0 for single digits
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${paddedMinutes}:${paddedSeconds}`;
};

type WhiteNoiseType = "waves" | "rain" | "mountains" | "forest";

interface WhiteNoiseOption {
  id: WhiteNoiseType;
  label: string;
  icon: React.ElementType;
  // In a real app, these would be actual audio file URLs
  audioUrl: string;
}

const whiteNoiseOptions: WhiteNoiseOption[] = [
  {
    id: "waves",
    label: "Beach Waves",
    icon: Waves,
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2393/2393-preview.mp3", // Ocean waves
  },
  {
    id: "rain",
    label: "Rain",
    icon: CloudRain,
    audioUrl: "https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3", // Rain sound
  },
  {
    id: "mountains",
    label: "Mountains",
    icon: Mountain,
    audioUrl: "https://cdn.freesound.org/previews/829/829001_18194940-hq.mp3", // Mountain ambience from Freesound (Sound ID 829001)
  },
  {
    id: "forest",
    label: "Forest",
    icon: Trees,
    audioUrl: "https://cdn.freesound.org/previews/347/347753_5121236-hq.mp3", // Forest ambience from klankbeeld (Sound ID 347753)
  },
];

interface TimerProps {
  initialTime?: number;
  selectedNoise: WhiteNoiseType | null;
  onNoiseChange: (noise: WhiteNoiseType | null) => void;
  onDurationChange?: (duration: number) => void;
}

export const Timer = ({
  initialTime = 25 * 60,
  selectedNoise,
  onNoiseChange,
  onDurationChange,
}: TimerProps) => {
  // state for the countdown time in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  // state for whether the timer is currently running
  const [isRunning, setIsRunning] = useState(false);
  // state for whether audio is muted
  const [isMuted, setIsMuted] = useState(false);
  // state for volume (0-100)
  const [volume, setVolume] = useState(30);

  // ref for audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // useEffect Hook for handling the side effect of the timer
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      // Start the interval
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Time is up!
      setIsRunning(false);
      // You could add a 'task complete' notification here
      console.log("Time's up! Take a break!");
    }

    // Cleanup function: this runs when the component unmounts or before
    // the effect re-runs (i.e., when isRunning or timeLeft changes)
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, timeLeft]); // Dependencies: The effect re-runs when these change

  // useEffect Hook for handling white noise audio playback
  useEffect(() => {
    if (!audioRef.current) {
      // Create audio element
      audioRef.current = new Audio();
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;
    // Update volume based on state (convert 0-100 to 0-1)
    audio.volume = isMuted ? 0 : volume / 100;
    
    const selectedOption = selectedNoise
      ? whiteNoiseOptions.find(
          (opt) => opt.id === selectedNoise,
        )
      : null;

    if (selectedOption && audio.src !== selectedOption.audioUrl) {
      audio.src = selectedOption.audioUrl;
      // Play audio immediately when a sound is selected and not muted
      if (!isMuted) {
        audio.play().catch((error) => {
          console.log("Audio playback failed:", error);
          // Browser may block autoplay - this is expected behavior
        });
      }
    } else if (!selectedNoise) {
      // Stop audio when no sound is selected
      audio.pause();
      audio.currentTime = 0;
    } else if (selectedNoise && !isMuted) {
      // Resume playing if sound is selected and not muted
      audio.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    } else if (isMuted) {
      // Pause when muted
      audio.pause();
    }

    // Cleanup on unmount
    return () => {
      audio.pause();
    };
  }, [selectedNoise, isMuted, volume]);

  const handleStartPause = () => {
    // If starting the timer for the first time and no sound is selected, auto-select rain
    if (!isRunning && selectedNoise === null) {
      onNoiseChange("rain");
    }
    // Toggle the running state
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    // Reset to initial time and stop the timer
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const handleIncreaseDuration = () => {
    if (!isRunning) {
      const newDuration = initialTime + 5 * 60; // Add 5 minutes
      if (newDuration <= 90 * 60) {
        // Max 90 minutes
        onDurationChange?.(newDuration);
        setTimeLeft(newDuration);
      }
    }
  };

  const handleDecreaseDuration = () => {
    if (!isRunning) {
      const newDuration = initialTime - 5 * 60; // Subtract 5 minutes
      if (newDuration >= 5 * 60) {
        // Min 5 minutes
        onDurationChange?.(newDuration);
        setTimeLeft(newDuration);
      }
    }
  };

  const handleNoiseChange = (noiseType: WhiteNoiseType) => {
    // Toggle: if clicking the same sound, deselect it
    onNoiseChange(
      selectedNoise === noiseType ? null : noiseType,
    );
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  const progress =
    ((initialTime - timeLeft) / initialTime) * 100;

  return (
    <div className="w-full max-w-lg">
      <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-border/10">
        {/* Timer display */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4">
            <div
              className="text-7xl tabular-nums tracking-wider"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              {formatTime(timeLeft)}
            </div>
            <div className="flex flex-col gap-1">
              <Button
                onClick={handleIncreaseDuration}
                variant="ghost"
                size="icon"
                className="h-6 w-6 opacity-30 hover:opacity-60 transition-opacity"
                disabled={isRunning || initialTime >= 90 * 60}
              >
                <ChevronUp className="h-4 w-4" />
              </Button>
              <Button
                onClick={handleDecreaseDuration}
                variant="ghost"
                size="icon"
                className="h-6 w-6 opacity-30 hover:opacity-60 transition-opacity"
                disabled={isRunning || initialTime <= 5 * 60}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            {timeLeft === 0 ? (
              <span className="text-primary">
                Time's up! Take a break!
              </span>
            ) : isRunning ? (
              <span>Focus session in progress</span>
            ) : (
              <span>Ready when you are</span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex gap-3 mb-6">
          <Button
            onClick={handleStartPause}
            size="default"
            className="flex-1"
          >
            {isRunning ? (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            size="default"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* White noise selector */}
        <div className="flex flex-col gap-3 pt-6 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Ambient Sounds
            </span>
            <div className="flex items-center gap-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48" align="end">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Volume</span>
                      <span className="text-sm text-muted-foreground">
                        {volume}%
                      </span>
                    </div>
                    <Slider
                      value={[volume]}
                      onValueChange={handleVolumeChange}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                onClick={toggleMute}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {whiteNoiseOptions.map((option) => {
              const Icon = option.icon;
              const isSelected = selectedNoise === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleNoiseChange(option.id)}
                  className={`
                    flex flex-col items-center gap-1.5 h-auto py-3 px-2 rounded-md
                    transition-all duration-300 text-sm
                    ${
                      isSelected
                        ? "backdrop-blur-md border shadow-lg"
                        : "bg-transparent border border-border/50 hover:border-border hover:bg-muted/20"
                    }
                  `}
                  style={
                    isSelected
                      ? {
                          background:
                            "linear-gradient(to bottom right, rgba(103, 232, 249, 0.12), rgba(59, 130, 246, 0.08), rgba(14, 165, 233, 0.06))",
                          borderColor:
                            "rgba(56, 189, 248, 0.25)",
                          boxShadow:
                            "0 4px 20px rgba(56, 189, 248, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }
                      : undefined
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-xs">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};