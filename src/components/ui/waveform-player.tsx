import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Play, Pause } from "lucide-react"

interface WaveformPlayerProps {
  audioSrc: string
  className?: string
}

export default function WaveformPlayer({
  audioSrc,
  className,
}: WaveformPlayerProps) {
  const [audio] = React.useState(new Audio(audioSrc))
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)

  React.useEffect(() => {
    const handleTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100)
      setCurrentTime(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    audio.addEventListener("loadedmetadata", handleLoadedMetadata)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate)
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata)
      audio.removeEventListener("ended", handleEnded)
      audio.pause()
    }
  }, [audio])

  const togglePlay = () => {
    if (isPlaying) audio.pause()
    else audio.play()
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const seekTime = (clickX / rect.width) * audio.duration
    audio.currentTime = seekTime
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={cn("flex flex-col items-center gap-4 w-full", className)}>
      {/* Waveform */}
      <div
        className="relative w-full h-20 rounded-xl cursor-pointer overflow-hidden bg-gradient-to-r from-orange-100/50 to-green-100/50 p-3"
        onClick={handleSeek}
      >
        {/* Background wave bars */}
        <div className="absolute inset-0 flex justify-between items-center px-2">
          {Array.from({ length: 60 }).map((_, idx) => {
            const barHeight = 10 + Math.random() * 50
            const isActive = (idx / 60) * 100 < progress

            return (
              <div
                key={idx}
                className={cn(
                  "rounded-full transition-all duration-300",
                  isActive
                    ? "bg-gradient-to-t from-orange-500 via-orange-400 to-green-500"
                    : "bg-slate-300/60"
                )}
                style={{
                  width: 3,
                  height: `${barHeight}px`,
                  opacity: isActive ? 0.9 : 0.5,
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Time display */}
      <div className="flex justify-between w-full text-sm text-slate-600 font-medium">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Play/Pause Button */}
      <Button
        onClick={togglePlay}
        className="w-32 bg-brand-green text-white hover:bg-green-700"
        size="lg"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" />
            Pause
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Play
          </>
        )}
      </Button>
    </div>
  )
}
