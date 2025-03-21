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
      }
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
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/45 to-black/45 text-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-[60vh] bg-cover bg-center bg-fixed transform transition-transform duration-1000"
        style={{
          backgroundImage: "url('cajas_amarillas.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl font-bold text-center mb-4 animate-fade-in">
              Servicios de Importación
            </h1>
            <span className="block text-3xl text-blue-300 animate-slide-up">
              Soluciones integrales para tu negocio
            </span>
          </div>
        </div>
      </div>

      {/* Animated Navigation */}
      <div className="bg-blue-900/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105
                  ${activeSection === index 
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50 translate-y-[-2px]' 
                    : 'bg-blue-900/50 hover:bg-blue-800 hover:shadow-md'}`}
              >
                <div className={`transform transition-transform duration-500 ${activeSection === index ? 'rotate-360 scale-110' : ''}`}>
                  {section.icon}
                </div>
                <span className="font-medium whitespace-nowrap">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Background for Services */}
      <div className="relative container mx-auto px-4 py-16">
                <video className="absolute inset-0 w-full h-full object-cover z-[-1]" autoPlay muted loop>
            <source src="/agua_mar.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections[activeSection].services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500
                ${hoveredService === index ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}
                transform transition-all duration-500 hover:shadow-xl
                animate-fade-slide-up`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/90 group-hover:from-blue-800/90 group-hover:to-black transition-all duration-500" />
              <div className="relative p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl font-bold mb-4 text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2">
                  {service.description}
                </p>
              </div>

              {/* Multiple animated borders */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes fade-slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-fade-slide-up {
          opacity: 0;
          animation: fade-slide-up 0.5s ease-out forwards;
        }

        .rotate-360 {
          animation: rotate360 0.5s ease-out;
        }

        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
