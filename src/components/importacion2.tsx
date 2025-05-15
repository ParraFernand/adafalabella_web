'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Importacion2() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

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

      const { scrollYProgress: progress5 } = useScroll({
    target: ref5,
    offset: ['start end', 'end start'],
  });
  const y5 = useTransform(progress5, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* Sección 1: Trámite de autorizaciones */}
     <section ref={ref1} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
            {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-yellow-200 flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-4xl font-anton">Admisión temporal</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Facilitamos la admisión temporal de mercancías para que puedas contar con tus productos de manera ágil y sin complicaciones.        </p>
        </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y : y1 }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <Image
          src="/temporal.jpg"
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
          src="/papeleo1.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
  
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-purple-950 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-2xl sm:text-4xl font-anton">RITEX</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Gestionamos el régimen Ritex (Régimen de Importación Temporal para Exportación) para que tus productos importados temporalmente puedan ser exportados sin problemas.          </p>
        </div>
      </div>
    </section>
         {/* Sección 3: Despacho anticipado */}
    <section ref={ref3} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
            {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-yellow-200 flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-4xl font-anton">Aprovechamiento de incentivos tributarios estatales</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Te ayudamos a aprovechar los incentivos tributarios estatales disponibles para tus importaciones. </p>        </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y :y3 }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <Image
          src="/money.jpg"
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
          src="/mapa.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-blue-800 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-2xl sm:text-4xl font-anton">Estructuración de planeamiento logístico y aduanero para operaciones en embarques parciales</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Diseñamos planes logísticos y aduaneros eficientes para tus operaciones en embarques parciales.
          </p>
        </div>
      </div>
    </section>
{/* Sección 5: Correlación y certificación de origen */}
<section ref={ref5} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y :y5 }}
        className="absolute  top-[-290px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <Image
          src="/papeleo2.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />

      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-red-500 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-2xl sm:text-4xl font-anton">Optimización de los costos aduaneros </h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Analizamos y optimizamos tus costos aduaneros para que ahorres tiempo y dinero en tus importaciones.         </p>
        </div>
      </div>
    </section>
    </>
  );
}
