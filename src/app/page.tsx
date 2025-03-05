import { Hero } from "@/components/hero"
import { Carousel } from "@/components/carousel"
import { QuoteCards } from "@/components/quote-cards"
import { TransportModes } from "@/components/transport-modes"
import { ValuesSection } from "@/components/values-section"

import { NewsGrid } from "@/components/news-grid"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Carousel />
      <ValuesSection/>
    </main>
  )
}

