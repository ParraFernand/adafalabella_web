import Image from "next/image"

{/*import { Button } from "@/components/ui/button"*/}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
      <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="logisv.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50 via-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-start">

      {/*<div className="relative bg-indigo-300 px-8 py-14 rounded-lg text-[#e8bf1c] text-center w-full sm:max-w-lg shadow-lg">*/}
      <div className="text-white text-center w-full sm:max-w-md mx-auto md:ml-24 md:-mt-14 font-jafherb">
        {/* <div className="max-w-md bg-indigo-300 px-6 py-12 rounded-lg text-[#e8bf1c] text-center w-full sm:w-auto">*/}
        {/* Texto Principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Permítenos Impulsar tu negocio
          </h1>

          <p className="text-xl md:text-2xl z-20">
            Asóciate con un proveedor líder en logística que te permita crecer en un mundo que cambia rápidamente.
          </p>
          </div> 
          <div className="hidden md:block md:absolute left-[46%] top-[60%] transform -translate-y-1/2">
          <Image 
            src="/girl.png" 
            alt="Imagen Descriptiva" 
            width={450} 
            height={400} 
            className="object-contain"
          />
          
        </div>
      </div>
    </section>
  )
}
