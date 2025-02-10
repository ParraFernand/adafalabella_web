"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const carouselItems = [
  {
    title: "4 talentos humanos indispensables para Masterline",
    content:
      "Nuestro centro siempre han sido las personas, y en estos 20 años de trayectoria, apostar por el talento humano, siempre nos ha traído grandes avances, tanto que hemos llegado a identificar 4 perfiles que están presentes en todos nuestros equipos y que nos han llevado a hacer historia, hoy los queremos compartir contigo.",
  },
  {
    title: "Nuestra Historia",
    content: "Más de dos décadas de experiencia en logística y transporte internacional.",
  },
  {
    title: "Nuestro Equipo",
    content: "Profesionales dedicados a impulsar el éxito de tu negocio.",
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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-orange to-yellow-500">
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
              <h2 className="text-3xl font-bold mb-4">{carouselItems[currentSlide].title}</h2>
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

