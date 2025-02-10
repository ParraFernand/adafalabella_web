import { Button } from "@/components/ui/button"

export function GroupBanner() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=600&width=1600"
          alt="Masterline Containers"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full px-4">
        <div className="flex flex-col justify-end h-full pb-16 max-w-lg">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              MASTERLINE
              <br />
              GROUP
            </h2>
            <p className="text-lg text-white/90">
              Se consolida año tras año con una meta clara y contundente: ser una de las grandes empresas globales
              latinoamericanas de logística internacional.
            </p>
            <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
              Más Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

