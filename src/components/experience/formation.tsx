'use client'

import React from 'react'
import { Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Formation() {
  return (
    <>
      {/** Bloc formation 1 */}
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0, 0, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex flex-row justify-between border-2 border-secondary p-3 m-3 rounded-2xl cursor-pointer"
      >
        <div className="flex flex-col gap-y-3">
          <p className='text-2xl text-card-foreground'>Master en Informatique, </p>
          <p className='text-xl text-card-foreground'>parcours Génie Logiciel et Base de Données</p>
          <p className='text-primary '> École Nationale d&apos;Informatique (ENI), Fianarantsoa</p>
          <p className='text-sm text-card-foreground mt-4'>Formation professionnel spécialisé dans le développement logiciel et les bases de données</p>
        </div>
        <div className="space-y-2">
          <p className='flex flex-row justify-around space-x-2 text-xs text-card-foreground'> <Calendar size={20} />  <span>2024 – à présent</span></p>
          <p className='flex flex-row space-x-2 text-xs text-card-foreground'> <MapPin size={20} /><span>Fianarantsoa</span> </p>
        </div>
      </motion.div>

      {/** Bloc formation 2 */}
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0, 0, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex flex-row justify-between border-2 border-secondary p-3 m-3 rounded-2xl cursor-pointer"
      >
        <div className="flex flex-col gap-y-3">
          <p className='text-2xl text-card-foreground'>Licence en Informatique, </p>
          <p className='text-xl text-card-foreground'>parcours Génie Logiciel et Base de Données</p>
          <p className='text-primary '> École Nationale d&apos;Informatique (ENI), Fianarantsoa</p>
          <p className='text-sm text-card-foreground mt-4'>Diplôme de Licence professionnel en développement logiciel et bases de données</p>
        </div>
        <div className="space-y-2">
          <p className='flex flex-row justify-around space-x-2 text-xs text-card-foreground'> <Calendar size={20} />  <span>2021 – 2024</span></p>
          <p className='flex flex-row space-x-2 text-xs text-card-foreground'> <MapPin size={20} /><span>Fianarantsoa</span> </p>
        </div>
      </motion.div>

      {/** Bloc formation 3 */}
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: '0 8px 20px rgba(0, 0, 255, 0.2)',
          backgroundColor: 'rgba(0, 0, 255, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex flex-row justify-between border-2 border-secondary p-3 m-3 rounded-2xl cursor-pointer"
      >
        <div className="flex flex-col gap-y-3">
          <p className='text-2xl text-card-foreground'>Baccalauréat Scientifique (Série C)</p>
          <p className='text-primary '> Lycée Privée Catholique Saint Joseph Ambalavao </p>
          <p className='text-sm text-card-foreground mt-4'>Baccalauréat Scientifique</p>
        </div>
        <div className="space-y-2">
          <p className='flex flex-row justify-around space-x-2 text-xs text-card-foreground'> <Calendar size={20} />  <span>2020</span></p>
          <p className='flex flex-row space-x-2 text-xs text-card-foreground'> <MapPin size={20} /><span>Ambalavao</span> </p>
        </div>
      </motion.div>
    </>
  )
}
