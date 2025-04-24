"use client"
import { Package2, FileCheck, Truck, Users, Building2, FileText } from "lucide-react"
import React, { useState, useEffect } from "react";
import Image from "next/image"
import { motion } from "framer-motion"

const placeholderImages = [
  "/service-placeholder-1.jpg",
  "/service-placeholder-2.jpg",
  "/service-placeholder-3.jpg",
  "/service-placeholder-4.jpg",
  "/service-placeholder-5.jpg",
  "/service-placeholder-6.jpg",
  "/service-placeholder-7.jpg",
  "/service-placeholder-8.jpg",
  "/service-placeholder-9.jpg",
  "/service-placeholder-10.jpg",
  "/service-placeholder-11.jpg",
  "/service-placeholder-12.jpg",
]
const sections = [
  {
    title: "Trámites Aduaneros y Permisos Especiales",
    icon: <FileCheck className="w-8 h-8" />,
    services: [
      {
        title: "Trámite de autorizaciones previas y certificaciones",
        description:
          "Simplificamos y gestionamos todas las autorizaciones previas y certificaciones para que tus despachos aduaneros se realicen sin contratiempos.",
          image: "/certificacion.jpg",
      },
      {
        title: "RITEX",
        description:
          "Gestionamos el régimen Ritex (Régimen de Importación Temporal para Exportación) para que tus productos importados temporalmente puedan ser exportados sin problemas.",
          image: "/papeleo1.jpg",
        },
      {
        title: "Trámites y permisos especiales",
        description:
          "Gestionamos trámites y permisos especiales para que tus importaciones cumplan con todas las regulaciones específicas.",
          image: "/permiso.jpg",
      },
      {
        title: "Gestión ante entidades especializadas (SENASAG, AGEMED, etc.)",
        description:
          "Gestionamos trámites ante entidades especializadas como SENASAG y AGEMED para que tus productos cumplan con todas las regulaciones.",
          image: "/papeleo5.jpg",
      },
      {
        title: "Gestión de autorizaciones previas para vehículos (VICEMINISTERIO DE TRANSPORTES, IBMETRO)",
        description:
          "Tramitamos las autorizaciones previas necesarias para la importación de vehículos ante el Viceministerio de Transportes y IBMETRO.",
        image: "/papeleo_auto.jpg", 
      },
      {
        title: "Gestión de certificaciones para equipos médicos y hospitalarios (AUTORIDAD DE TECNOLOGÍAS NUCLEARES)",
        description:
          "Nos encargamos de la certificación de equipos médicos y hospitalarios ante la Autoridad de Tecnologías Nucleares.",
      },
      {
        title:
          "Gestión de registro y autorizaciones para importación de sustancias controladas (MINISTERIO DE DEFENSA)",
        description:
          "Tramitamos el registro y autorizaciones para la importación de sustancias controladas ante el Ministerio de Defensa.",
      },
      {
        title: "Registro y autorizaciones para importación de ropa (VICEMINISTERIO DE COMERCIO Y LOGÍSTICA INTERNA)",
        description:
          "Gestionamos el registro y autorizaciones necesarias para la importación de ropa ante el Viceministerio de Comercio y Logística Interna",
      },
    ],
  },
  {
    title: "Clasificación Arancelaria y Certificaciones",
    icon: <Package2 className="w-8 h-8" />,
    services: [
      {
        title: "Clasificación arancelaria de productos",
        description:
          "Realizamos la correcta clasificación arancelaria de tus productos, garantizando el cumplimiento de las normativas y optimizando costos.",
      },
      {
        title: "Clasificación arancelaria para suplementos",
        description:
          "Ofrecemos criterios precisos de clasificación arancelaria para suplementos alimenticios, cosméticos y medicamentos.",
      },
      {
        title: "Clasificación arancelaria de equipamiento y maquinaria",
        description: "Nos encargamos de la correcta clasificación arancelaria de tu equipamiento y maquinaria.",
      },
      {
        title: "Correlación y certificación de origen",
        description:
          "Gestionamos la correlación y certificación de origen de tus productos para cumplir con las normativas internacionales.",
      },
      {
        title: "Análisis de componentes, estructura y clasificación de plantas industriales",
        description:
          "Realizamos análisis detallados de componentes, estructura y clasificación de plantas industriales para cumplir con las normativas.",
      },
      {
        title: "Gestiones de certificaciones técnicas (IBMETRO)",
        description: "Nos encargamos de las gestiones necesarias para obtener certificaciones técnicas de IBMETRO.",
      },
    ],
  },
  {
    title: "Logística y Despacho de Mercancías",
    icon: <Truck className="w-8 h-8" />,
    services: [
      {
        title: "Admisión temporal",
        description:
          "Facilitamos la admisión temporal de mercancías para que puedas contar con tus productos de manera ágil y sin complicaciones.",
      },
      {
        title: "Despacho consumo",
        description:
          "Nos encargamos del despacho de mercancías para consumo, asegurando que cumplan con todas las normativas aduaneras.",
      },
      {
        title: "Optimización de despachos aduaneros (sobre carro o anticipado)",
        description:
          "Ofrecemos optimización en los despachos aduaneros, ya sea sobre carro o anticipado, para agilizar tus operaciones.",
      },
      {
        title: "Estructuración de planeamiento logístico y aduanero para operaciones en embarques parciales",
        description: "Diseñamos planes logísticos y aduaneros eficientes para tus operaciones en embarques parciales.",
      },
    ],
  },
  {
    title: "Asesoramiento y Gestión Documental",
    icon: <Users className="w-8 h-8" />,
    services: [
      {
        title: "Asesoramiento en comercio exterior",
        description:
          "Brindamos asesoramiento experto en comercio exterior para que tus operaciones internacionales sean un éxito.",
      },
      {
        title: "Aprovechamiento de incentivos tributarios estatales",
        description:
          "Te ayudamos a aprovechar los incentivos tributarios estatales disponibles para tus importaciones.",
      },
      {
        title: "Control documental desde origen directo con el proveedor y operadores",
        description:
          "Gestionamos y controlamos la documentación desde el origen, coordinando directamente con proveedores y operadores.",
      },
      {
        title: "Manejo integral de documentación digital con acceso 24/7",
        description:
          "Ofrecemos un manejo integral de la documentación digital con acceso 24/7 para que siempre tengas la información a tu alcance.",
      },
    ],
  },
  {
    title: "Inspección, Seguimiento y Control",
    icon: <FileText className="w-8 h-8" />,
    services: [
      {
        title: "Inspección de la mercadería",
        description:
          "Realizamos inspecciones exhaustivas de tus mercancías para asegurarnos de que cumplan con los estándares de calidad y normativas vigentes.",
        image: "/papeleo1.jpg",
      },
      {
        title: "Seguimiento de envíos",
        description:
          "Ofrecemos un seguimiento continuo de tus envíos, manteniéndote informado en cada etapa del proceso.",
        image: "/servicio2-1.png",
      },
      {
        title: "Control sistémico desde origen hasta sus almacenes",
        description:
          "Implementamos un control sistémico desde el origen hasta tus almacenes para asegurar la integridad y seguridad de tus mercancías.",
        image: "/servicio3-1.jpg",
      },
      {
        title: "Optimización de costos aduaneros",
        description:
          "Analizamos y optimizamos tus costos aduaneros para que ahorres tiempo y dinero en tus importaciones.",
        image: "/papeleo2.jpg",
      },
    ],
  },
  {
    title: "Gestión Sanitaria",
    icon: <Building2 className="w-8 h-8" />,
    services: [
      {
        title: "Gestión sanitaria de importaciones",
        description:
          "Nos encargamos de la gestión sanitaria de tus importaciones, asegurando el cumplimiento de todas las normativas de salud.",
        image: "/papeleo1.jpg",
      },
      {
        title: "Gestión sanitaria de los CDA de importación",
        description:
          "Nos ocupamos de la gestión sanitaria de los Certificados de Destinación Aduanera (CDA) de importación.",
        image: "/servicio2-1.png",
      },
    ],
  },
]

