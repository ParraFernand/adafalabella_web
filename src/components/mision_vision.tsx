"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export function MisionVision() {
  return (
    <section className="py-16 px-4 md:px-8 bg-cyan-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
  className="relative group min-h-[400px]" 
>
<div className="absolute inset-[-10px] bg-[#07479c] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#efc901] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Misión</h3>
              </div>
              <p className="text-white leading-relaxed font-merriweather text-justify pt-10">
                Liderar el mercado de servicios aduaneros y logísticos, brindando soluciones innovadoras y eficientes que impulsen el crecimiento y la competitividad de nuestros clientes ofreciendo un servicio rápido, seguro y personalizado, respaldado por un equipo de expertos comprometidos con la excelencia y la satisfacción del cliente.
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#efc901]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#07479c] rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[#efc901] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Visión</h3>
              </div>
              <p className="text-white leading-relaxed text-justify pt-10">
                Ser la empresa líder en servicios aduaneros y logísticos a nivel internacional, reconocida por nuestra excelencia en la atención al cliente, innovación tecnológica y compromiso con la sostenibilidad, teniendo presencia global, estableciendo relaciones comerciales sólidas y duraderas, y ofreciendo soluciones personalizadas y eficientes que impulsen el éxito de nuestros clientes en el comercio internacional.
              </p>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#efc901]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full"
          animate={{
            rotate: 360,
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 border border-white/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
}