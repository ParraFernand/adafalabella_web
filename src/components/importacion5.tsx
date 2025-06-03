'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function Importacion5() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const { scrollYProgress: progress1 } = useScroll({
    target: ref1,
    offset: ['start end', 'end start'],
  });
  const y1 = useTransform(progress1, [0, 1], ['0%', '50%']);

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
          src="/inspeccion2.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-yellow-400/10" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-gradient-to-r from-[#ffd700] via-[#ac7f03] to-[#ffd700] flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Inspección de la mercadería</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
         Realizamos inspecciones exhaustivas de tus mercancías para asegurarnos de que cumplan con los estándares de calidad y normativas vigentes.
          </p>
        </div>
      </div>


    </section>

      {/* Sección 2: Despacho consumo */}
     <section ref={ref2} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row ">
                  {/* Contenido de texto (menos ancho) */}
            <div className="relative z-10  w-2/5 h-full mr-auto bg-gray-500 flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
              <div className="space-y-4 max-w-md mx-auto sm:mx-0">
                <h2 className="text-xl sm:text-4xl font-anton">Seguimiento de envíos</h2>
                <p className='text-m sm:text-3xl font-barlowCondensed'>
                Ofrecemos un seguimiento continuo de tus envíos, manteniéndote informado en cada etapa del proceso.          
                </p>
              </div>
            </div>
            {/* Imagen parallax (más ancha) */}
            <motion.div
              style={{ y: y2 }}
              className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
            >
              <Image
                src="/seguimiento.jpg"
                alt="Imagen de parallax"
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gray-500/20" />
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
              src="/controla.jpg"
              alt="Imagen de parallax"
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-blue-600/20" />
          </motion.div>
    
          {/* Contenido de texto (menos ancho) */}
          <div className="relative z-10  w-2/5 h-full ml-auto bg-blue-800 flex items-center p-6 sm:p-10 overflow-hidden">
            <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
              <h2 className="text-xl sm:text-4xl font-anton">Control sistémico desde origen hasta sus almacenes</h2>
              <p className='text-m sm:text-3xl font-barlowCondensed'>
              Implementamos un control sistémico desde el origen hasta tus almacenes para asegurar la integridad y seguridad de tus mercancías.
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
          src="/control.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-red-500 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-xl sm:text-4xl font-anton">Control documental desde origen directo con el proveedor y operadores</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Gestionamos y controlamos la documentación desde el origen, coordinando directamente con proveedores y operadores.
          </p>
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
          src="/integral.jpg"
          alt="Imagen de parallax"
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-cyan-600/20" />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-cyan-500 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-4xl font-anton">Manejo integral de documentación digital con acceso 24/7</h2>
          <p className='text-m sm:text-3xl font-barlowCondensed'>
          Ofrecemos un manejo integral de la documentación digital con acceso 24/7 para que siempre tengas la información a tu alcance.        
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
