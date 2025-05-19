"use client";
import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const carouselItems = [
  {
    image: "/noticia3.jpg",
    title: "Noticias Internacionales",
    content:
      "Actualizaciones importantes del comercio internacional y tratados recientes.",
  },
  {
    image: "/noticia1.jpg",
    title: "Novedades Logísticas",
    content:
      "Nuevas estrategias para optimizar costos y mejorar tiempos de entrega.",
  },
  {
    image: "/noticia2.jpg",
    title: "Regulaciones Aduaneras",
    content:
      "Cambios recientes en normativas aduaneras y procedimientos de importación/exportación.",
  },
];

export function CarouselNoticias() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Memoriza la función nextSlide usando useCallback
  const nextSlide = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer);
  }, [nextSlide]); // Incluir nextSlide en las dependencias

  // Animación de los slides
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };


  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-visible pb-20">
      {/* Video background fijo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full min-h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dcoidemmj/video/upload/v1747644652/manos_xbuwzx.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa de superposición para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700/70 via-yellow-900/50 to-black/80 z-10"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-start w-full ">
        <div className="container mx-auto px-6 lg:px-16 py-8">
          <div className="flex flex-col items-center">
            <motion.h2
              className="text-5xl md:text-7xl font-anton text-white mb-16 text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Noticias Destacadas
            </motion.h2>

            <div className="w-full max-w-7xl mx-auto relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`slide-${currentSlide}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                  onAnimationComplete={() => setIsAnimating(false)} // <-- ESTA LÍNEA ES CLAVE
                >
                  {/* Slide content */}
                  <motion.div
                    className="relative h-[500px] sm:h-[600px] md:h-[800px] w-full overflow-hidden rounded-2xl shadow-2xl border border-white/10"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={1}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10"></div>
                    <Image
                      src={carouselItems[currentSlide].image}
                      alt={carouselItems[currentSlide].title}
                      width={800}
                      height={500}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </motion.div>

                  {/* Content side */}
                  <div className="flex flex-col justify-center p-6 md:p-10 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 h-full">
                    <motion.div
                      className="mb-4"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={2}
                    >
                      <span className="bg-[#efc901] px-4 py-1.5 text-lg font-anton text-black rounded-full">
                        DESTACADO
                      </span>
                    </motion.div>
                    <motion.h3
                      className="text-4xl md:text-6xl font-anton mb-6 text-white leading-tight"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={3}
                    >
                      {carouselItems[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      className="text-xl md:text-4xl text-gray-200 font-barlowCondensed leading-relaxed mb-8"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={4}
                    >
                      {carouselItems[currentSlide].content}
                    </motion.p>
                    <motion.button
                      className="self-start px-8 py-3 bg-[#efc901] hover:bg-[#efc901] text-black font-medium text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={5}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Leer más
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-4 lg:-left-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 hover:bg-[#efc901] hover:text-black transition-all duration-300"
                aria-label="Anterior noticia"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isAnimating}
              >
                <ChevronLeft className="h-8 w-8" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-4 lg:-right-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/20 hover:bg-[#efc901] hover:text-black transition-all duration-300"
                aria-label="Siguiente noticia"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isAnimating}
              >
                <ChevronRight className="h-8 w-8" />
              </motion.button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-4 mt-12">
              {carouselItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-3 transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-12 bg-[#efc901]"
                      : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir a noticia ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isAnimating}
                >
                  {currentSlide === index && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-[#efc901]/50"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    ></motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
    </section>
  );
}
