'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Importacion6() {
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
      <div className="relative z-10  w-2/5 h-full mr-auto bg-gradient-to-r from-[#ffd700] via-[#ac7f03] to-[#ffd700] flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-4xl font-anton">Gestiones de certificaciones técnicas (IBMETRO)</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Nos encargamos de las gestiones necesarias para obtener certificaciones técnicas de IBMETRO.       
          </p>
        </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y : y1 }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <Image
          src="/ibmetro.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-400/10" />
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
          src="/hospitalario.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
  
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-cyan-600 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Gestión de certificaciones para equipos médicos y hospitalarios (AUTORIDAD DE TECNOLOGÍAS NUCLEARES)</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Nos encargamos de la certificación de equipos médicos y hospitalarios ante la Autoridad de Tecnologías Nucleares.
          </p>
        </div>
      </div>
    </section>
         {/* Sección 3: Despacho anticipado */}
    <section ref={ref3} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
            {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-gray-400 flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-4xl font-anton">Gestión de autorizaciones previas para vehículos (VICEMINISTERIO DE TRANSPORTES, IBMETRO)</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
         Tramitamos las autorizaciones previas necesarias para la importación de vehículos ante el Viceministerio de Transportes y IBMETRO.
         </p>        
         </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y :y3 }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <Image
          src="/vehiculos.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-500/20" />
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
          src="/sustancia.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-500/20" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-blue-800 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Gestión de registro y autorizaciones para importación de sustancias controladas (MINISTERIO DE DEFENSA)</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Tramitamos el registro y autorizaciones para la importación de sustancias controladas ante el Ministerio de Defensa.
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
          src="/ropa.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />

      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-red-500 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Registro y autorizaciones para importación de ropa (VICEMINISTERIO DE COMERCIO Y LOGÍSTICA INTERNA) </h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Gestionamos el registro y autorizaciones necesarias para la importación de ropa ante el Viceministerio de Comercio y Logística Interna
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
