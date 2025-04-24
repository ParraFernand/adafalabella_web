'use client'
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function SociosEstrategicos() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

    return (
<div className="bg-blue-900 py-8 md:py-12 px-4 rounded-lg shadow-xl">
  <h2 className="text-2xl md:text-3xl font-merriweather text-center text-[#efc901] mb-4 md:mb-5">
    Socios Estratégicos
  </h2>
  
  {/* Contenedor del Carrusel */}
  <div className="flex justify-center">
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs md:max-w-xl" 
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-0 md:-ml-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem 
            key={index} 
            className="basis-1/2 md:basis-1/4 lg:basis-1/3 pl-2 md:pl-4" 
          >
            <div className="p-1 md:p-2"> 
              <Card className="border-0 shadow-lg">
                <CardContent className="flex aspect-square items-center justify-center p-2 md:p-4 bg-white rounded-lg">
                  <span className="text-2xl md:text-4xl font-bold text-blue-900"> 
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex left-2" />
      <CarouselNext className="hidden md:flex right-2" />
    </Carousel>
  </div>
</div>  
 )
}