export function Importacion1() {
  const [activeSection, setActiveSection] = React.useState(0)
  const [hoveredService, setHoveredService] = React.useState<number | null>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [imageMap, setImageMap] = React.useState<Map<string, string>>(new Map())
  const [scale, setScale] = useState(1);

  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const scrollToSection = (index: number) => {
    setActiveSection(index)
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // For smooth scrolling
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  React.useEffect(() => {
    // Asignar imágenes únicas a cada servicio
    const newImageMap = new Map<string, string>()
    let imageIndex = 0

    sections.forEach((section) => {
      section.services.forEach((service) => {
        if (!service.image) {
          // Usar el ID único del servicio (título) como clave
          const serviceId = `${section.title}-${service.title}`
          if (!newImageMap.has(serviceId)) {
            newImageMap.set(serviceId, placeholderImages[imageIndex % placeholderImages.length])
            imageIndex++
          }
        }
      })
    })

    setImageMap(newImageMap)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const serviceCards = document.querySelectorAll(".animate-fade-slide-up")

      serviceCards.forEach((card, index) => {
        const cardElement = card as HTMLElement
        const delay = index * 0.05
        const translateY = Math.max(-20, -scrollY * 0.05 + delay * 10)
        cardElement.style.transform = `translateY(${translateY}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/45 to-black/45 text-white overflow-hidden">
      {/* Hero Section with Enhanced Parallax Effect - Similar to Carousel */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Background container with animations */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0.4 }}
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image 
              src="/cajas.jpg" 
              alt="Background" 
              fill 
              className="object-cover mix-blend-overlay" 
              priority 
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Decorative Elements */}
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

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <h1 className="text-8xl font-merriweather text-center mb-4 animate-fade-in">Servicios de Importación</h1>
            <span className="block text-5xl font-merriweather text-blue-300 animate-slide-up">Soluciones integrales para tu negocio</span>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="cursor-pointer scroll-indicator-container" onClick={() => scrollToSection(0)}>
            <div className="scroll-indicator">
              <div className="scroll-indicator-text">Descubre</div>
              <div className="scroll-indicator-arrow">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Navigation */}
      <div className="bg-blue-950 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Cambia flex + overflow-x-auto por grid */}
          <div className="grid grid-cols-3 gap-4 py-4"> {/* 3 columnas */}
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105
                  ${
                    activeSection === index
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 translate-y-[-2px]"
                      : "bg-blue-800/50 hover:bg-blue-800 hover:shadow-md"
                  }`}
              >
                <div
                  className={`transform transition-transform duration-500 ${
                    activeSection === index ? "rotate-360 scale-110" : ""
                  }`}
                >
                  {section.icon}
                </div>
                <span className="font-medium whitespace-nowrap">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add this scroll progress indicator after the navigation section */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(index)}
              className={`scroll-dot cursor-pointer transition-all duration-300 relative group`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${activeSection === index ? "bg-blue-400 scale-125" : "bg-gray-400 scale-100"}
                `}
              ></div>
              <div
                className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-blue-900/90 text-white text-sm py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}
              >
                {section.title}
              </div>
              {activeSection === index && (
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-blue-400 animate-ping"></div>
              )}
            </div>
          ))}
          <div className="w-px h-32 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
      </div>

      {/* Video Background for Services - Eliminado el margen gris */}
      <div 
        className="relative w-full py-16" 
        ref={(el) => {(sectionRefs.current[activeSection] = el)}}>
        <video className="absolute inset-0 w-full h-full object-cover z-[-1]" autoPlay muted loop>
          <source src="/videoservicio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-700/40"></div>
        <div className="container mx-auto px-4 flex flex-col gap-8">
          {sections[activeSection].services.map((service, index) => {
            // Obtener una imagen única para este servicio
            const serviceId = `${sections[activeSection].title}-${service.title}`
            const serviceImage = service.image || imageMap.get(serviceId) || placeholderImages[0]

            // Determinar si la imagen va a la izquierda o a la derecha
            const isImageRight = index % 2 === 0

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500
                  ${hoveredService === index ? "scale-[1.02] rotate-[0.5deg]" : "scale-100 rotate-0"}
                  transform transition-all duration-500 hover:shadow-xl
                  animate-fade-slide-up bg-gradient-to-b from-blue-900/80 to-black/90 group-hover:from-blue-800/90 group-hover:to-black`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  height: "250px", // Altura fija para todos los servicios
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`flex flex-col md:flex-row ${isImageRight ? "md:flex-row-reverse" : ""} h-full`}>
                  {/* Imagen - Tamaño fijo */}
                  <div className="relative md:w-1/2 h-64 md:h-full overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={serviceImage || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 ${isImageRight ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-blue-900/80 to-transparent`}
                    />
                  </div>

                  {/* Contenido - Tamaño fijo */}
                  <div className="relative md:w-1/2 p-8 flex flex-col justify-center transform transition-transform duration-500 group-hover:translate-y-[-4px] h-full">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Borde animado */}
                <div
                  className={`absolute bottom-0 ${isImageRight ? "right-0" : "left-0"} w-1/2 h-1 bg-[#efc901] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-${isImageRight ? "right" : "left"}`}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fade-slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-fade-slide-up {
          opacity: 0;
          animation: fade-slide-up 0.5s ease-out forwards;
        }

        .rotate-360 {
          animation: rotate360 0.5s ease-out;
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(8px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }

        @keyframes chevron-animation {
          0% {
            opacity: 0;
            transform: translateY(-16px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(0);
          }
        }

        .scroll-indicator-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          transform: translateY(-4px);
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .scroll-indicator-text {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
        }

        .scroll-indicator-arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 24px;
        }

        .chevron {
          position: relative;
          width: 16px;
          height: 4px;
          opacity: 0;
          transform: translateY(-16px);
          animation: chevron-animation 1.5s ease-out infinite;
        }

        .chevron:nth-child(1) {
          animation-delay: 0s;
        }

        .chevron:nth-child(2) {
          animation-delay: 0.3s;
        }

        .chevron:nth-child(3) {
          animation-delay: 0.6s;
        }

        .chevron:before,
        .chevron:after {
          content: '';
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          background: #3b82f6;
        }

        .chevron:before {
          left: 0;
          transform: skewY(30deg);
        }

        .chevron:after {
          right: 0;
          transform: skewY(-30deg);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #1e3a8a);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60a5fa, #2563eb);
        }

        /* Add parallax effect to service cards */
        .animate-fade-slide-up {
          opacity: 0;
          animation: fade-slide-up 0.5s ease-out forwards;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        /* Limitar líneas de texto */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}