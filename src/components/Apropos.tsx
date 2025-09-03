"use client"

import Image from 'next/image'
import React from 'react'
import { TypingAnimation } from './magicui/typing-animation'
import { Card } from './ui/card'
import { motion } from "framer-motion";

export default function Apropos() {
  return (
    <div id='apropos' className="font-mono m-6 flex flex-col gap-8 justify-between max-w-7xl mx-auto">
      <TypingAnimation 
        className='
          text-3xl underline underline-offset-4 text-center 
          lg:text-right lg:text-6xl md:text-5xl sm:text-4xl 
          font-[family-name:var(--font-geist-sans)] 
          select-none
        '
      >
        A propos de moi
      </TypingAnimation>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Image section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3 flex justify-center"
        >
          <Image
            alt='Illustration à propos de moi'
            src={'/about-me.svg'}
            height={300}
            width={300}
            priority
            className="select-none"
          />
        </motion.div>

        {/* Text section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full md:w-2/3 space-y-6"
        >
          <Card className='p-6 shadow-lg bg-background/80 backdrop-blur-md rounded-2xl border border-secondary'>
            <p className='text-lg leading-relaxed'>
              Je m&apos;appelle <span className='font-semibold text-2xl text-primary'>Daniel Nomenjanahary</span>, 
            </p>
            <p className='text-base text-foreground/90 leading-relaxed'>
              Étudiant en Master en Génie Logiciel, passionné par le développement web moderne. Curieux et rigoureux, je me spécialise dans la création d’interfaces fluides et la conception d’API robustes, tout en gardant une attention particulière à l’expérience utilisateur et à la qualité du code.
            </p>
            <p className='text-base text-foreground/90 leading-relaxed'>
              Je travaille principalement avec des technologies telles que React, Next.js, Java, TypeScript et Spring Boot. J’aime relever des défis techniques, résoudre des problèmes complexes et collaborer avec d’autres développeurs pour construire des solutions fiables et évolutives.
            </p>
            <p className='text-base text-foreground/90 leading-relaxed'>
              Actuellement, je continue de me former activement sur des domaines comme le DevOps, la sécurité web et le développement mobile, dans le but d’élargir mes compétences et de mieux répondre aux exigences des projets modernes.
            </p>
          </Card>

          {/* <div className="flex justify-end">
            <ShimmerButton
              className='
                mt-5 inline-flex items-center gap-3
                bg-primary hover:bg-primary-dark
                text-white px-6 py-3 rounded-lg
                focus:outline-none focus:ring-4 focus:ring-primary/50
                transition-colors duration-300
              '
            >
              <span>Engagez-moi pour un projet</span> 
              <ArrowRight className='w-5 h-5 text-white' />
            </ShimmerButton>
          </div> */}
        </motion.div>
      </div>
    </div>
  )
}
