"use client";
import React from "react";
//import Image from "next/image";

const services = [
  {
    title: "Clasificación arancelaria de productos",
    description: "Realizamos la correcta clasificación arancelaria de tus productos, garantizando el cumplimiento de las normativas y optimizando costos.",
    image: "/papeleo1.jpg",
  },
  {
    title: "Clasificación arancelaria para suplementos alimenticios, cosméticos y medicamentos (CCA)",
    description: "Ofrecemos criterios precisos de clasificación arancelaria para suplementos alimenticios, cosméticos y medicamentos.",
    image: "/servicio2-1.png",
  },
  {
    title: "Clasificación arancelaria de equipamiento y maquinaria",
    description: "Nos encargamos de la correcta clasificación arancelaria de tu equipamiento y maquinaria.",
    image: "/servicio3-1.jpg",
  },
  {
    title: "Correlación y certificación de origen",
    description: "Gestionamos la correlación y certificación de origen de tus productos para cumplir con las normativas internacionales.",
    image: "/papeleo2.jpg",
  },
  {
    title: "Análisis de componentes, estructura y clasificación de plantas industriales",
    description: "Realizamos análisis detallados de componentes, estructura y clasificación de plantas industriales para cumplir con las normativas.",
    image: "/cajas.jpg",
  },
  {
    title: "Gestiones de certificaciones técnicas (IBMETRO)",
    description: "Nos encargamos de las gestiones necesarias para obtener certificaciones técnicas de IBMETRO.",
    image: "/papeleo3.jpg",
  },
];

export function Importacion2() {
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
        <h2 className="text-white text-5xl font-bold text-center mb-12">Clasificación Arancelaria y Certificaciones</h2>

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
