import { Button } from "@/components/ui/button"

export function TransportModes() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {/* Air Transport */}
      <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-yellow-400 to-purple-600">
        <div className="absolute top-8 left-8">
          <div className="border border-black px-6 py-2 bg-white/80 backdrop-blur-sm">
            <span className="text-xl font-bold">Por Aire</span>
          </div>
        </div>
        <img
          src="/placeholder.svg?height=600&width=600"
          alt="Airplane"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center p-8 bg-black text-white min-h-[500px]">
        <div className="max-w-md text-center space-y-8">
          <div className="space-y-4">
            <div className="w-12 h-1 bg-white mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Estamos aquí
              <br />
              para mover
              <br />
              su negocio.
            </h2>
            <div className="w-12 h-1 bg-white mx-auto" />
          </div>
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">Descubre nuestros servicios</Button>
        </div>
      </div>

      {/* Sea Transport */}
      <div className="relative h-[500px] overflow-hidden bg-gradient-to-bl from-yellow-400 to-purple-600">
        <div className="absolute top-8 right-8">
          <div className="border border-black px-6 py-2 bg-white/80 backdrop-blur-sm">
            <span className="text-xl font-bold">Por Mar</span>
          </div>
        </div>
        <img
          src="/placeholder.svg?height=600&width=600"
          alt="Cargo Ship"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>
    </section>
  )
}

