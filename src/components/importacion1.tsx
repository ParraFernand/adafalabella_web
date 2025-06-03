'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';


export function Importacion1() {
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
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
        >
          <Image
            src="/papeleo1.jpg"
            alt="Imagen de parallax"
            fill
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gray-500/40" />
        </motion.div>
        <div className="relative z-10 w-2/5 h-full ml-auto bg-gray-600 flex items-center p-6 sm:p-10">
          <div className="space-y-4 max-w-md mx-auto text-white">
            <h2 className="text-xl md:text-4xl font-anton">
              Trámite de autorizaciones previas y certificaciones
            </h2>
            <p className="text-m sm:text-3xl font-barlowCondensed">
              Simplificamos y gestionamos todas las autorizaciones previas y certificaciones para que tus despachos aduaneros se realicen sin contratiempos.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 2: Despacho consumo */}
      <section ref={ref2} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
        <div className="relative z-10 w-2/5 h-full mr-auto bg-cyan-500 flex items-center p-6 sm:p-10">
          <div className="space-y-4 max-w-md mx-auto">
            <h2 className="text-xl sm:text-4xl font-anton">Despacho consumo</h2>
            <p className="text-m sm:text-3xl font-barlowCondensed">
              Nos encargamos del despacho de mercancías para consumo, asegurando que cumplan con todas las normativas aduaneras.
            </p>
          </div>
        </div>
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
        >
          <Image
            src="/controladores.jpg"
            alt="Imagen de parallax"
            fill
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-cyan-400/20" />
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
          src="/motos.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-blue-500/20" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-blue-800 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Despacho anticipado, abreviado</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Ofrecemos servicios de despacho anticipado para agilizar la liberación de tus mercancías en el menor tiempo posible.
          </p>
        </div>
      </div>
    </section>
{/* Sección 4: Optimización de despachos aduaneros */}
    <section ref={ref4} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y : y4 }}
        className="absolute  top-[-290px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <Image
          src="/pollitos.jpg"
          alt="Imagen de parallax"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-400/20" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-gradient-to-r from-[#ffd700] via-[#ac7f03] to-[#ffd700] flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-m sm:text-4xl font-anton">Optimización de despachos aduaneros (sobre carro o anticipado)</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Ofrecemos optimización en los despachos aduaneros, ya sea sobre carro o anticipado, para agilizar tus operaciones.          </p>
        </div>
      </div>
    </section>
{/* Sección 5: Correlación y certificación de origen */}
        <section ref={ref5} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y:y5 }}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <Image
          src="/aire.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-green-400/30" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-green-600 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-4xl font-anton">Correlación y certificación de origen</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Gestionamos la correlación y certificación de origen de tus productos para cumplir con las normativas internacionales.          </p>
        </div>
      </div>
    </section>
    </>
  );
}
