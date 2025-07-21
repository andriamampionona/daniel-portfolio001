import React from 'react'
import { AuroraText } from './magicui/aurora-text'
import { TypingAnimation } from './magicui/typing-animation'
import { ShimmerButton } from './magicui/shimmer-button'
import Image from 'next/image'
import { MySheet } from './sheet'
import { InteractiveHoverButton } from './magicui/interactive-hover-button'
import { ArrowDownCircleIcon } from 'lucide-react'

export default function Home() {
  return (
    <>
        <div className="sm:flex-col lg:flex-row md:flex-row xl:flex-row space-y-4 text-center sm:text-left md:text-left lg:text-left  flex flex-col gap-x-4 items-center justify-between w-full max-w-5xl">
            <div className="">
              <h1 className="font-poppins text-4xl   font-bold tracking-tighter md:text-5xl lg:text-7xl">
                Daniel <AuroraText className="pt-10">Nomenjanahary</AuroraText>
              </h1>
    
              <TypingAnimation className="sm:text-xl text-shadow-md text-foreground">Dévéloppeur web fullstack passioné. </TypingAnimation>
            
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
                src={"/profil1.png"}
                width={200}
                height={200}
              />
              </div>
          
          </div>
          <div className="flex flex-col justify-center items-center p-6  ">
            <MySheet>
            <InteractiveHoverButton className="text-xs">Me contacter</InteractiveHoverButton>
            </MySheet>
            <ArrowDownCircleIcon height={50}></ArrowDownCircleIcon>
            
          </div>
    </>
  )
}
