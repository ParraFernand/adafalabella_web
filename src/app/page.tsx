import { Hero } from "@/components/hero"
import { Carousel } from "@/components/carousel"
import { SociosEstrategicos } from "@/components/socios_estrategicos"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Carousel />
      <SociosEstrategicos />
    </main>
  )
}

