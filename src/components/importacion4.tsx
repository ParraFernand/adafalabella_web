'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Importacion4() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const { scrollYProgress: progress1 } = useScroll({
    target: ref1,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(progress1, [0, 1], ['0%', '30%']);

  const { scrollYProgress: progress2 } = useScroll({
    target: ref2,
    offset: ['start end', 'end start'],
  });
  const y2 = useTransform(progress2, [0, 1], ['0%', '50%']);

    const { scrollYProgress: progress3 } = useScroll({
    target: ref3,
    offset: ['start end', 'end start'],
  });
  const y3 = useTransform(progress3, [0, 1], ['0%', '50%']);
  
      const { scrollYProgress: progress4 } = useScroll({
    target: ref4,
    offset: ['start end', 'end start'],
  });
  const y4 = useTransform(progress4, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* Sección 1: Trámite de autorizaciones */}
     <section ref={ref1} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
            {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-bonewhite flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-4xl font-anton">Trámites y permisos especiales</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Gestionamos trámites y permisos especiales para que tus importaciones cumplan con todas las regulaciones específicas.        </p>
        </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y : y1 }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <Image
          src="/permiso.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
      </motion.div>


    </section>

      {/* Sección 2: Despacho consumo */}
     <section ref={ref2} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row ">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y :y2}}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform "
      >
        <Image
          src="/sani.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
  
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-cyan-700 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Gestión sanitaria de importaciones</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Nos encargamos de la gestión sanitaria de tus importaciones, asegurando el cumplimiento de todas las normativas de salud.          </p>
        </div>
      </div>
    </section>
         {/* Sección 3: Despacho anticipado */}
    <section ref={ref3} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
            {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-gray-500 flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-4xl font-anton">Gestión sanitaria de los CDA de importación</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Nos ocupamos de la gestión sanitaria de los Certificados de Destinación Aduanera (CDA) de importación. </p>        
          </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y :y3 }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <Image
          src="/gestion.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
      </motion.div>


    </section>
{/* Sección 4: Optimización de despachos aduaneros */}
 <section ref={ref4} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y :y4 }}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <Image
          src="/senasag.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-green-700 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Gestión ante entidades especializadas (SENASAG, AGEMED, etc.)</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Gestionamos trámites ante entidades especializadas como SENASAG y AGEMED para que tus productos cumplan con todas las regulaciones
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
