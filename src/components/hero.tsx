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
          <source src="cielo.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-blue-800/60 via-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-start">
        
<<<<<<< HEAD
      <div className="text-white text-center w-full sm:max-w-md mx-auto md:ml-32 md:-mt-14 font-jafherb">
=======
      <div className="text-yellow-500 text-center w-full sm:max-w-md mx-auto md:ml-32 md:-mt-14 font-jafherb">
>>>>>>> 762d824 (cambios 19)
        {/* Texto Principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenidos a ADAFALABELLA S.R.L
          </h1>

          <p className="text-white text-xl md:text-2xl z-20">
          Nos especializamos en brindar servicios ágiles y eficientes para asegurar que tus importaciones y exportaciones se realicen con exito y sin contratiempo.
          </p>
          </div>
          <div className="hidden md:block absolute inset-0 w-full h-full -z-10 opacity-80"
      style={{
        backgroundColor: "oklch(0.985 0.001 106.423)",  /* Azul Tailwind */
        clipPath: "polygon(65% 0, 90% 0, 80% 100%, 50% 100%)",
      }}
      > </div> 
          <div className="hidden md:block md:absolute left-[50%] top-[46%] transform -translate-y-1/2">
          <Image 
            src="/girl.png" 
            alt="Imagen Descriptiva" 
<<<<<<< HEAD
            width={600} 
=======
            width={510} 
>>>>>>> 762d824 (cambios 19)
            height={400} 
            className="object-contain"

          />
        </div>
      </div>
    </section>
  )
}
