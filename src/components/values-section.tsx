import Image from "next/image"  // Importa Image de next/image

export function ValuesSection() {
  const values = [
    {
      title: "ESCUCHAMOS",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-orange-500 to-red-600",
      align: "justify-start",
      width: "w-2/3",
    },
    {
      title: "ABRAZAMOS",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-purple-500 to-pink-500",
      align: "justify-end",
      width: "w-2/3",
    },
    {
      title: "CREAMOS",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-pink-500 to-rose-600",
      align: "justify-start",
      width: "w-2/3",
    },
    {
      title: "EMPUJAMOS",
      image: "/placeholder.svg?height=300&width=800",
      color: "from-yellow-500 to-orange-600",
      align: "justify-end",
      width: "w-2/3",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="space-y-8">
        {values.map((value, index) => (
          <div key={index} className={`flex ${value.align}`}>
            <div className={`relative overflow-hidden rounded-lg ${value.width}`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} mix-blend-multiply`} />
              <Image
                src={value.image || "/placeholder.svg"}
                alt={value.title}
                width={800}  // Especifica el width y height para optimización
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center p-8">
                <h3 className="text-4xl md:text-5xl font-bold text-white">{value.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
