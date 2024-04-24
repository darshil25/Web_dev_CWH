'use client'

import Image from "next/image";
import CBbutton from "./reusable/CB_button";
import GBbutton from "./reusable/GB_button";
import StyledGif from "./reusable/styled_gif";

export default function Home() {

  const handleClick = () =>{
    console.log('hello');
  }

  return (
    <div>
      <div className="flex flex-col gap-5 justify-center text-white items-center h-[44vh]">
        <div className="font-bold text-5xl flex justify-center items-center gap-2">
          Support Social Media Creators
          <span>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" className="bg-slate-400 rounded-full p-2 text-black" width={88} type="module"></script><dotlottie-player src="https://lottie.host/06d81826-7f55-4ff4-b286-73ff248295b2/XfmeYMYG1N.json" background="transparent" speed="1" style={{ width: '88px', height: '88px' }} direction="1" playMode="normal" loop autoplay></dotlottie-player>
          </span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi est ratione culpa suscipit odit nam beatae non quidem esse.</p>

        {/* support now  and Know more button */}
        <div>
          <CBbutton text={'Start here'} func={handleClick}/>
          <GBbutton text={'Know More'}  func={handleClick}/>
        </div>
      </div>

      {/* seperator line */}
      <div className="bg-white h-1 opacity-10 ">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 ">
        <h2 className="mb-14 text-center font-bold text-3xl  ">Your Fans can support you</h2>

        <div className="flex gap-5 justify-around">

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <StyledGif link={"https://lottie.host/1d0e0395-979d-4d1e-9f14-20366d7fa1a0/mJLBvywNIe.json"} />
            <p className="font-bold">Fund Yourself</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <StyledGif link={"https://lottie.host/6e7e44db-d15f-4926-95fa-4138bfb4562b/rrWexEO5OU.json"} />
            <p className="font-bold">Fans want to help you</p>
            <p>Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
            <StyledGif link={"https://lottie.host/9551b5d4-d5d7-488d-9e2a-00d6ecdc8642/0GDQHeLqNJ.json"} />
            <p className="font-bold">Fans want to help you</p>
            <p>Your fans are available for you to help you</p>
          </div>

        </div>
      </div>

      {/* seperator line */}
      <div className="bg-white h-1 opacity-10 ">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col justify-center items-center">
        <h2 className="mb-14 text-center font-bold text-3xl  ">Your Fans can support you</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6WUUzOKR88E?si=dj4Azb42RTWfhC57&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>

    </div>
  );
}
