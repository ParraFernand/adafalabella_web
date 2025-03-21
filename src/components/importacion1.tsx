"use client";
import React from "react";
//import Image from "next/image";

const services = [
  {
    title: "Trámite de autorizaciones previas y certificaciones ",
    description: "Simplificamos y gestionamos todas las autorizaciones previas y certificaciones para que tus despachos aduaneros se realicen sin contratiempos.",
    image: "/papeleo1.jpg",
  },
  {
    title: "RITEX ",
    description: "Gestionamos el régimen Ritex (Régimen de Importación Temporal para Exportación) para que tus productos importados temporalmente puedan ser exportados sin problemas.",
    image: "/servicio2-1.png",
  },
  {
    title: "Trámites y permisos especiales",
    description: "Gestionamos trámites y permisos especiales para que tus importaciones cumplan con todas las regulaciones específicas.",
    image: "/servicio3-1.jpg",
  },
  {
    title: "Gestión ante entidades especializadas",
    description: "Gestionamos trámites ante entidades especializadas como SENASAG y AGEMED para que tus productos cumplan con todas las regulaciones.",
    image: "/papeleo2.jpg",
  },
  {
    title: "Autorizaciones previas para vehículos",
    description: "Tramitamos las autorizaciones previas necesarias para la importación de vehículos ante el Viceministerio de Transportes y IBMETRO.",
    image: "/cajas.jpg",
  },
  {
    title: "Certificaciones para equipos médicos",
    description: "Nos encargamos de la certificación de equipos médicos y hospitalarios ante la Autoridad de Tecnologías Nucleares.",
    image: "/papeleo3.jpg",
  },
  {
    title: "Registro y autorizaciones para importación de sustancias controladas",
    description: "Tramitamos el registro y autorizaciones para la importación de sustancias controladas ante el Ministerio de Defensa.",
    image: "/papeleo4.jpg",
  },
  {
    title: "Registro y autorizaciones para importación de ropa",
    description: "Gestionamos el registro y autorizaciones necesarias para la importación de ropa ante el Viceministerio de Comercio y Logística Interna.",
    image: "/papeleo5.jpg",
  },
];

export function Importacion1() {
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
        <h2 className="text-white text-5xl font-bold text-center mb-12">Trámites Aduaneros y Permisos Especiales</h2>

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
