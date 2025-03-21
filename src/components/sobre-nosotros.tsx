"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Award, Users, Clock } from "lucide-react";

export function SobreNosotros() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const stats = [
    {
      icon: Award,
      value: "3+",
      label: "Años de Experiencia",
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfechos",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Servicio Continuo",
    },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-blue-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-[150px] -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-[150px] translate-x-1/2 translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ opacity, scale }}
            className="space-y-8"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-yellow-400" />
                <span className="text-yellow-400 font-medium">Sobre Nosotros</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Estamos aquí para mover su negocio
              </h2>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              ADAFALABELLA SRL ha ofrecido sus servicios de la más alta calidad a los 
              residentes de toda Bolivia desde el año 2020. Un servicio excelente comienza con 
              personas excelentes y con mucha experiencia, por lo que nos esforzamos en elegir 
              a los mejores para nuestro equipo.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-yellow-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Conoce Más
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/edificio.jpg')",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Quote */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <p className="text-xl text-white font-medium italic">
                "¡No solamente manejamos números, sino también EMOCIONES!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}