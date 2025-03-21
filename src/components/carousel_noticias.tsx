"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const carouselItems = [
  {
    image: "/noticia3.jpg",
    title: "Noticias Internacionales",
    content: "Actualizaciones importantes del comercio internacional y tratados recientes.",
  },
  {
    image: "/noticia1.jpg",
    title: "Novedades Logísticas",
    content: "Nuevas estrategias para optimizar costos y mejorar tiempos de entrega.",
  },
  {
    image: "/noticia2.jpg",
    title: "Regulaciones Aduaneras",
    content: "Cambios recientes en normativas aduaneras y procedimientos de importación/exportación.",
  },
]

export function CarouselNoticias() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToSlide = (index : number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentSlide])

  // Animation variants
  const slideVariants = {
    enter: (direction : any) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction : any) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  }

  const backgroundVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom : any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Full-screen background with current slide image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          className="absolute inset-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/70 via-yellow-900/50 to-black/80 z-10"></div>
          <Image
            src={carouselItems[currentSlide].image || "/placeholder.svg"}
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content container - full width and height */}
      <div className="relative z-20 flex flex-col justify-center items-center w-full h-full">
        <div className="container mx-auto px-6 lg:px-16 py-8">
          <div className="flex flex-col items-center">
            {/* Section title */}
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block relative">
                <span className="relative z-10">Noticias Destacadas</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-4 bg-yellow-500/30 -rotate-1 z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.span>
              </span>
            </motion.h2>

            {/* Main carousel content */}
            <div className="w-full max-w-7xl mx-auto relative">
              {/* Current slide content */}
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`slide-${currentSlide}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Image side - larger and more prominent */}
                  <motion.div
                    className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl border border-white/10"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={1}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10"></div>
                    <Image
                      src={carouselItems[currentSlide].image || "/placeholder.svg"}
                      alt={carouselItems[currentSlide].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  {/* Content side - larger text and more space */}
                  <div className="flex flex-col justify-center p-6 md:p-10 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                    <motion.div
                      className="mb-4"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={2}
                    >
                      <span className="bg-yellow-500 px-4 py-1.5 text-sm font-semibold text-black rounded-full">
                        DESTACADO
                      </span>
                    </motion.div>
                    <motion.h3
                      className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={3}
                    >
                      {carouselItems[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={4}
                    >
                      {carouselItems[currentSlide].content}
                    </motion.p>
                    <motion.button
                      className="self-start px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-medium text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={5}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Leer más
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons - larger and more visible */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-4 lg:-left-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                aria-label="Anterior noticia"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isAnimating}
              >
                <ChevronLeft className="h-8 w-8" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-4 lg:-right-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                aria-label="Siguiente noticia"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isAnimating}
              >
                <ChevronRight className="h-8 w-8" />
              </motion.button>
            </div>

            {/* Indicators - larger and more spaced */}
            <div className="flex justify-center gap-4 mt-12">
              {carouselItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-3 transition-all duration-300 rounded-full ${
                    currentSlide === index ? "w-12 bg-yellow-500" : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir a noticia ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isAnimating}
                >
                  {currentSlide === index && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-yellow-400/50"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    ></motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
    </section>
  )
}

