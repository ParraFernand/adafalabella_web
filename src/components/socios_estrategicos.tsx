'use client'
import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
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

  const imagenes = [
    "/socio1.jpg",
    "/socio2.jpg",
    "/socio3.jpg",
    "/socio4.jpg",
    "/socio5.jpg",
  ]

  return (
    <div className="relative overflow-hidden r shadow-xl">
      {/* Video de fondo */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dcoidemmj/video/upload/v1748934682/ny7h9p2l0kqo9qa80f5c.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </motion.video>

      {/* Capa oscura opcional */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido encima del video */}
      <div className="relative z-10 py-8 md:py-12 px-4">
        <h2 className="text-2xl md:text-4xl font-barlowCondensed text-center text-[#efc901] mb-4 md:mb-5">
          Socios Estratégicos
        </h2>

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
              {imagenes.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/3 pl-2 md:pl-4"
                >
                  <div className="p-1 md:p-2">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="flex aspect-square items-center justify-center p-2 md:p-4 bg-black rounded-lg">
                        <Image
                          src={src}
                          alt={`Logo ${index + 1}`}
                          width={120}
                          height={120}
                          className="object-contain w-full h-full"
                        />
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
    </div>
  )
}
