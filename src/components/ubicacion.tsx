import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function Ubicacion() {
  return (
    <section className="relative">
      {/* Upper Section */}
      <div className="relative min-h-[60vh] bg-gray-900 flex flex-col items-center justify-center space-y-6 pb-10">
        <div className="absolute inset-0">
          <Image
            src="/santacruz.jpg"
            alt="Industrial_Background"
            width={1000}
            height={832}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container mx-auto h-full px-4 flex flex-row items-center justify-between w-full max-w-6xl">
          {/* Content */}
          <div className="space-y-4 text-left max-w-md text-white">
            <h2 className="text-4xl md:text-5xl font-bold">Ubicación Santa Cruz</h2>
            <p className="text-lg">Encuéntranos en nuestra sede de Santa Cruz.</p>
          </div>
          {/* Google Maps Embedded */}
          <div className="relative w-full max-w-md min-h-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg z-10">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d990.2403421768495!2d-63.180518316974585!3d-17.78588611516313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1740401332319!5m2!1ses!2sbo"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Lower Section */}
      <div className="relative min-h-[60vh] bg-gray-900 flex flex-col items-center justify-center space-y-6 pb-3">
        <div className="absolute inset-0">
          <Image
            src="/La_Paz.jpg"
            alt="Industrial_Background"
            width={1000}          
            height={832}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative container mx-auto h-full px-4 flex flex-row items-center justify-between w-full max-w-6xl">
          {/* Content */}
          <div className="space-y-4 text-left max-w-md text-white">
            <h2 className="text-4xl md:text-5xl font-bold">Ubicación La Paz</h2>
            <p className="text-lg">Visítanos en nuestra sede de La Paz.</p>
          </div>
          {/* Google Maps Embedded */}
          <div className="relative w-full max-w-md min-h-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg z-10">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.1589399824884!2d-68.13373365117452!3d-16.49591785843324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2072379e6ceb%3A0x11760ec76613fe5d!2sPlaza%20Murillo!5e0!3m2!1ses!2sbo!4v1740401826087!5m2!1ses!2sbo"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-xl px-8 py-6">
          Contáctanos
        </Button>
      </div>
    </section>
  )
}

