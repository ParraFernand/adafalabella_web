import { Hero } from '@/components/hero_srv'
import { ServicesGrid } from '@/components/services-grid'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <ServicesGrid/>
    </div>
  )
}

export default page