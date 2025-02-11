"use client"

import { useRef, useState, useEffect } from "react";
import InstagramEmbed from "@/compontents/instaEmbed";

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
      <div className="flex items-center bg-black">
      <video className="mx-auto min-h-[1000px]" autoPlay muted loop id="myVideo" onClick={togglePlay} ref={videoElement}>
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
      <div className="flex items-stretch">
        <div className="ml-4 m-10">
          <InstagramEmbed/>
        </div>
      <article className="content mt-10 content-center">
        <h2 className="text-3xl font-bold tracking-wide text-justify">Mission Statement</h2>
          <p className="text-lg tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem veniam aperiam? Distinctio officia optio voluptatum omnis sapiente iste vitae iusto eligendi! Esse, inventore. Tenetur commodi suscipit dolore at magni.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, amet? Ipsam, illo vel, cupiditate corporis dolore doloremque, dolor voluptatibus exercitationem commodi tempore animi accusantium odit eum accusamus aut. Animi, amet!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ratione iure dignissimos minima eaque sapiente consequatur ad delectus impedit accusamus molestias, et deserunt maiores explicabo quam nulla molestiae obcaecati. Hic!
          </p>
      </article>
      </div>
    </div>
  );
}