"use client";
import React from "react";
//import Image from "next/image";

const services = [
  {
    title: "Inspección de la mercadería",
    description: "Realizamos inspecciones exhaustivas de tus mercancías para asegurarnos de que cumplan con los estándares de calidad y normativas vigentes.",
    image: "/papeleo1.jpg",
  },
  {
    title: "Seguimiento de envíos",
    description: "Ofrecemos un seguimiento continuo de tus envíos, manteniéndote informado en cada etapa del proceso.",
    image: "/servicio2-1.png",
  },
  {
    title: "Control sistémico desde origen hasta sus almacenes",
    description: "Implementamos un control sistémico desde el origen hasta tus almacenes para asegurar la integridad y seguridad de tus mercancías.",
    image: "/servicio3-1.jpg",
  },
  {
    title: "Optimización de costos aduaneros",
    description: "Analizamos y optimizamos tus costos aduaneros para que ahorres tiempo y dinero en tus importaciones.",
    image: "/papeleo2.jpg",
  },
];

export function Importacion5() {
  const [expandedServiceIndex, setExpandedServiceIndex] = React.useState<null | number>(null);

  return (
    <section className="relative min-h-screen py-16">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/logis1.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/70 via-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-12">Inspección, Seguimiento y Control</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative grid overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform ${
                expandedServiceIndex === index
                  ? "w-full md:w-[250px] lg:w-[300px] xl:w-[350px] h-[300px] lg:h-[250px] z-50 scale-110"
                  : "w-full sm:w-[200px] md:w-[250px] h-[170px] scale-100"
              }`}
              onMouseEnter={() => setExpandedServiceIndex(index)}
              onMouseLeave={() => setExpandedServiceIndex(null)}
              style={{ zIndex: expandedServiceIndex === index ? 50 : 1 }}
            >
              
              <div className="absolute inset-0 bg-black/50 via-transparent rounded-2xl" />
              <div className="relative flex flex-col justify-center items-center text-center p-6">
                {expandedServiceIndex === index ? (
                  <div className="text-white text-xl font-bold mb-4">
                    <p>{service.description}</p>
                  </div>
                ) : (
                  <h3 className="text-xl font-bold text-yellow-400">{service.title}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
