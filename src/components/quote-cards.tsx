import Image from "next/image"

const cards = [
  {
    title: "Acércate",
    question: "¿Por qué somos grandes?",
    color: "bg-black",
    quoteColor: "text-brand-orange",
    content:
      "Porque quienes trabajamos aquí no somos sólo nos mantenedores, nos ocupamos de resultados humanos, diseño, sueños y realidades logísticas.",
  },
  {
    title: "Sorpréndete",
    question: "¿Por qué somos diferentes?",
    color: "bg-brand-orange",
    quoteColor: "text-purple-600",
  },
  {
    title: "Reféscate",
    question: "¿Por qué somos eficientes?",
    color: "bg-red-500",
    quoteColor: "text-[#efc901]",
  },
]

export function QuoteCards() {
  return (
    <section className="relative min-h-screen py-16 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gray-100">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=1000&width=2000" alt="Background Pattern" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Illustration */}
          <div className="lg:w-1/4">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Professional Woman"
              width={400}
              height={600}
              className="grayscale"
            />
          </div>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${card.color} p-6 rounded-lg text-white relative min-h-[300px] flex flex-col justify-between`}
              >
                {/* Quote mark - REMOVED */}
                {/* <span className={`${card.quoteColor} text-6xl font-serif absolute top-2 right-4`}>"</span> */}

                <div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-lg mb-4">{card.question}</p>
                  {card.content && <p className="text-sm opacity-90">{card.content}</p>}
                </div>

                {/* Bottom quote mark - REMOVED */}
                {/* <span className={`${card.quoteColor} text-6xl font-serif absolute bottom-2 right-4`}>"</span> */}
              </div>
            ))}
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/4">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Casual Professional"
              width={400}
              height={600}
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

