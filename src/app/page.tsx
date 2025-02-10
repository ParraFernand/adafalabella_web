import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Carousel } from "@/components/carousel"
import { ServicesGrid } from "@/components/services-grid"
import { QuoteCards } from "@/components/quote-cards"
import { TransportModes } from "@/components/transport-modes"
import { ValuesSection } from "@/components/values-section"
import { GroupBanner } from "@/components/group-banner"
import { NewsGrid } from "@/components/news-grid"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Carousel />
      <QuoteCards />
      <TransportModes />
      <ValuesSection />
      <GroupBanner />
      <NewsGrid />
      <ContactSection />
      
    </main>
  )
}

