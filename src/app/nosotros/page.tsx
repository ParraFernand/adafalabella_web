import { Hero } from '@/components/hero_ntrs'
import { SobreNosotros } from '@/components/sobre-nosotros'
import { MisionVision } from '@/components/mision_vision'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center bottom" }} 
        >
          <source src="/black.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Hero/>
      <MisionVision />
      <SobreNosotros/>
    </div>
  )
}

export default page