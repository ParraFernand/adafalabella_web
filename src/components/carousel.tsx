"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const carouselItems = [
  {
<<<<<<< HEAD
    title: "4 talentos humanos indispensables para AdaFalabella",
=======
    title: "Su confianza, nuestro compromiso",
>>>>>>> 762d824 (cambios 19)
    content:
      "Nuestro asesoramiento experto en cada despacho garantiza el cumplimiento de todas las regulaciones aduaneras nacionales e internacionales. Contamos con un equipo capacitado para ofrecer orientación y asistencia personalizada, garantizando trámites rápidos y sin errores.",
  },
  {
    title: "Tu aliado estratégico de negocios",
    content: "Proporcionamos soluciones a medida que se adaptan a tus necesidades específicas, desde la planificación hasta la ejecución de la importación o exportación. Confía en ADAFALABELLA S.R.L. para gestionar tus trámites aduaneros.",
  },
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background with gradient */}

<<<<<<< HEAD
      <div className="absolute inset-0 bg-black/70 via-transparent">
=======
      <div className="absolute inset-0 bg-black/80 via-transparent">
>>>>>>> 762d824 (cambios 19)
        {/* Background image */}
        <div className="relative h-full w-full opacity-50 mix-blend-overlay">
          <Image
            src="/logis1.jpg"
            alt="Industrial Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Carousel content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[400px]">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Card */}
          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm text-white border-none">
            <CardContent className="p-8">
              <h2 className="text-3xl text-yellow-500 font-bold mb-4">{carouselItems[currentSlide].title}</h2>
              <p className="text-lg leading-relaxed">{carouselItems[currentSlide].content}</p>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

