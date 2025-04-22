"use client"
import React from "react"
import { Package2, FileCheck, Truck, Users, Building2, FileText } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const sections = [
  {
    title: "Exportaciones",
    icon: <FileCheck className="w-8 h-8" />,
    services: [
      {
        title: "Asistencia en la cadena logística de exportación",
        description:
          "Facilitamos cada etapa de la cadena logística de exportación, asegurando una coordinación eficiente y un flujo constante de tus mercancías hacia los mercados internacionales.",
          image: "/certificacion.jpg",
      },
      {
        title: "Gestión sanitaria y de origen para la exportación",
        description:
          "Nos encargamos de la gestión sanitaria y certificación de origen de tus productos, cumpliendo con todos los requisitos normativos para garantizar su aceptación en los mercados de destino.",
          image: "/papeleo3.jpg",
        },
      {
      title: "Preparación legal de la empresa para la exportación",
        description:
          "Te ayudamos a preparar tu empresa legalmente para la exportación, asegurando el cumplimiento de todas las normativas y requisitos legales necesarios para una operación exitosa.",
          image: "/permiso.jpg",
      },
      {
        title: "Dosificación de facturas de exportación ante el SIN",
        description:
          "Gestionamos la dosificación de facturas de exportación ante el Servicio de Impuestos Nacionales (SIN), facilitando el proceso fiscal de tus operaciones internacionales.",
          image: "/papeleo4.jpg",
      },
      {
        title: "Trámite de exportación",
        description:
          "Nos encargamos de todos los trámites necesarios para la exportación, desde la documentación hasta la coordinación con las autoridades aduaneras, asegurando una salida eficiente de tus productos hacia el exterior.",
        image: "/papeleo_auto.jpg", 
      },
    ],
  },
]

export function Exportacion1() {
  const [activeSection, setActiveSection] = React.useState(0)
  const [hoveredService, setHoveredService] = React.useState<number | null>(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const [imageMap, setImageMap] = React.useState<Map<string, string>>(new Map())

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
    const newImageMap = new Map<string, string>()
    let imageIndex = 0

    sections.forEach((section) => {
      section.services.forEach((service) => {
        if (!service.image) {
          const serviceId = `${section.title}-${service.title}`
          service.image = "/images/placeholder.jpg";
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
      {/* Hero Section with Enhanced Parallax Effect */}
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
            <h1 className="text-8xl font-merriweather text-center mb-4 animate-fade-in">Servicios de Exportación</h1>
            <span className="block text-4xl font-merriweather text-blue-300 animate-slide-up">Soluciones integrales para tu negocio</span>
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

      {/* Rest of the component remains unchanged */}
      <div className="bg-blue-950 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105
                  ${
                    activeSection === index
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 translate-y-[-2px]"
                      : "bg-blue-800/50 hover:bg-blue-800 hover:shadow-md"
                  }`}
              >
                <div
                  className={`transform transition-transform duration-500 ${activeSection === index ? "rotate-360 scale-110" : ""}`}
                >
                  {section.icon}
                </div>
                <span className="font-medium whitespace-nowrap">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

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

      <div className="relative w-full py-16" ref={(el) => {(sectionRefs.current[activeSection] = el)}}>
        <video className="absolute inset-0 w-full h-full object-cover z-[-1]" autoPlay muted loop>
          <source src="/agua_mar.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-blue-700/40"></div>
        <div className="container mx-auto px-4 flex flex-col gap-8">
          {sections[activeSection].services.map((service, index) => {
            const serviceId = `${sections[activeSection].title}-${service.title}`
            const serviceImage = service.image ||  'path/to/default/placeholder.jpg'
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
                  height: "250px",
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`flex flex-col md:flex-row ${isImageRight ? "md:flex-row-reverse" : ""} h-full`}>
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

                  <div className="relative md:w-1/2 p-8 flex flex-col justify-center transform transition-transform duration-500 group-hover:translate-y-[-4px] h-full">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 ${isImageRight ? "right-0" : "left-0"} w-1/2 h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-${isImageRight ? "right" : "left"}`}
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

        .animate-fade-slide-up {
          opacity: 0;
          animation: fade-slide-up 0.5s ease-out forwards;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

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