import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="relative">
      {/* Upper Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/back1"
            alt="City Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto h-full px-4">
          <div className="flex items-center h-full max-w-2xl">
            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Opportunities
                <br />
                don't happen
              </h2>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-brand-orange">YOU</p>
                <p className="text-3xl md:text-4xl font-bold text-brand-orange">CREATE</p>
                <p className="text-3xl md:text-4xl font-bold text-brand-orange">THEM</p>
              </div>
              {/* Pink Square */}
              <div className="absolute bottom-0 left-[20%] w-64 h-64 bg-pink-600 transform translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/bak2.jpg"
            alt="Map Background"
            className="w-full h-full object-cover grayscale"
          />
          {/* Location Markers */}
          {[...Array(5)].map((_, i) => (
            <MapPin
              key={i}
              className="absolute text-brand-orange w-8 h-8"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
        </div>
        <div className="relative container mx-auto h-full px-4 flex items-center justify-center">
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-xl px-8 py-6">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  )
}

