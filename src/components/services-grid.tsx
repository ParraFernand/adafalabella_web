import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: ["CHARTER", "AÉREO"],
    image: "/servicio1-1.png",
    href: "#", // URL de destino
  },
  {
    title: ["PROYECTOS", "XXL"],
    image: "/servicio2-1.png",
    href: "#",
  },
  {
    title: ["FULL", "&LCL"],
    image: "/servicio3-1.jpg",
    href: "#",
  },
  {
    title: ["3PL &", "BODEGAS"],
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
]

export function ServicesGrid() {
  return (
    <section className="relative min-h-screen py-16">
      {/* Imagen de fondo con efecto Parallax */}
      <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center" 
          style={{ backgroundImage: "url('/logis1.jpg')" }}
        >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido con efecto de desplazamiento */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-12">Nuestros Servicios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group relative block overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              {/* Imagen de Fondo con Efecto Parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title.join(" ")}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-4"
                />
              </div>

              {/* Contenido */}
              <div className="relative flex flex-col justify-center items-center text-center h-[350px] w-[220px] mx-auto p-6 border border-white/20">
                {service.title.map((line, i) => (
                  <h3 key={i} className={`text-2xl font-bold ${i === 0 ? "text-white" : "text-yellow-400"}`}>
                    {line}
                  </h3>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
