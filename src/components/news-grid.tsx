import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"
import Image from "next/image"  // Asegúrate de importar Image de next/image

const newsItems = [
  {
    date: "14 ago 2024",
    title: "¡Celebramos en Paraguay!",
    image: "/placeholder.svg?height=400&width=300",
    color: "from-orange-500",
  },
  {
    date: "25 jul 2024",
    title: "23 máquinas sobredimensionadas de Bolivia por Chile hacia Colombia",
    image: "/placeholder.svg?height=400&width=300",
    color: "from-amber-700",
  },
  {
    date: "20 jul 2024",
    title: "¡3er reconocimiento Great Place to Work Colombia!",
    image: "/placeholder.svg?height=400&width=300",
    color: "from-orange-600",
  },
  {
    date: "18 jul 2024",
    title: "Masterline 21 Años",
    image: "/placeholder.svg?height=400&width=300",
    color: "from-red-500",
  },
  {
    date: "18 mar 2024",
    title: "¡Lo mejor está por venir! Masterline App",
    image: "/placeholder.svg?height=400&width=300",
    color: "from-amber-800",
  },
  {
    date: "15 mar 2024",
    title: "Masterline en acción, Unidos para crecer",
    image: "/placeholder.svg?height=400&width=300",
    color: "from-orange-300",
  },
]

export function NewsGrid() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ENTÉRATE DE LO NUEVO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer h-[400px]">
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}  // Especifica el width y height de la imagen
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-black/80 opacity-70`} />
                </div>
                <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <CalendarDays className="h-4 w-4" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
