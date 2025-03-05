import Image from "next/image"

{/*import { Button } from "@/components/ui/button"*/}


export function HeroAereo() {
  return (
    <section className="relative min-h-screen pt-12 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-start">

      <div className="text-white text-center w-full sm:max-w-md mx-auto md:ml-52 md:-mt-14 font-jafherb">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Servicio Aéreo
          </h1>

          <p className="text-xl md:text-2xl z-20">
            Asóciate con un proveedor líder en logística que te permita crecer en un mundo que cambia rápidamente.
          </p>
          </div> 
          <div className="hidden md:block md:absolute left-[56%] top-[60%] transform -translate-y-1/2">
          <Image 
            src="/capitan.png" 
            alt="Imagen Descriptiva" 
            width={600} 
            height={500} 
            className="object-contain"
          />
          
        </div>
        
      </div>
    </section>
  )
}
