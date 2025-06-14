"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const VideoComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <motion.video
      ref={videoRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1.5 }}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover "
    >
      <source
        src="https://res.cloudinary.com/dcoidemmj/video/upload/v1747083877/r60ernytxribzqjgv3ll.mp4"
        type="video/mp4"
      />
      Tu navegador no soporta videos HTML5.
    </motion.video>
  );
};
export function Hero() {
  const containerRef = useRef(null);
  const controls = useAnimation();

  // Animate elements on load
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[60vh] md:h-[85vh] overflow-hidden bg-white"
    >
     
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="block absolute right-[45%] top-[45%] h-[1.3%] w-[65%] md:right-[25%] md:top-[60%] md:h-[2%] md:w-[60%] z-20  bg-gradient-to-r from-[#ffd700] via-[#b68600] to-[#ffd700]"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      <motion.div className="absolute left-0 right-0 top-7 md:top-12 h-[82%] md:h-[83%] w-full">
        <VideoComponent />

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            delay: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute top-[5vh] right-[15vw] w-[40vw] h-auto z-20"
        >
          <Image
            src="/ninoska4.png"
            alt="Imagen Descriptiva"
            width={450}
            height={550}
            className="object-contain drop-shadow-xl opacity-80 z-10"
            priority
          />
        </motion.div>

        {/* Blue Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Superposición de contenido */}
      <div className="absolute inset-0 flex items-center justify-between px-12 z-10">
        {/* Cuadro de texto a la izquierda */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className=" absolute 
              left-[0vw] 
              sm:left-[20vw] 
              md:left-[21vw]
              w-[55vw] 
              sm:w-[27vw] 
              xs:w-[27vw]
              bg-gradient-to-b from-black via-cyan-800 to-cyan-950
              text-white 
              p-6 
              h-full shadow-xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-x md:text-5xl font-anton md:mb-16 md:mt-20 text-justify"
          >
            Bienvenidos a:
          </motion.h1>
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.8,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="w-full flex justify-center my-14 md:my-32"
          >
            <Image
              src="/logo_ada3.png"
              alt="Imagen Descriptiva"
              width={770}
              height={550}
              className="w-[120%] sm:w-[120%] md:w-[75%] lg:w-[100%] h-auto object-contain drop-shadow-xl opacity-90 z-10"
              priority
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-m md:text-2xl font-barlowCondensed text-justify"
          >
            Nos especializamos en brindar servicios ágiles y eficientes para
            asegurar que tus importaciones y exportaciones se realicen con éxito
            y sin contratiempo.
          </motion.p>
        </motion.div>
      </div>

      {/* Animated Accent Lines */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-12 h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-8 h-px w-full bg-gradient-to-r from-transparent via-[#efc901] to-transparent"
        />
      </div>

      {/* Blue and Yellow Glowing Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-[#efc901]/10 blur-3xl"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-10 border-4 border-[#efc901] rounded-full flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="w-1.5 h-3 bg-[#efc901] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
