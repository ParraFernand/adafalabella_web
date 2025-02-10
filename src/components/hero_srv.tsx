import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
            <Image
                src="/back1.jpg"
                alt="Industrial_Background"
                width={1472}
                height={832}
                className="object-cover w-full"
            />
        
        {/* Gradient Overlay */} 
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/80 z-0 " />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-center md:justify-end mt-[-9%]">

      <div className="text-white text-center md:text-right w-full sm:max-w-lg md:mr-12 font-jafherb">
        {/* Texto Principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Permítenos Impulsar tu negocio
          </h1>

          <p className="text-xl md:text-2xl z-20">
            Asóciate con un proveedor líder en logística que te permita crecer en un mundo que cambia rápidamente.
          </p>
          </div> 
          <div className="hidden md:block md:absolute left-[50%] top-[50%] transform -translate-y-1/2">
          
        </div>
      </div>
    </section>
  )
}
