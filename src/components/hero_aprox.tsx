
// import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">      
      {/* Content */}
            <div className="relative z-10 container mx-auto px-24 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-start">
              <div className="text-white text-center w-full sm:max-w-md mx-auto md:ml-12 md:-mt-14 font-jafherb">
                {/* Texto Principal */}
                <h1 className="text-5xl md:text-7xl font-bold mb-1">
                    AdaFalabella
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold">
            <br />
               ¡Movemos tu mundo con
               <br />
               EFICIENCIA Y CONFIANZA!
            </h2>
              </div> 
            </div>
    </section>
  )
}
