import React from 'react'

import { Calendar, MapPin } from 'lucide-react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

export default function Pro() {
  return (
    <>

      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0, 0, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        
      >
        <div className="flex flex-row justify-between  border-2 border-secondary p-3 m-3 rounded-2xl">
        <div className="flex flex-col gap-y-3">
            <p className='text-2xl text-card-foreground'>Développeur Full-Stack (Stage)</p>
            <p className='text-primary '> Betsileo Country Lodge</p>
            <div className="">
            <p className='flex flex-row gap-2 items-center'>
                <span className='text-2xl text-primary'>•</span>
                <span>Application web pour la gestion d&apos;hotel.</span>
            </p>
            <p className='flex flex-row gap-2 items-center'>
                <span className='text-2xl text-primary'>•</span>
                <span>
                Technologies : Spring Boot (REST Api), NextJS, PostgreSQL
                </span>
            </p>
            
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row  gap-2">
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> Spring Boot </Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> NextJS </Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> PostgreSQL </Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> Docker </Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> Render </Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> Vercel </Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> Neon PostgreSQL </Button>
            </div>
        </div>
        <div className=" space-y-2">
            <p className='flex flex-row justify-around space-x-2 text-xs text-card-foreground'> <Calendar size={20} />  <span>Septembre 2024 – Décembre 2024</span></p>
            <p  className='flex flex-row space-x-2 text-xs text-card-foreground'> <MapPin size={20} /><span>Ambalavao</span> </p>
        </div>
        </div>
       </motion.div>
       <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0, 0, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        
      > 
          <div className="flex flex-row justify-between  border-2 border-secondary p-3 m-3 rounded-2xl">
          <div className="flex flex-col gap-y-3">
              <p className='text-2xl text-card-foreground'>Développeur Stagiaire</p>
              <p className='text-primary '> Fianarantsoa Côte-Est (F C E)</p>
              <div className="">
              <p className='flex flex-row gap-2 items-center'>
                  <span className='text-2xl text-primary'>•</span>
                  <span>Application desktop pour la gestion des réssources humainnes.</span>
              </p>
              <p className='flex flex-row gap-2 items-center'>
                  <span className='text-2xl text-primary'>•</span>
                  <span>
                  Technologies : C# , Microsoft SQL Server
                  </span>
              </p>
              
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row  gap-2">
              <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> C#</Button>
              <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> Microsoft SQL Server </Button>
              </div>
          </div>
          <div className=" space-y-2">
              <p className='flex flex-row justify-around space-x-2 text-xs text-card-foreground'> <Calendar size={20} />  <span>Août 2023 – Movembre 2023</span></p>
              <p  className='flex flex-row space-x-2 text-xs text-card-foreground'> <MapPin size={20} /><span>Fianarantsoa</span> </p>
          </div>
          </div>
        </motion.div>
        <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0, 0, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        
      >
        <div className="flex flex-row justify-between  border-2 border-secondary p-3 m-3 rounded-2xl">
            <div className="flex flex-col gap-y-3">
                <p className='text-2xl text-card-foreground'>Développeur Web</p>
                <p className='text-primary '> Tongasoa</p>
                <div className="">
                <p className='flex flex-row gap-2 items-center'>
                    <span className='text-2xl text-primary'>•</span>
                    <span>Site web de l&apos; organisation Tongasoa </span>
                </p>
                <p className='flex flex-row gap-2 items-center'>
                    <span className='text-2xl text-primary'>•</span>
                    <span>
                    Technologies : NextJS , TypeScript
                    </span>
                </p>
                
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row  gap-2">
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> NextJS</Button>
                <Button className='text-sm text-card-foreground bg-secondary  rounded-4xl '> TypeScript</Button>
                </div>
            </div>
            <div className=" space-y-2">
                <p className='flex flex-row justify-around space-x-2 text-xs text-card-foreground'> <Calendar size={20} />  <span>En cours</span></p>
                <p  className='flex flex-row space-x-2 text-xs text-card-foreground'> <MapPin size={20} /><span>Fianarantsoa</span> </p>
            </div>
        </div>
      </motion.div>
    </>
  )
}
