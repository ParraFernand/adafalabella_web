"use client";
import React from "react";
//import Image from "next/image";

const services = [
  {
    title: "Asesoramiento en comercio exterior",
    description: "Brindamos asesoramiento experto en comercio exterior para que tus operaciones internacionales sean un éxito.",
  },
  {
    title: "Aprovechamiento de incentivos tributarios estatales",
    description: "Te ayudamos a aprovechar los incentivos tributarios estatales disponibles para tus importaciones.",
  },
  {
    title: "Control documental desde origen directo con el proveedor y operadores",
    description: "Gestionamos y controlamos la documentación desde el origen, coordinando directamente con proveedores y operadores.",
  },
  {
    title: "Manejo integral de documentación digital con acceso 24/7",
    description: "Ofrecemos un manejo integral de la documentación digital con acceso 24/7 para que siempre tengas la información a tu alcance.",
  },
];

export function Importacion4() {
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
        <h2 className="text-white text-5xl font-bold text-center mb-12">Asesoramiento y Gestión Documental</h2>

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
