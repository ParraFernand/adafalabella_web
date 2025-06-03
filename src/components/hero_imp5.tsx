"use client"
import Image from "next/image"
import { useEffect} from "react"
import { motion, useAnimation } from "framer-motion"


export function Hero() {
  const controls = useAnimation()
    // Animate elements on load
    useEffect(() => {
      controls.start("visible")
    }, [controls])
  
    // Animation variants
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }
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
    }
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
     <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="block absolute right-[28%] top-[-5%] h-[100%] w-[40%] z-10 bg-gradient-to-r from-[#ffd700] via-[#b68600] to-[#ffd700]"
        style={{
          clipPath: "circle(40% at 50% 50%)",
        }}
      />
           <motion.div className="absolute left-0 right-0 top-0 md:top-12 h-full md:h-[83%]  w-full">
          
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
                 className="hidden md:block absolute right-[44%] top-[-6] h-full w-[30%] z-10"
               >
                   <Image
                     src="/silla1.png"
                     alt="Imagen Descriptiva"
                     width={400}
                     height={550}
                     className="object-contain drop-shadow-xl z-10"
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
     
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center justify-center md:left-72 mt-[-15%]">
          <div className="text-white text-center md:text-right w-full sm:max-w-lg md:mr-7 md:mt-[300px]">
            {/* Texto Principal */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center md:text-left "
          >
            
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-anton mb-6">
                CONTROL OPERATIVO Y DOCUMENTAL
              </motion.h1>

           </motion.div>
          </div>  
      </div>
    </section>
  )
}
