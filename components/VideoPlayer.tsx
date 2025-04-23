"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { Play } from "lucide-react";
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
    if (videoRef.current) {
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

  const handlePlay = () => {
    globalVideoRefs.forEach((ref) => {
      if (ref !== videoRef.current) {
        ref.pause();
      }
    });
    videoRef.current?.play();
    setPlaying(true);
  };

  const handleEnded = () => {
    setPlaying(false);
  };

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
            className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <span className="relative flex size-20">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>

              <button
                title="play-button"
                aria-label="play-button"
                onClick={handlePlay}
                className="inline-flex items-center justify-center size-20 rounded-full bg-sky-500  text-white transition">
                <Play size={32} />
              </button>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!playing && poster && (
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
      )}

      {overlayText && !playing && <motion.div>{overlayText}</motion.div>}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`aspect-video ${playing ? "block" : "hidden"}`}
        controls
        preload="metadata"
        onEnded={handleEnded}
      />
    </div>
  );
};

export default VideoPlayer;
