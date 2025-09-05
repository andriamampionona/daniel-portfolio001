"use client";
import React from 'react'
import { AuroraText } from './magicui/aurora-text'
import { ShimmerButton } from './magicui/shimmer-button'
import Image from 'next/image'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import { ArrowDownCircleIcon } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation';

export default function HomePage() {
  return (
    <>
        <div className=" md:px-20 sm:flex-col lg:flex-row md:flex-col xl:flex-row space-y-4 text-center sm:text-left md:text-left lg:text-left  flex flex-col gap-x-4 items-center justify-between w-full max-w-5xl">
            <div className="">
              <h1 className="font-poppins text-4xl   font-bold tracking-tighter md:text-5xl lg:text-7xl">
                Daniel <AuroraText className="pt-10">Nomenjanahary</AuroraText>
              </h1>

               <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Devéloppeur Web fullstack',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Devéloppeur Mobile',
                    1000,
                    'UX/UI Designer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
    

              <div className=" my-3">
                <p>Développeur passionné avec une expertise en développement web moderne.</p>
              </div>
              <div className="justify-center lg:justify-start  sm:justify-start *:justify-start md:justify-start row-start-3 flex gap-[24px] flex-wrap">
                <ShimmerButton className="h-8  text-amber-50 opacity-30"  > <span className="text-white text-xs">Vue</span></ShimmerButton>
                <ShimmerButton className="h-8  text-amber-50 opacity-30"  > <span className="text-white text-xs">React</span></ShimmerButton>
                <ShimmerButton className="h-8  text-amber-50 opacity-30"  > <span className="text-white text-xs">NextJS</span></ShimmerButton>
                <ShimmerButton className="h-8  text-amber-50 opacity-30"  > <span className="text-white text-xs">Angular</span></ShimmerButton>
                <ShimmerButton className="h-8  text-amber-50 opacity-30"  > <span className="text-white text-xs">Spring Boot</span></ShimmerButton>
                
              </div>
            </div>
            <div className="justify-center  ">
              
                <Image 
                className="sm:visible  "
                alt="Daniel Nomenjanahary"
                src={"/my-profil.png"}
                width={200}
                height={200}
              />
              </div>
          
          </div>
          <div className="flex flex-col justify-center items-center p-6  ">
            

            <InteractiveHoverButton className="text-xs">
              <a href="#contact">
              Me contacter
              </a>
              </InteractiveHoverButton>
          
            <ArrowDownCircleIcon height={50}></ArrowDownCircleIcon>
            
          </div>
    </>
  )
}
