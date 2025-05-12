'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function Importacion12() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Ajustar el parallax para hacerlo más fuerte
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section ref={ref} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
            {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full mr-auto bg-yellow-200 flex items-center p-6 sm:p-10 overflow-hidden will-change-transform">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-4xl font-anton">Clasificación arancelaria</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Realizamos la correcta clasificación arancelaria de tus productos, garantizando el cumplimiento de las normativas y optimizando costos.          </p>
        </div>
      </div>
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y }}
        className="absolute  top-[-230px] right-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden"
      >
        <img
          src="/productos2.jpg"
          alt="Imagen de parallax"
          className="w-full h-full object-cover"
        />
      </motion.div>


    </section>
  );
}
