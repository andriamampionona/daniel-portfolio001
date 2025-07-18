"use client"
import Apropos from "@/components/Apropos";
import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
// import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Particles } from "@/components/magicui/particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
// import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ModeToggle } from "@/components/ModeToggle";
import Projects from "@/components/projets";
import { MySheet } from "@/components/sheet";
import {  ArrowDownCircleIcon, LinkedinIcon, MailIcon, Menu, PhoneCallIcon } from "lucide-react";


import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [mobil, setMobil] = useState(false);

  const mobile = () => {setMobil(!mobil)}

  return (
    <>
    <div className="relative sm:fixed overflow-visible w-full z-50 bg-secondary ">
         <nav className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className=" flex-row flex h-16 items-center justify-between">
              <div className="relative inset-y-0 cursor-pointer left-0 flex items-center sm:hidden">
                <Menu onClick={mobile}></Menu>
              </div>
              <div className="hidden sm:block shrink-0 items-center">
                <img src="/daniel-logo-remove-pg.png" alt=" daniel nomenjanahary " className="h-8 w-auto" />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="sm:hidden flex shrink-0 items-center">
                <img src="/daniel-logo-remove-pg.png" alt=" daniel nomenjanahary " className="h-8 w-auto" />
              </div>  
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a href="#home" aria-current="page" className=" border-b-[1px] border-primary px-3 py-2 text-sm font-medium text-white">Accueil</a>
                    <a href="#apropos" className="px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">A propos</a>
                    <a href="#projets" className=" px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Mes projets</a>
                    <a href="#contact" className=" px-3 py-2 text-sm font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Me contacter</a>
                  </div>
                </div>
              </div>
              
              <div className="gap-1 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <ModeToggle />
                <ModeToggle />
                
              </div>
            </div>
          </div>

          { mobil && <div id="mobile-menu" className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              
              <a href="#home" aria-current="page" className="block  bg-gray-900 px-3 py-2 text-base font-medium text-white">Accueil</a>
              <a href="#apropos" className="block   px-3 py-2 text-base font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">A propos</a>
              <a href="#Mes projets" className="block  px-3 py-2 text-base font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Mes projets</a>
              <a href="#contact" className="block  px-3 py-2 text-base font-medium text-foreground hover:border-b-[1px]  hover:border-primary animate-in">Me contacter</a>
            </div>
          </div>}
        </nav>

    </div>
    
    <div className="flex flex-col items-center  min-h-screen  gap-20 sm:p-30 ">
      
      
      
      <div className="absolute overflow-hidden h-svh w-full" >
        <Particles />
        
      </div>
     
      <main className="mt-15 flex flex-col gap-[32px] row-start-2 sm:items-start">             
        
        <div className="h-screen w-full text-center sm:text-left md:text-left lg:text-left space-y-5">
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

        
        </div>
        <div id="apropos" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <Apropos/>
        </div>

        
        <div id="projets" className=" animate-accordion-up pt-16 min-h-screen bg-blend-darken border-t-2  border-amber-50 w-full">
          <Projects/>
        </div>

        
       
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon></LinkedinIcon>
          Linked-in
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhoneCallIcon></PhoneCallIcon>
          WhatsApp
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon></MailIcon>
          Envoyer un email
        </a>
      </footer>
    </div>
  </>
  );
}
