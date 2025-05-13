"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

const getOverlayColor = (index: number) => {
  const colors = [
    "bg-black/30",
    "bg-black/50",
    "bg-[#001f3f]/70",
    "bg-[#004d40]/70",
    "bg-[#6d4c41]/70",
    "bg-blue-500/70",
  ]
  return colors[index % colors.length];
}
const services = [
  {
    title: ["Trámites Aduaneros y Certificaciones Generales", "Gestionamos tus trámites y certificaciones para un despacho rápido y seguro"],
    image: "/tramite_aduanero.jpg",
    href: "/importacion",
  },
  {
    title: ["Regímenes Especiales y Beneficios Tributarios", "Aprovecha regímenes especiales y beneficios tributarios con nuestra guía experta."], 
    image: "/regimen_tributario.jpg",
    href: "/importacion2",
  },
  {
    title: ["Clasificación Arancelaria y Asesoramiento", "Optimizamos tus operaciones con clasificación precisa y asesoría aduanera"], 
    image: "/asesoramiento.jpg",
    href: "/importacion3",
  },
  {
    title: ["Permisos y Gestión Sanitaria", "Tramitamos todos los permisos sanitarios y técnicos que tu producto necesita"], 
    image: "/sanitario.jpg",
    href: "/exportacion",
  },
  {
    title: ["Control Operativo y Documental", "Seguimiento completo y documentación organizada desde el origen hasta tu almacén"], 
    image: "/control1.jpg",
    href: "/exportacion",
  },
  {
    title: ["Certificaciones Técnicas y Productos Específicos", "Gestionamos certificaciones y registros para productos con requisitos específicos"], 
    image: "/productos.jpg",
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
    <section ref={sectionRef} className="relative min-h-screen py-6 overflow-hidden">


      {/* Contenido con efecto de desplazamiento */}
      <div className="relative z-10 mx-auto">
        <motion.h2
          ref={titleRef}
          className="text-white text-6xl font-anton text-center mb-4"
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
            SERVICIOS DE IMPORTACIÓN{" "}
            
          </span>
        </motion.h2>

        <div className="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative h-[250px] sm:h-[400px] flex items-center justify-center overflow-hidden transition-all duration-500"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 z-0 ">
                <div className={`absolute inset-0  transition-colors duration-300 ${getOverlayColor(index)} z-20`} />
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title.join(" ")}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0 "
                />
                
              </div>

              {/* Contenido centrado */}
              <div className="relative z-10 text-center p-20 w-full h-full flex flex-col justify-center items-center text-white border border-white/10 transition-all">
                {service.title.map((line, i) => (
                  <motion.h3
                    key={i}
                    className={` ${i === 1 ? "text-2xl font-barlowCondensed text-white " : "text-3xl font-anton text-white "}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {line}
                  </motion.h3>
                ))}
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ height: 0 }}
                  whileHover={{ height: "auto" }}
                >
                  <span className="px-4 py-1 bg-[#efc901] text-black rounded-full text-sm font-barlowCondensed">Ver más</span>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>

        {/* Elementos decorativos animados */}
        <div className="absolute top-20 left-10 -z-10 hidden lg:block">
          <motion.div
            className="w-16 h-16 rounded-full bg-[#efc901]/20 blur-xl"
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
            className="w-24 h-24 rounded-full bg-[#efc901]/20 blur-xl"
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

