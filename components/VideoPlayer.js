// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ videoLink }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        width="800"
        height="450"
        src={videoLink}
        frameBorder="0"
        allowFullScreen
        title="Movie Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
