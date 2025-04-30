"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  // Tipificación correcta para backgroundRef
  const backgroundRef = useRef<HTMLDivElement>(null)

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY
        // Aplicando el efecto de parallax
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const decorationVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen  overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={backgroundRef} className="absolute inset-0 h-[120%] w-full">
          {/*<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90 z-10"></div>*/}
          <Image src="/mujer_leon_1.png" alt="Background" fill priority className="object-cover" style={{ objectPosition: '10% 20%' }} />
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#efc901]/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 h-[calc(100vh-6rem)] flex flex-col items-start justify-center px-6 md:px-20 max-w-full">
        <motion.div
          className="text-white text-center md:text-left w-full max-w-3xl mx-auto md:ml-12 font-jafherb relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative line */}
          <motion.div
            className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#efc901] via-[#efc901] to-transparent hidden md:block"
            variants={decorationVariants}
          />

          {/* Main Text */}
          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-6xl md:lg:text-[150px] font-corinthia mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-white">
              AdaFalabella
            </h1>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-pacifico leading-tight">
            ¡Movemos tu mundo con
            <br />
            <span className="text-[#efc901]">EFICIENCIA</span> Y <span className="text-[#efc901]">CONFIANZA</span>!
          </motion.h2>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-10">
            <motion.button
              className="group relative px-8 py-4 bg-[#efc901] hover:bg-[#efc901] text-slate-900 font-bold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[#efc901]/20 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Conoce Nuestros Servicios
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 0.6,
                  }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Decorative element */}
          <motion.div className="absolute -bottom-10 right-0 w-24 h-24 hidden md:block" variants={decorationVariants}>
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-[#efc901]/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 border-b-2 border-r-2 border-[#efc901]/50 rounded-br-xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#efc901] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
