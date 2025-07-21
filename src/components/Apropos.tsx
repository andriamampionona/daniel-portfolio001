import Image from 'next/image'
import React from 'react'
import { TypingAnimation } from './magicui/typing-animation'

// import { PulsatingButton } from './magicui/pulsating-button'
import { ArrowRight } from 'lucide-react'
import { ShimmerButton } from './magicui/shimmer-button'
import { Card } from './ui/card'

export default function Apropos() {
  return (
    <>
    <div className="font-mono m-3 flex flex-col gap-4 justify-between ">
         <TypingAnimation className='text-2xl underline underline-offset-4 ude  text-center lg:text-right   lg:text-6xl md:text-5xl sm:text-4xl font-[family-name:var(--font-geist-sans)]'>
             A propos de moi</TypingAnimation>
        
        <div className="flex flex-col lg:flex-row  gap-x-5 items-center">
           <div className="w-full md:w-1/3 flex items-center flex-col ">
             <Image
                alt='apropos'
                src={'/daniel-logo-remove-pg.png'}
                key={"e"}
                height={300}
                width={300}
            />
           </div>
        <div className="w-full md :w-2/3  space-x-1.5 mt-2.5 ">
          <Card className='p-3'>
            <p className=''>
              Je m&apos;appelle <span className='font-medium text-2xl m-3 '>Daniel Nomenjanahary</span>, 
            </p>
            <p className='mt-1.5'>
              Je suis un étudiant en Master en Génie Logiciel, passionné par le développement web moderne.
              Curieux et rigoureux, je me spécialise dans la création d’interfaces fluides et la conception d’API robustes, 
              tout en gardant une attention particulière à l’expérience utilisateur et à la qualité du code.
            
            </p>
            <p>
               Je travaille principalement avec des technologies telles que React, Next.js, Java, TypeScript et Spring Boot. 
              J’aime relever des défis techniques, résoudre des problèmes complexes et collaborer avec d’autres développeurs 
              pour construire des solutions fiables et évolutives.

            </p>
            <p>
                Actuellement, je continue de me former activement sur des domaines comme le DevOps, la sécurité web et le développement mobile, 
              dans le but d’élargir mes compétences et de mieux répondre aux exigences des projets modernes.
            </p>
          </Card>

            <div className="text-right flex ">
              <ShimmerButton className='mt-5 text-right'><span  className='w-auto text-card-foreground mr-4'>Engager moi pour un projet</span> <span> <ArrowRight className='text-foreground'/></span> </ShimmerButton>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
