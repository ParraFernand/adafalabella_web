'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Importacion3() {
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
 {/* Imagen parallax (más ancha) */}
 <motion.div
        style={{ y: y1 }}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform "
      >
        <Image
          src="/reunion.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gray-500/20" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-gray-600 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-2xl sm:text-4xl font-anton">Asesoramiento en comercio exterior</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Brindamos asesoramiento experto en comercio exterior para que tus operaciones internacionales sean un éxito.
          </p>
        </div>
      </div>


    </section>

      {/* Sección 2: Despacho consumo */}
     <section ref={ref2} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row ">
                  {/* Contenido de texto (menos ancho) */}
            <div className="relative z-10  w-2/5 h-full mr-auto bg-gradient-to-r from-[#cab437] via-[#ac7f03] to-[#ffd700] flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
              <div className="space-y-4 max-w-md mx-auto sm:mx-0">
                <h2 className="text-2xl sm:text-4xl font-anton">Clasificación arancelaria</h2>
                <p className='text-2xl sm:text-3xl font-barlowCondensed'>
                Realizamos la correcta clasificación arancelaria de tus productos, garantizando el cumplimiento de las normativas y optimizando costos.          </p>
              </div>
            </div>
            {/* Imagen parallax (más ancha) */}
            <motion.div
              style={{ y: y2 }}
              className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
            >
              <Image
                src="/escaner.jpg"
                alt="Imagen de parallax"
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
               <div className="absolute inset-0 bg-yellow-400/10" />
            </motion.div>
      
    </section>
         {/* Sección 3: Despacho anticipado */}
    <section ref={ref3} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
          {/* Imagen parallax (más ancha) */}
          <motion.div
            style={{ y: y3 }}
            className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
          >
            <Image
              src="/suplemento.jpg"
              alt="Imagen de parallax"
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
                      <div className="absolute inset-0 bg-cyan-400/20" />
          </motion.div>
    
          {/* Contenido de texto (menos ancho) */}
          <div className="relative z-10  w-2/5 h-full ml-auto bg-cyan-500 flex items-center p-6 sm:p-10 overflow-hidden">
            <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
              <h2 className="text-2xl sm:text-4xl font-anton">Clasificación arancelaria para suplementos</h2>
              <p className='text-2xl sm:text-3xl font-barlowCondensed'>
              Ofrecemos criterios precisos de clasificación arancelaria para suplementos alimenticios, cosméticos y medicamentos.
              </p>
            </div>
          </div>
        </section>
{/* Sección 4: Optimización de despachos aduaneros */}
<section ref={ref4} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y: y4 }}
        className="absolute  top-[-290px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <Image
          src="/maquinaria.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-red-500 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-2xl sm:text-4xl font-anton">Clasificación arancelaria de equipamiento y maquinaria</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Nos encargamos de la correcta clasificación arancelaria de tu equipamiento y maquinaria.          </p>
        </div>
      </div>
    </section>
{/* Sección 5: Correlación y certificación de origen */}
<section ref={ref5} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y: y5 }}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <Image
          src="/normativa.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-green-600 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-4xl font-anton">Análisis de componentes, estructura y clasificación de plantas industriales</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Realizamos análisis detallados de componentes, estructura y clasificación de plantas industriales para cumplir con las normativas.          </p>
        </div>
      </div>
    </section>
    </>
  );
}
