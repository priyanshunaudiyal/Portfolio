import React from "react"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "@/utils/text-generate-effect"
import SimpleButton from "./ui/SimpleButton"
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.05] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 lef-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center p-6 md:p-8 lg:p-10">
          <h2 className="uppercase tracking-widest text-xs text-center text-black dark:text-white max-w-80 select-none p-2 mb-4">Priyanshu Naudiyal</h2>

            <TextGenerateEffect
              className="text-center text-[40px] text-black dark:text-white
              md:text-5xl lg:text-6xl select-none p-3 md:p-4 mb-6"
              words="Building Interactive Experiences with Data & Code"
            />

            <p className="text-center md:tracking-widesr mb-4 text-sm md:text-lg lg:text-2xl text-black dark:text-white select-none p-2 md:p-3">Hi, I&apos;m Priyanshu, a React Developer based in India.</p>

            <a href="#about">
              <SimpleButton
                title="See my work"
                icon={<FaLocationArrow />}
                position='right' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
