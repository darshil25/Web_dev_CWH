import React from 'react'

const StyledGif = (props) => {
  return (
    <div>
      <div className="w-[88px] h-[88px] bg-slate-400 rounded-full text-black">
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script><dotlottie-player src={props.link} background="transparent" speed="1" direction="1" playMode="normal" loop autoplay></dotlottie-player>
      </div>
    </div>
  )
}

export default StyledGif