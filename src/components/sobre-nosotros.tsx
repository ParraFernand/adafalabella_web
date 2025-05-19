"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Users, Clock, Star } from "lucide-react";

export function SobreNosotros() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Parallax effect for background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Spring animations for smoother motion
  const springConfig = { damping: 25, stiffness: 120 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  // Mouse move handler for interactive elements
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Particle system
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: (p.y - p.speed) % 100,
          x: p.x + Math.sin(p.y * 0.05) * 0.2,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const stats = [
   
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfechos",
      color: "from-cyan-400 to-blue-500",
      delay: 0.1,
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Servicio Continuo",
      color: "from-emerald-400 to-teal-500",
      delay: 0.2,
    },
  ];

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  // Staggered letter animation for heading
  const headingText = "NUESTRA HISTORIA";
  const headingLetters = headingText.split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950/50 via-indigo-950/50 to-black/50"
      onMouseMove={handleMouseMove}
    >
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + particle.speed * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full"
        >
          <div
            className="w-full h-full bg-gradient-to-br from-[#efc901]/20 to-amber-500/10 rounded-full filter blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </motion.div>

        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full"
        >
          <div
            className="w-full h-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/10 rounded-full filter blur-[150px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "1s" }}
          />
        </motion.div>

        <motion.div
          style={{ y: bgY3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] rounded-full"
        >
          <div
            className="w-full h-full bg-gradient-to-r from-purple-500/10 to-indigo-500/5 rounded-full filter blur-[100px] animate-pulse"
            style={{ animationDuration: "12s", animationDelay: "2s" }}
          />
        </motion.div>

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-[15%] w-16 h-16 border-2 border-white/10 rounded-lg"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            borderColor: [
              "rgba(255,255,255,0.1)",
              "rgba(255,255,255,0.2)",
              "rgba(255,255,255,0.1)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-[10%] w-24 h-24 border-2 border-[#efc901]/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
            borderColor: [
              "rgba(250,204,21,0.2)",
              "rgba(250,204,21,0.3)",
              "rgba(250,204,21,0.2)",
            ],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-[40%] left-[5%] w-12 h-12 border-2 border-blue-400/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
            borderColor: [
              "rgba(96,165,250,0.2)",
              "rgba(96,165,250,0.3)",
              "rgba(96,165,250,0.2)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ opacity, scale: springScale, y: springY }}
            className="space-y-10 z-10"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="space-y-6"
            >
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-1 w-12 bg-gradient-to-r from-[#efc901] to-amber-500" />
                <span className="text-[#efc901] font-anton tracking-wider uppercase text-xl">
                  Sobre Nosotros
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <h2 className="text-4xl md:text-6xl font-anton text-white leading-tight">
                  {headingLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        hidden: { y: 40, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: 0.03 * index,
                            duration: 0.5,
                            ease: [0.215, 0.61, 0.355, 1],
                          },
                        },
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </h2>
              </div>
            </motion.div>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              className="text-3xl text-gray-300 text-justify leading-relaxed font-barlowCondensed"
            >
              <span className="text-white ">ADAFALABELLA SRL</span> fundada el
              23 de noviembre de 2023 en Santa Cruz de la Sierra bajo el
              liderazgo de la Lic. Ninoska Jhovanka Toro Espada, nació con la
              misión de brindar un servicio integral a importadores bolivianos.
              Gracias al empeño y dedicación de su fundadora, la empresa no solo
              se ha establecido como un referente en el sector aduanero, sino
              que también ha sido un motor importante para el desarrollo del
              país. Con soluciones innovadoras y procesos eficientes,
              ADAFALABELLA S.R.L. apoya a empresas que generan empleos y
              divisas, contribuyendo al crecimiento económico de Bolivia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.5, opacity: 0, y: 30 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 group"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-out"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                    }}
                  />

                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${stat.color} mb-4`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {stat.value}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="text-sm text-gray-400"
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden z-10"
          >
            <div className="absolute inset-0  z-10" />

            {/* Acá esta el video */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
            >
              <video
                className="w-full h-full object-cover"
                src="/video_final.mp4" // Reemplaza con la ruta de tu video
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-20 h-20 border-2 border-white/10 rounded-full z-20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
                borderColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(255,255,255,0.2)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute bottom-20 left-4 w-16 h-16 border-2 border-[#efc901]/20 rotate-45 z-20"
              animate={{
                rotate: [45, 225, 45],
                scale: [1, 1.1, 1],
                borderColor: [
                  "rgba(250,204,21,0.2)",
                  "rgba(250,204,21,0.3)",
                  "rgba(250,204,21,0.2)",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Floating Quote */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
              }}
              className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 z-20"
            >
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-[#efc901] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-2xl text-white font-anton italic">
                    ¡Aquí trabajamos con números y también con EMOCIONES!
                  </p>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute bottom-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full"
                    aria-label={
                      isMuted ? "Activar sonido" : "Desactivar sonido"
                    }
                  >
                    {isMuted ? (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          clipRule="evenodd"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          clipRule="evenodd"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                    )}
                  </button>
                  <motion.div
                    className="w-0 h-0.5 bg-gradient-to-r from-[#efc901] to-amber-500 mt-3"
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
