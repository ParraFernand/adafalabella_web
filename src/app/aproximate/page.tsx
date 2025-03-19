<<<<<<< HEAD
import { Hero } from '@/components/hero_aprox'
=======
//import { Hero } from '@/components/hero_aprox'
>>>>>>> 762d824 (cambios 19)
import { Ubicacion } from '@/components/ubicacion'
import Image from "next/image"
import React from 'react'

const page = () => {
  return (
    <div className="relative w-full ">
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
                src="/carretera4.jpg"
                alt="Background"
                width={2419}
                height={2249}
                className="object-cover w-full h-full "
            />
    
        </div>
        <div className="absolute inset-0">
            
        
      </div>
        <div>
<<<<<<< HEAD
        <Hero/>
=======
>>>>>>> 762d824 (cambios 19)
        <Ubicacion/>

        </div>
    </div>
  )
}

export default page