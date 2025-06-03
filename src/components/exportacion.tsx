"use client"

import Link from "next/link"
import Image from "next/image"

export function Exportacion() {
  return (
    <section className="my-8 text-center">
  <h3 className="text-white md:text-6xl text-4xl font-anton mb-14">
     SERVICIOS DE EXPORTACIÓN
  </h3>

  <Link
    href="/exportacion"
    className="group relative h-[180px] sm:h-[340px] w-full mx-auto flex items-center justify-center overflow-hidden transition-all duration-500 mb-28"
  >
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-yellow-400/20 transition-colors duration-300 z-20" />
      <Image
        src="/exportar.jpg"
        alt="Explora todos nuestros servicios"
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
      />
    </div>

    <div className="relative z-10 text-white text-2xl md:text-3xl font-anton">
      Servicios de Exportación
    </div>
  </Link>
</section>

  )
}
