import { Hero } from "@/components/hero"
import { Carousel } from "@/components/carousel"
import { ValuesSection } from "@/components/values-section"



export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Carousel />
      <ValuesSection/>
    </main>
  )
}

