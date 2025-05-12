'use client';

import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';

export function Importacion4() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Ajustar el parallax para hacerlo más fuerte
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const smoothY = useSpring(y, { stiffness: 70, damping: 20 });

  return (
    <section ref={ref} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform"
      >
        <img
          src="/papeleo1.jpg"
          alt="Imagen de parallax"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-green-600 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-4xl font-anton">Correlación y certificación de origen</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Gestionamos la correlación y certificación de origen de tus productos para cumplir con las normativas internacionales.          </p>
        </div>
      </div>
    </section>
  );
}
