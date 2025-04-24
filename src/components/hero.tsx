"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const controls = useAnimation()

  // Parallax effect for video
  const videoY = useTransform(scrollY, [0, 500], [0, 150])

  // Animate elements on load
  useEffect(() => {
    controls.start("visible")
  }, [controls])

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-blue-950">
      {/* Background Video with Parallax */}
      <motion.div className="absolute inset-0 h-[110%] w-full" style={{ y: videoY }}>
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="aduanas1.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </motion.video>

        {/* Blue Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/60 to-blue-950"
        />
      </motion.div>

      {/* Animated Blue Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? "bg-[#efc901]/30" : "bg-blue-400/20"}`}
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>
      {/* Yellow Accent Shape */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="hidden md:block absolute right-[5%] top-0 h-full w-[30%] z-0"
        style={{
          backgroundColor: "#ffffff", // [#efc901]
          clipPath: "polygon(100% 0, 100% 100%, 30% 100%, 60% 0)",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-0 h-[calc(100vh-3rem)] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center md:text-left md:pl-8 lg:pl-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-3xl lg:text-7xl font-pacifico mb-6 text-white drop-shadow-lg"
            >
             Bienvenidos a  <span className="font-bold font-corinthia lg:text-9xl text-[#efc901]">AdaFalabella</span>
              <span className="text-[#efc901] text-sm align-top ml-1">S.R.L</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="h-1 w-24 bg-[[#efc901]] mb-6 hidden md:block" />

            <motion.p variants={itemVariants} className="text-white text-lg md:text-3xl font-merriweather text-justify leading-relaxed mb-8 max-w-lg">
              Nos especializamos en brindar servicios ágiles y eficientes para asegurar que tus importaciones y
              exportaciones se realicen con éxito y sin contratiempo.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                className="px-8 py-3 bg-[#efc901] hover:bg-[#efc901] text-blue-950 rounded-full font-merriweather text-3xl shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Nuestros Servicios
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="relative flex justify-center md:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              
              <Image
                src="/girl_hero.png"
                alt="Imagen Descriptiva"
                width={320}
                height={250}
                className="object-contain drop-shadow-xl"
                priority
              />
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Animated Accent Lines */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-12 h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-8 h-px w-full bg-gradient-to-r from-transparent via-[#efc901] to-transparent"
        />
      </div>

      {/* Blue and Yellow Glowing Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#efc901]/10 blur-3xl"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white text-sm mb-2 opacity-70">Descubre más</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-10 border-2 border-[#efc901]/30 rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            className="w-1.5 h-3 bg-[#efc901] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

