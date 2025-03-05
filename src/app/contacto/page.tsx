//import { Hero } from '@/components/hero_contac'
import { Contact_form } from '@/components/contac'
import Image from "next/image"
import React from 'react'

const page = () => {
  return (
    <div className="relative w-full ">
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
                src="/fondo_art.jpg"
                alt="Background"
                width={2419}
                height={2249}
                className="object-cover w-full h-full "
            />
    
        </div>
        <div className="absolute inset-0">
      </div>
        <div>
        
        <Contact_form/>

        </div>
    </div>
  )
}

export default page