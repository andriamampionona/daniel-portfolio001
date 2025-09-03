import React from 'react'

import Pro from './proffessionnel'
import Formation from './formation'

function Experiences() {
  return (
    <div className='py-16 px-6 md:px-20' id='experiencess'>
        <div className="flex flex-col gap-5 m-2" >
          <p className='text-5xl text-foreground font-bold text-center '>Expérience & Formation</p>
          <div className="flex flex-col gap-3 ">
            <p className=' text-2xl text-foreground font-bold'>Expérience Professionnelle</p>
            <div className="flex flex-col gap-5">
              <Pro></Pro>
            </div>

            <p className=' text-2xl text-foreground font-bold'>Formations</p>
            <div className="flex flex-col gap-5">
              <Formation />
            </div>
          </div>
          
          {/* Mes Formation */}
          <div className=""></div>
        </div>
    </div>
  )
}

export default Experiences