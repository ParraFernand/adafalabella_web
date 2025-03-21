"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <motion.video 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="cielo.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </motion.video>
        
        {/* Gradient Overlay with animated opacity */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-800/80 via-blue-800/60 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-yellow-500 text-center w-full sm:max-w-md mx-auto md:ml-32 md:-mt-14 font-jafherb"
        >
          {/* Main Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Bienvenidos a ADAFALABELLA S.R.L
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white text-xl md:text-2xl z-20 leading-relaxed drop-shadow-md"
          >
            Nos especializamos en brindar servicios ágiles y eficientes para asegurar que tus importaciones y exportaciones se realicen con éxito y sin contratiempo.
          </motion.p>
        </motion.div>

        {/* Decorative Shape */}
        <motion.div 
          initial={{ opacity: 0, skewX: -20 }}
          animate={{ opacity: 0.8, skewX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:block absolute inset-0 w-full h-full -z-10"
          style={{
            backgroundColor: "oklch(0.985 0.001 106.423)",
            clipPath: "polygon(65% 0, 90% 0, 75% 100%, 50% 100%)",
            filter: "blur(1px)",
          }}
        />

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            type: "spring",
            stiffness: 100
          }}
          className="hidden md:block md:absolute left-[50%] top-[20%] transform -translate-y-1/2"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/girl.png" 
                alt="Imagen Descriptiva" 
                width={510} 
                height={400} 
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent"
      />
    </section>
  );
}