'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function Importacion11() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Ajustar el parallax para hacerlo más fuerte
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative h-[70vh] sm:h-[80vh] md:h-[60vh] overflow-hidden flex flex-col sm:flex-row ">
      {/* Imagen parallax (más ancha) */}
      <motion.div
        style={{ y }}
        className="absolute  top-[-230px] left-0 w-full sm:w-3/5 h-[100vh] md:h-[850px] overflow-hidden will-change-transform "
      >
        <img
          src="/papeleo3.jpg"
          alt="Imagen de parallax"
          className="w-full h-full object-cover bg-black/30"
        />
      </motion.div>

      {/* Contenido de texto (menos ancho) */}
      <div className="relative z-10  w-2/5 h-full ml-auto bg-purple-950 flex items-center p-6 sm:p-10 overflow-hidden">
        <div className="space-y-4 max-w-md mx-auto sm:mx-0 text-white">
          <h2 className="text-2xl sm:text-4xl font-anton">Asesoramiento en comercio exterior</h2>
          <p className='text-2xl sm:text-3xl font-barlowCondensed'>
          Brindamos asesoramiento experto en comercio exterior para que tus operaciones internacionales sean un éxito.
          </p>
        </div>
      </div>
    </section>
  );
}
