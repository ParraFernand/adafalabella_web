import { Hero } from '@/components/hero_ntrs'
import { SobreNosotros } from '@/components/sobre-nosotros'
import { MisionVision } from '@/components/mision_vision'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <MisionVision />
      <SobreNosotros/>
    </div>
  )
}

export default page