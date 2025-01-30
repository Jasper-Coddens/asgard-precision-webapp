"use client"

import { useRef, useState } from "react";

export default function Home() {

  const videoElement = useRef<HTMLVideoElement | null>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  
  const togglePlay = () => {
    const video = videoElement.current;
    if (video) {
      if (video.paused) {
        video.play();
        setShowPlayButton(false);
      } else {
        video.pause();
        setShowPlayButton(true);
      }
    }
  };
  return (
    <div>
      <div className="flex items-center">
      <video className="mx-auto" autoPlay muted loop id="myVideo" onClick={togglePlay} ref={videoElement}>
        <source src="/video/Welcome_to_Noxus.mp4" type="video/mp4"/>
      </video>
      <img 
      id="playButton" alt="play button" src="/image/next-button-svgrepo-com.svg" 
      onClick={togglePlay}
      className="opacity-60"
      style={{
        display: showPlayButton ? "block" : "none",
        position: "absolute",
        justifySelf: "anchor-center",
        cursor: "pointer",
        width: "50px",
        height: "50px",
      }}
      />
      </div>
      <div className="content">
        <h2>Heading</h2>
          <p>Lorem ipsum...</p>
      </div>
    <h1>this is a test to see how the selected font looks</h1>
      <p>Hello world</p>
      <p>Low taper fade is still absolutely massive</p>
    </div>
  );
}