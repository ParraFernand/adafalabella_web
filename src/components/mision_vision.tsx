"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MisionVision() {
  return (
    <section className="py-28 px-4 md:px-8 bg-cyan-950/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative group"
          >
            <div className="absolute inset-[-10px] bg-[#07479c]/70 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 min-h-[520px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#efc901] flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-anton text-white">Misión</h3>
              </div>
              <p className="text-white leading-relaxed font-barlowCondensed text-justify pt-6 text-2xl">
                Liderar el mercado de servicios aduaneros y logísticos,
                brindando soluciones innovadoras y eficientes que impulsen el
                crecimiento y la competitividad de nuestros clientes ofreciendo
                un servicio rápido, seguro y personalizado, respaldado por un
                equipo de expertos comprometidos con la excelencia y la
                satisfacción del cliente.{" "}
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
            <div className="absolute inset-[-10px] bg-[#07479c]/70 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 min-h-[520px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-[#efc901] flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-anton text-white">Visión</h3>
              </div>
              <p className="text-white leading-relaxed font-barlowCondensed text-justify pt-6 text-2xl">
                Ser la empresa líder en servicios aduaneros y logísticos a nivel
                internacional, reconocida por nuestra excelencia en la atención
                al cliente, innovación tecnológica y compromiso con la
                sostenibilidad, teniendo presencia global, estableciendo
                relaciones comerciales sólidas y duraderas, y ofreciendo
                soluciones personalizadas y eficientes que impulsen el éxito de
                nuestros clientes en el comercio internacional.{" "}
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
      </div>
    </section>
  );
}
