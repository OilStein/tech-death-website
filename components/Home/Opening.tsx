import React from "react";
import Skull from "../../public/assets/svg/skull.svg";
import Arrow from '../../public/assets/svg/arrow.svg';

const Opening: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/video/Smoke.mp4" type="video/mp4" />
        <source src="/assets/video/SmokeW.webm" type="video/webm" />
      </video>

      <div className="flex-grow-0 z-10 pt-10 transition-opacity duration-1000">
        <Skull fill="yellow" height={100} />
      </div>

      <div className="p-12 z-10 font-bold drop-shadow-[0_6px_3px_rgba(240,255,0,0.6)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-5xl xl:text-7xl texw">Death</h1>
        <h2 className="mm-2 text-2xl xl:text-3xl tracking-tight">
          <span>You die,</span>
          <span> right?</span>
        </h2>
      </div>

      <div className="flex-grow-0 z-10 pb-10 md:pb-5 transition-all">
        <Arrow fill="yellow" width={40} />
      </div>
    </div>
  );
};

export default Opening;
