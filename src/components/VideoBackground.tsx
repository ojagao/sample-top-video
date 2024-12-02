import React from 'react';
import TopVideoPath from '@/assets/videos/sample-video.mp4';
import '@/assets/css/VideoBackground.css';

const VideoBackground: React.FC = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted playsInline>
        <source src={TopVideoPath} id="TopVideoPath" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome to Sample Page!</h1>
      </div>
    </div>
  );
};

export default VideoBackground;