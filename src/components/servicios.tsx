"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

const services = [
  {
    title: ["SERVICIOS", "IMPORTACIÓN"],
    image: "/servicio1-1.png",
    href: "/importacion",
  },
  {
    title: ["SERVICIOS", "EXPORTACIÓN"], // Corregido "EXPERTACIÓN" a "EXPORTACIÓN"
    image: "/servicio2-1.png",
    href: "/exportacion",
  },
]

export function ServiciosPage() {
  // Referencias para animaciones basadas en scroll
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  // Detectar cuando elementos están en el viewport
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
  const isImageInView = useInView(imageRef, { once: true })

  // Controles de animación
  const titleControls = useAnimation()
  const cardsControls = useAnimation()
  const imageControls = useAnimation()

  // Efecto parallax para el fondo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Iniciar animaciones cuando los elementos entran en el viewport
  useEffect(() => {
    if (isTitleInView) {
      titleControls.start("visible")
    }
    if (isSectionInView) {
      cardsControls.start("visible")
    }
    if (isImageInView) {
      imageControls.start("visible")
    }
  }, [isTitleInView, isSectionInView, isImageInView, titleControls, cardsControls, imageControls])

  // Animación flotante continua para la imagen central
  useEffect(() => {
    imageControls.start({
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    })
  }, [imageControls])

  return (
    <section ref={sectionRef} className="relative min-h-screen py-16 overflow-hidden">
      {/* Video de fondo con efecto Parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        <video autoPlay loop muted className="object-cover w-full h-full absolute top-0 left-0">
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-800/60"></div>
      </motion.div>

      {/* Contenido con efecto de desplazamiento */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          ref={titleRef}
          className="text-white text-5xl font-bold text-center mb-12"
          initial="hidden"
          animate={titleControls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <span className="inline-block">
            Nuestros{" "}
            <span className="relative">
              Servicios
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 items-center">
          {/* Primer servicio */}
          <motion.div
            initial="hidden"
            animate={cardsControls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <Link
              href={services[0].href}
              className="group relative flex items-center justify-center overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl h-[300px] w-full"
            >
              {/* Imagen de Fondo con Efecto Parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={services[0].image || "/placeholder.svg"}
                  alt={services[0].title.join(" ")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:translate-y-4"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 transition-opacity duration-300 group-hover:opacity-80"></div>

              {/* Contenido centrado */}
              <div className="relative flex flex-col justify-center items-center text-center h-full w-full p-6 border border-white/20 transition-all duration-500 group-hover:border-yellow-400/50">
                {services[0].title.map((line, i) => (
                  <motion.h3
                    key={i}
                    className={`text-2xl font-bold ${i === 0 ? "text-white" : "text-yellow-400"}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    {line}
                  </motion.h3>
                ))}
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0 }}
                  whileHover={{ height: "auto" }}
                >
                  <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">Ver más</span>
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Imagen PNG en el centro (más grande) */}
          <motion.div
            ref={imageRef}
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageControls}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <Image
                src="/mujer_ada1.png"
                alt="Imagen central"
                width={1500}
                height={1500}
                className="my-8 drop-shadow-2xl"
              />
              <motion.div
                className="absolute -inset-4 rounded-full bg-yellow-400/20 -z-10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>

          {/* Segundo servicio */}
          <motion.div
            initial="hidden"
            animate={cardsControls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                },
              },
            }}
          >
            <Link
              href={services[1].href}
              className="group relative flex items-center justify-center overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl h-[300px] w-full"
            >
              {/* Imagen de Fondo con Efecto Parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={services[1].image || "/placeholder.svg"}
                  alt={services[1].title.join(" ")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:translate-y-4"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 transition-opacity duration-300 group-hover:opacity-80"></div>

              {/* Contenido centrado */}
              <div className="relative flex flex-col justify-center items-center text-center h-full w-full p-6 border border-white/20 transition-all duration-500 group-hover:border-yellow-400/50">
                {services[1].title.map((line, i) => (
                  <motion.h3
                    key={i}
                    className={`text-2xl font-bold ${i === 0 ? "text-white" : "text-yellow-400"}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                  >
                    {line}
                  </motion.h3>
                ))}
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0 }}
                  whileHover={{ height: "auto" }}
                >
                  <span className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-medium">Ver más</span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Elementos decorativos animados */}
        <div className="absolute top-20 left-10 -z-10 hidden lg:block">
          <motion.div
            className="w-16 h-16 rounded-full bg-yellow-400/20 blur-xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
        <div className="absolute bottom-20 right-10 -z-10 hidden lg:block">
          <motion.div
            className="w-24 h-24 rounded-full bg-yellow-400/20 blur-xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </div>
    </section>
  )
}

