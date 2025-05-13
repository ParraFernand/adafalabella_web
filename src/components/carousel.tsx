"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Handshake, ShieldCheck, BriefcaseBusiness } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const carouselItems = [
  {
    title: "Su confianza, nuestro compromiso",
    content:
      "Nuestro asesoramiento experto en cada despacho garantiza el cumplimiento de todas las regulaciones aduaneras nacionales e internacionales. Contamos con un equipo capacitado para ofrecer orientación y asistencia personalizada, garantizando trámites rápidos y sin errores.",
      icon: () => <ShieldCheck className="w-16 h-16 text-white" />,
  },
  {
    title: "Tu aliado estratégico de negocios",
    content:
      "Proporcionamos soluciones a medida que se adaptan a tus necesidades específicas, desde la planificación hasta la ejecución de la importación o exportación. Confía en ADAFALABELLA S.R.L. para gestionar tus trámites aduaneros.",
      icon: () => <Handshake className="w-16 h-16 text-white" />,
  },
  {
    title: "Experiencia y profesionalismo",
    content:
      "Con más de 3 años en el mercado, nuestro equipo de profesionales altamente capacitados garantiza un servicio de calidad superior. Nos mantenemos actualizados con las últimas regulaciones para ofrecerte el mejor asesoramiento.",
      icon: () => <BriefcaseBusiness className="w-16 h-16 text-white" />,
  },
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [direction, setDirection] = React.useState<"right" | "left">("right")
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)
  const progressRef = React.useRef<HTMLDivElement>(null)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  
 
  
  React.useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setDirection("right")
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
      }, 6000)
    }
  
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused]);

  React.useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = "none"
      void progressRef.current.offsetWidth
      progressRef.current.style.animation = isPaused ? "none" : "progress 6s linear"
    }
  }, [currentSlide, isPaused])

  const nextSlide = () => {
    setDirection("right")
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setDirection("left")
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left")
    setCurrentSlide(index)
  }

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }
  

  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-[#07479A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Enhanced Background with Dynamic Elements */}
      <div className="absolute inset-0">
        
        
<motion.video
  ref={videoRef}
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.8 }}
  transition={{ duration: 1.5 }}
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="https://res.cloudinary.com/dcoidemmj/video/upload/v1747084683/walking_girl_fk2tc5.mp4" type="video/mp4" />
  Tu navegador no soporta videos HTML5.
</motion.video>


        
        <div className="absolute inset-0 bg-black/20" />
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(239,201,9,0.15) 0%, rgba(239,201,9,0) 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(7,71,154,0.2) 0%, rgba(7,71,154,0) 70%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex items-center justify-center min-h-[400px]">
          {/* Navigation Buttons */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-10 p-2 text-white hover:text-[#efc901] transition-colors"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </motion.div>

          {/* Main Card */}
          <div className="max-w-4xl mx-auto w-full relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="w-full"
              >
                <Card className="bg-cyan-950/80  text-white border border-[#efc901]/20 overflow-hidden shadow-2xl">
                  <CardContent className="p-10 md:p-4">
                    <div className="flex flex-col items-center text-center">
                    

                      <motion.h2
                        custom={1}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl md:text-5xl font-anton mb-20 text-[#efc901]"
                      >
                        {carouselItems[currentSlide].title}
                      </motion.h2>

                      
                      <motion.p
                        custom={2}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg md:text-4xl leading-relaxed text-justify w-[650] font-barlowCondensed text-white/90"
                      >
                        {carouselItems[currentSlide].content}
                      </motion.p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-10 p-5 text-white hover:text-[#efc901] transition-colors"

              onClick={nextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </motion.div>
        </div>

        {/* Progress and Navigation Dots */}
        <div className="flex flex-col items-center mt-10 space-y-6">
          <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#efc901] to-[#efc901]/60 rounded-full"
              style={{
                width: isPaused 
                  ? `${(currentSlide / Math.max(carouselItems.length - 1, 1)) * 100}%`
                  : "100%",
                animation: isPaused ? "none" : "progress 6s linear",
              }} />
          </div>

          <div className="flex justify-center gap-4">
            {carouselItems.map((_, index) => (
              <motion.button
                key={index}
                className={`relative h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-[#efc901] w-10"
                    : "bg-white/20 w-3 hover:bg-[#efc901]/40"
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {currentSlide === index && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-[#efc901]/40"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [1, 0, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
    
  )
}