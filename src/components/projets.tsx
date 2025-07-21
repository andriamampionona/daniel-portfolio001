
import React from 'react'
import { TypingAnimation } from './magicui/typing-animation'

// import { PulsatingButton } from './magicui/pulsating-button'
import { BorderBeam } from './magicui/border-beam'
import { Card, CardContent, CardHeader } from './ui/card'
// import Image from 'next/image'
import { Database, JapaneseYen } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projects() {
  return (
    <>
    <div className="font-mono flex flex-col gap-4 justify-between ">
      <BorderBeam className='h-28'></BorderBeam>
         <TypingAnimation className='text-2xl  text-center sm:text-left   lg:text-6xl md:text-5xl sm:text-4xl font-[family-name:var(--font-geist-sans)]'>
             Mes projets</TypingAnimation>
        
        <div className="flex flex-col md gap-2.5  gap-x-5 gap-y-16 items-center m-3">
          {/* Hotel */}
          <div className="flex flex-col lg:flex-row  border-2 border-card  rounded-3xl p-3 gap-5 ">
            <div className="h-full w-full  lg:w-1/2  ">
              <h2 className='text-2xl m-3 font-mono'>Gestion d’Hôtel </h2>
               <img src="/hotel.png" alt="hotel" className='rounded-2xl p-2' />
            </div>
            <Card className=" w-full  lg:w-1/2 lg:mt-16 ">
             <CardHeader className='text-sm'>⛩️ 🏢 Hotel management 🏢 ⛩️ </CardHeader>
             <CardContent className='text-xs text-muted-foreground'>
                <p>👉👉🏿 C’est une application pour la gestion d’ un hotel de manière fluide </p>
                <p>Le systeme pertmet aux résponsables de l’hotel de suivre facilement les réservations 
                  de leur clients car, les données sont centralisé sur Neon Database, 
                  et le systeme facilite la communication avec le client (l’emailing)</p>
                <br />
                <p>
                  Ce application a été développer avec NextJS, Spring Boot (REST FULL API). 
                  Elle est hébérgée sur Vercel, 
                </p>
             </CardContent>
           </Card>
        
          </div>
          {/* GANTT */}
          <div className="flex flex-col lg:flex-row  border-2 border-card  rounded-3xl p-3 gap-5 ">
            <div className="gap-5 h-full w-full  lg:w-1/2  ">
              <h2 className='text-2xl h-full m-3 font-mono'>Ordonnancement des tâches (GANTT) </h2>
                <Carousel className='md:m-10 m-10'>
                  <CarouselContent>
                    <CarouselItem>
                      <img src="/gantt1.png" alt="daniel portfolio" className='size-full rounded-2xl p-2' />
                    </CarouselItem>
                    <CarouselItem>
                      <img src="/gantt2.png" alt="daniel portfolio" className='rounded-2xl p-2' />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

            </div>
            <Card className="gap-5 h-full w-full lg:mt-16 lg:w-1/2">
             <CardHeader className='text-sm'>🪡➕ Ordonnancement des tâches (GANTT)</CardHeader>
             <CardContent className='text-xs text-muted-foreground'>
                <p>C’est une application de recherche Oppérationnelle. </p>
                <br />
                <p>Le systeme aide les chefs des projets à organiser leur taches en leur aidant à savoir la dade de fin du projet </p>
                
                <br />
                <p className='flex flex-row items-center gap-2'>
                   <JapaneseYen></JapaneseYen>
                   <span>Ce projet à été conçu avec NextJs pour la partie frontend et avec Le framework FLASK de Python pour le back-end.</span>
                </p>
                
                <br />
                
                <p className='flex flex-row items-center gap-2'>
                    <span>On a aussi utilisé PostgreSQL pour le stockage des données </span><Database></Database>.
                </p>
  
             </CardContent>
           </Card>
        
          </div>
          
          {/* Portfolio */}
          <div className="flex flex-col lg:flex-row  border-2 border-card  rounded-3xl p-3 gap-5 ">
            <div className="gap-5 h-full w-full  lg:w-1/2  ">
              <h2 className='text-2xl h-full m-3 font-mono'>Daniel Nomenjanahary Portfolio </h2>
                <div className=" ">
                  <Carousel className='md:m-10 m-10'>
                  <CarouselContent>
                    <CarouselItem>
                      <img src="/portfolio-daniel.png" alt="daniel portfolio" className='size-full rounded-2xl p-2' />

                    </CarouselItem>
                    <CarouselItem>
                      <img src="/portfolio2.png" alt="daniel portfolio" className='rounded-2xl p-2' />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
               
                </div>
                
            </div>
            <Card className="gap-5 h-full w-full lg:mt-16 lg:w-1/2">
             <CardHeader className='text-sm'>🪡➕ Daniel Nomenjanahary Portfolio</CardHeader>
             <CardContent className='text-xs text-muted-foreground'>
                <p>C’est mon propre  site web. </p>
                <br />
                <p>Ce site a été conçu avec next JS v15, déployé sur Vercel.</p>
                
                <br />
                <p className='flex flex-row items-center gap-2'>
                   <JapaneseYen></JapaneseYen>
                   <span>Ce site web a été conçu avec NextJS v15 et déployé sur  Vercel.</span>
                </p>
                
                <br />
                
  
             </CardContent>
           </Card>
        
          </div>
          
          {/* Tongasoa */}
          <div className="flex flex-col lg:flex-row  border-2 border-card  rounded-3xl p-3 gap-5 ">
            <div className="gap-5 h-full w-full  lg:w-1/2  ">
              <h2 className='text-2xl h-full m-3 font-mono'>Tongasoa site web </h2>
                <div className=" ">
                  <Carousel className='md:m-10 m-10'>
                  <CarouselContent>
                    <CarouselItem>
                      <img src="/tongasoa.png" alt="daniel portfolio" className='size-full rounded-2xl p-2' />

                    </CarouselItem>
                    <CarouselItem>
                      <img src="/tongasoa.png" alt="daniel portfolio" className='rounded-2xl p-2' />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
               
                </div>
                
            </div>
            <Card className="gap-5 h-full w-full lg:mt-16 lg:w-1/2">
             <CardHeader className='text-sm'>🪡➕ Site Web de Tongasoa</CardHeader>
             <CardContent className='text-xs text-muted-foreground'>
                <p>C’est un site web. </p>
                <br />
                <p>Ce site a été conçu avec next JS v15, déployé sur Vercel.</p>
                
                <br />
                <p className='flex flex-row items-center gap-2'>
                   <JapaneseYen></JapaneseYen>
                   <span>Ce site web a été conçu avec NextJS v15 et déployé sur  Vercel.</span>
                </p>
                
                <br />
                
  
             </CardContent>
           </Card>
        
          </div>

      </div>
    
    </div>
    </>
  )
}
