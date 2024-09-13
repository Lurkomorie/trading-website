"use client";

import { useRef } from "react";

export const VideoLogo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.loop = false;
    }
  };

  return (
    <video
      ref={videoRef}
      className="w-[250px] h-[100px]"
      src="/assets/logo.mp4"
      muted
      autoPlay
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
