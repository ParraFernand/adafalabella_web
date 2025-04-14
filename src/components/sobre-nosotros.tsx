"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ChevronRight, Award, Users, Clock, Star } from "lucide-react"

export function SobreNosotros() {
  const containerRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  // Parallax effect for background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Spring animations for smoother motion
  const springConfig = { damping: 25, stiffness: 120 }
  const springY = useSpring(y, springConfig)
  const springScale = useSpring(scale, springConfig)

  // Mouse move handler for interactive elements
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  // Particle system
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>(
    [],
  )

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: (p.y - p.speed) % 100,
          x: p.x + Math.sin(p.y * 0.05) * 0.2,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: Award,
      value: "3+",
      label: "Años de Experiencia",
      color: "from-amber-400 to-[#efc901]",
      delay: 0,
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfechos",
      color: "from-cyan-400 to-blue-500",
      delay: 0.1,
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Servicio Continuo",
      color: "from-emerald-400 to-teal-500",
      delay: 0.2,
    },
  ]

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  // Staggered letter animation for heading
  const headingText = "Estamos aquí para mover     su negocio"
  const headingLetters = headingText.split("")

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-indigo-950 to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + particle.speed * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: bgY1 }} className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full">
          <div
            className="w-full h-full bg-gradient-to-br from-[#efc901]/20 to-amber-500/10 rounded-full filter blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </motion.div>

        <motion.div style={{ y: bgY2 }} className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full">
          <div
            className="w-full h-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/10 rounded-full filter blur-[150px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </motion.div>

        <motion.div
          style={{ y: bgY3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] rounded-full"
        >
          <div
            className="w-full h-full bg-gradient-to-r from-purple-500/10 to-indigo-500/5 rounded-full filter blur-[100px] animate-pulse"
            style={{ animationDuration: "12s", animationDelay: "2s" }}
          />
        </motion.div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-[15%] w-16 h-16 border-2 border-white/10 rounded-lg"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-32 left-[10%] w-24 h-24 border-2 border-[#efc901]/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
            borderColor: ["rgba(250,204,21,0.2)", "rgba(250,204,21,0.3)", "rgba(250,204,21,0.2)"],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute top-[40%] left-[5%] w-12 h-12 border-2 border-blue-400/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
            borderColor: ["rgba(96,165,250,0.2)", "rgba(96,165,250,0.3)", "rgba(96,165,250,0.2)"],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div style={{ opacity, scale: springScale, y: springY }} className="space-y-10 z-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="space-y-6"
            >
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-1 w-12 bg-gradient-to-r from-[#efc901] to-amber-500" />
                <span className="text-[#efc901] font-medium tracking-wider uppercase text-sm">Sobre Nosotros</span>
              </motion.div>

              <div className="overflow-hidden">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {headingLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        hidden: { y: 40, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: 0.03 * index,
                            duration: 0.5,
                            ease: [0.215, 0.61, 0.355, 1],
                          },
                        },
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h2>
              </div>
            </motion.div>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              <span className="text-white font-semibold">ADAFALABELLA SRL</span> ha ofrecido sus servicios de la más
              alta calidad a los residentes de toda Bolivia desde el año 2020. Un servicio excelente comienza con
              personas excelentes y con mucha experiencia, por lo que nos esforzamos en elegir a los mejores para
              nuestro equipo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.5, opacity: 0, y: 30 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  />

                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${stat.color} mb-4`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {stat.value}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="text-sm text-gray-400"
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
             
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm z-10" />

            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/edificio.jpg')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-transparent" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-20 h-20 border-2 border-white/10 rounded-full z-20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
              }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className="absolute bottom-20 left-4 w-16 h-16 border-2 border-[#efc901]/20 rotate-45 z-20"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.1, 1],
                borderColor: ["rgba(250,204,21,0.2)", "rgba(250,204,21,0.3)", "rgba(250,204,21,0.2)"],
              }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Floating Quote */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              }}
              className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 z-20"
            >
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-[#efc901] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl text-white font-medium italic">
                    ¡No solamente manejamos números, sino también EMOCIONES!
                  </p>
                  <motion.div
                    className="w-0 h-0.5 bg-gradient-to-r from-[#efc901] to-amber-500 mt-3"
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}