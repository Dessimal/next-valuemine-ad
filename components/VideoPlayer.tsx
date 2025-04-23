"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef, useCallback } from "react";
import { VolumeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  width?: string | number;
  className?: string;
  overlayText?: string;
}

let globalVideoRefs: HTMLVideoElement[] = [];

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  width = "100%",
  className = "",
  overlayText,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current && !globalVideoRefs.includes(videoRef.current)) {
      globalVideoRefs.push(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        globalVideoRefs = globalVideoRefs.filter(
          (ref) => ref !== videoRef.current
        );
      }
    };
  }, []);

  const handlePlay = useCallback(() => {
    globalVideoRefs.forEach((ref) => {
      if (ref !== videoRef.current) {
        ref.pause();
      }
    });
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setPlaying(true);
    }
  }, []);

  const handleEnded = () => {
    setPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  console.log(playing);

  return (
    <div
      className={cn(
        "relative max-w-[400px] rounded-xl aspect-video overflow-hidden group",
        className
      )}
      style={{ width }}>
      <AnimatePresence>
        {!playing && (
          <motion.div
            key="overlay"
            className="absolute inset-0 z-10 bg-black/985 flex items-center justify-center border-4 border-slate-500 p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <span className="relative flex size-20">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75 pointer-events-none"></span>

              <button
                title="play-button"
                aria-label="play-button"
                onClick={handlePlay}
                className="inline-flex items-center justify-center size-20 rounded-full bg-sky-500 text-white transition">
                <VolumeOff size={32} />
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {!playing && poster && (
        <motion.img
          src={poster}
          alt="Video poster"
          className="w-full
                
            h-auto
            object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      )} */}

      {overlayText && !playing && <motion.div>{overlayText}</motion.div>}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={cn("aspect-video object-cover rounded-xl overflow-hidden")}
        controls
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        onEnded={handleEnded}
      />
    </div>
  );
};

export default VideoPlayer;
