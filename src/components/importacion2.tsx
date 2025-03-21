"use client";
import React from 'react';
import { Package2, FileCheck, Truck, Users, Building2, FileText } from 'lucide-react';

const sections = [
  {
    title: "Trámites Aduaneros y Permisos Especiales",
    icon: <FileCheck className="w-8 h-8" />,
    services: [
      {
        title: "Trámite de autorizaciones previas y certificaciones",
        description: "Simplificamos y gestionamos todas las autorizaciones previas y certificaciones para que tus despachos aduaneros se realicen sin contratiempos.",
      },
      {
        title: "RITEX",
        description: "Gestionamos el régimen Ritex (Régimen de Importación Temporal para Exportación) para que tus productos importados temporalmente puedan ser exportados sin problemas.",
      },
      {
        title: "Trámites y permisos especiales",
        description: "Gestionamos trámites y permisos especiales para que tus importaciones cumplan con todas las regulaciones específicas.",
      },
      {
        title: "Gestión ante entidades especializadas (SENASAG, AGEMED, etc.)",
        description: "Gestionamos trámites ante entidades especializadas como SENASAG y AGEMED para que tus productos cumplan con todas las regulaciones.",
      },
      {
        title: "Gestión de autorizaciones previas para vehículos (VICEMINISTERIO DE TRANSPORTES, IBMETRO)",
        description: "Tramitamos las autorizaciones previas necesarias para la importación de vehículos ante el Viceministerio de Transportes y IBMETRO.",
      },
      {
        title: "Gestión de certificaciones para equipos médicos y hospitalarios (AUTORIDAD DE TECNOLOGÍAS NUCLEARES)",
        description: "Nos encargamos de la certificación de equipos médicos y hospitalarios ante la Autoridad de Tecnologías Nucleares.",
      },
      {
        title: "Gestión de registro y autorizaciones para importación de sustancias controladas (MINISTERIO DE DEFENSA)",
        description: "Tramitamos el registro y autorizaciones para la importación de sustancias controladas ante el Ministerio de Defensa.",
      },
      {
        title: "Registro y autorizaciones para importación de ropa (VICEMINISTERIO DE COMERCIO Y LOGÍSTICA INTERNA)",
        description: "Gestionamos el registro y autorizaciones necesarias para la importación de ropa ante el Viceministerio de Comercio y Logística Interna",
      },
 
    ]
  },
  {
    title: "Clasificación Arancelaria y Certificaciones",
    icon: <Package2 className="w-8 h-8" />,
    services: [
      {
        title: "Clasificación arancelaria de productos",
        description: "Realizamos la correcta clasificación arancelaria de tus productos, garantizando el cumplimiento de las normativas y optimizando costos.",
      },
      {
        title: "Clasificación arancelaria para suplementos",
        description: "Ofrecemos criterios precisos de clasificación arancelaria para suplementos alimenticios, cosméticos y medicamentos.",
      },
      {
        title: "Clasificación arancelaria de equipamiento y maquinaria",
        description: "Nos encargamos de la correcta clasificación arancelaria de tu equipamiento y maquinaria.",
      },
      {
        title: "Correlación y certificación de origen",
        description: "Gestionamos la correlación y certificación de origen de tus productos para cumplir con las normativas internacionales.",
      },
      {
        title: "Análisis de componentes, estructura y clasificación de plantas industriales",
        description: "Realizamos análisis detallados de componentes, estructura y clasificación de plantas industriales para cumplir con las normativas.",
       
      },
      {
        title: "Gestiones de certificaciones técnicas (IBMETRO)",
        description: "Nos encargamos de las gestiones necesarias para obtener certificaciones técnicas de IBMETRO.",
       
      },
      
    ]
  },
  {
    title: "Logística y Despacho de Mercancías",
    icon: <Truck className="w-8 h-8" />,
    services: [
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
    ]
  },
  {
    title: "Asesoramiento y Gestión Documental",
    icon: <Users className="w-8 h-8" />,
    services: [
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
      ]
    },
  {
    title: "Inspección, Seguimiento y Control",
    icon: < FileText className="w-8 h-8" />,
    services: [
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
      
    ]
  },
  {
    title: "Gestión Sanitaria",
    icon: <Building2 className="w-8 h-8" />,
    services: [
      {
        title: "Gestión sanitaria de importaciones",
        description: "Nos encargamos de la gestión sanitaria de tus importaciones, asegurando el cumplimiento de todas las normativas de salud.",
        image: "/papeleo1.jpg",
      },
      {
        title: "Gestión sanitaria de los CDA de importación",
        description: "Nos ocupamos de la gestión sanitaria de los Certificados de Destinación Aduanera (CDA) de importación.",
        image: "/servicio2-1.png",
      },
      
    ]
  },
];

export function Importacion1() {
  const [activeSection, setActiveSection] = React.useState(0);
  const [hoveredService, setHoveredService] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Hero Section */}
      <div 
        className="relative h-[45vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('cajas_amarillas.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center">
            Servicios de Importación
            <span className="block text-2xl mt-4 text-blue-300">
              Soluciones integrales para tu negocio
            </span>
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-blue-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all whitespace-nowrap
                  ${activeSection === index 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-blue-900/50 hover:bg-blue-800'}`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections[activeSection].services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300
                ${hoveredService === index ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/90 group-hover:from-blue-800/90 group-hover:to-black transition-all duration-300" />
              
              <div className="relative p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-300 group-hover:text-blue-200">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
