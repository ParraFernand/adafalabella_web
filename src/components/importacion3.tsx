"use client";
import React from "react";
//import Image from "next/image";

const services = [
  {
    title: "Admisión temporal",
    description: "Facilitamos la admisión temporal de mercancías para que puedas contar con tus productos de manera ágil y sin complicaciones.",
  },
  {
    title: "Despacho consumo",
    description: "Nos encargamos del despacho de mercancías para consumo, asegurando que cumplan con todas las normativas aduaneras.",
  },
  {
    title: "Despacho anticipado",
    description: "Ofrecemos servicios de despacho anticipado para agilizar la liberación de tus mercancías en el menor tiempo posible.",
  },
  {
    title: "Optimización de despachos aduaneros (sobre carro o anticipado)",
    description: "Ofrecemos optimización en los despachos aduaneros, ya sea sobre carro o anticipado, para agilizar tus operaciones.",    
  },
  {
    title: "Estructuración de planeamiento logístico y aduanero para operaciones en embarques parciales",
    description: "Diseñamos planes logísticos y aduaneros eficientes para tus operaciones en embarques parciales.",
  },
];

export function Importacion3() {
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
        <h2 className="text-white text-5xl font-bold text-center mb-12">Logística y Despacho de Mercancías</h2>

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
