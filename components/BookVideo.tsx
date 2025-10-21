"use client";
import React from "react";

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <video 
      src={videoUrl} 
      controls 
      className="w-full rounded-xl"
    />
  );
};

export default BookVideo;
