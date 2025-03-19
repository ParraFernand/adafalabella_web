"use client";
import React from "react";
import Image from "next/image";

const services = [
  {
<<<<<<< HEAD
    title: ["TRANSPORTE", "AÉREO"],
    image: "/servicio1-1.png",
    href: "/aereo",
  },
  {
    title: ["TRANSPORTE", "TERRESTRE"],
=======
    title: "Trámite de autorizaciones previas y certificaciones ",
    description: "Simplificamos y gestionamos todas las autorizaciones previas y certificaciones para que tus despachos aduaneros se realicen sin contratiempos.",
    image: "/papeleo1.jpg",
  },
  {
    title: "RITEX ",
    description: "Gestionamos el régimen Ritex (Régimen de Importación Temporal para Exportación) para que tus productos importados temporalmente puedan ser exportados sin problemas.",
>>>>>>> 762d824 (cambios 19)
    image: "/servicio2-1.png",
  },
  {
<<<<<<< HEAD
    title: ["TRANSPORTE", "MARITIMO"],
=======
    title: "Trámites y permisos especiales",
    description: "Gestionamos trámites y permisos especiales para que tus importaciones cumplan con todas las regulaciones específicas.",
>>>>>>> 762d824 (cambios 19)
    image: "/servicio3-1.jpg",
  },
  {
<<<<<<< HEAD
    title: ["OTROS", "SERVICIOS"],
    image: "/cajas.jpg",
    href: "#",
=======
    title: "Gestión ante entidades especializadas",
    description: "Gestionamos trámites ante entidades especializadas como SENASAG y AGEMED para que tus productos cumplan con todas las regulaciones.",
    image: "/papeleo2.jpg",
>>>>>>> 762d824 (cambios 19)
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

export function ServicesGrid() {
  const [expandedServiceIndex, setExpandedServiceIndex] = React.useState<null | number>(null);

  return (
    <section className="relative min-h-screen py-16">
<<<<<<< HEAD
      {/* Imagen de fondo con efecto Parallax */}
      <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center" 
          style={{ backgroundImage: "url('/logis1.jpg')" }}
        >
        <div className="absolute inset-0 bg-black/20"></div>
=======
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/logis1.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900/70 via-transparent"></div>
>>>>>>> 762d824 (cambios 19)
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-12">Nuestros Servicios</h2>

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
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {expandedServiceIndex === index ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                ) : (
               <div className="relative w-full h-full">
                  <Image
                    src="/container.jpg"
                    alt="Placeholder Background"
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-900/50" />
                </div>
                )}
              </div>
<<<<<<< HEAD
              <div className="absolute inset-0 bg-black/50 via-transparent" />
              {/* Contenido */}
              <div className="relative flex flex-col justify-center items-center text-center h-[350px] w-[220px] mx-auto p-6 border border-white/20">
                {service.title.map((line, i) => (
                  <h3 key={i} className={`text-2xl font-bold ${i === 0 ? "text-white" : "text-yellow-400"}`}>
                    {line}
                  </h3>
                ))}
=======
              <div className="absolute inset-0 bg-black/50 via-transparent rounded-2xl" />
              <div className="relative flex flex-col justify-center items-center text-center p-6">
                {expandedServiceIndex === index ? (
                  <div className="text-white text-xl font-bold mb-4">
                    <p>{service.description}</p>
                  </div>
                ) : (
                  <h3 className="text-xl font-bold text-yellow-400">{service.title}</h3>
                )}
>>>>>>> 762d824 (cambios 19)
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
