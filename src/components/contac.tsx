"use client"

import * as React from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  XCircle,
  Send,
  Loader2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Award,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react"
import emailjs from "@emailjs/browser"

const countries = ["Argentina", "México", "España", "Chile", "Colombia", "Perú", "Bolivia", "Otros"]

export function ContactForm() {
  const formRef = React.useRef<HTMLFormElement>(null)
  const mapRef = React.useRef<HTMLDivElement>(null)
  const statsRef = React.useRef<HTMLDivElement>(null)
  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formStatus, setFormStatus] = React.useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = React.useState<string | null>(null)

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    message: "",
  })

  React.useEffect(() => {
    console.log("Map would be initialized here in a real implementation")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("idle")

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          "service_ofkr3f4",
          "template_h8pmnw8",
          formRef.current,
          "8fG1MVd__D9CQqXHo",
        )

        setFormStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          country: "",
          message: "",
        })

        setTimeout(() => {
          setFormStatus("idle")
        }, 5000)
      } catch (error) {
        console.error("Error enviando correo:", error)
        setFormStatus("error")

        setTimeout(() => {
          setFormStatus("idle")
        }, 5000)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const headingText = "Contáctanos"
  const headingLetters = headingText.split("")

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  const statusVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Principal #123, La Paz, Bolivia",
      color: "from-blue-500 to-yellow-400",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+591 2 123 4567",
      color: "from-yellow-400 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@adafalabella.com",
      color: "from-blue-400 to-yellow-500",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Vie: 9:00 - 18:00",
      color: "from-yellow-500 to-blue-400",
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfechos",
      color: "from-blue-500 to-yellow-400",
    },
    {
      icon: Award,
      value: "3+",
      label: "Años de Experiencia",
      color: "from-yellow-400 to-blue-500",
    },
    {
      icon: Star,
      value: "98%",
      label: "Tasa de Satisfacción",
      color: "from-blue-400 to-yellow-500",
    },
  ]

  const socialMedia = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-900/40 via-blue-800/40 to-blue-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div initial="hidden" animate="visible" variants={titleVariants} className="mb-2">
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-yellow-400 mr-3" />
              <span className="text-yellow-400 font-medium uppercase text-xs tracking-wider">Estamos para ayudarte</span>
              <div className="h-px w-12 bg-gradient-to-r from-yellow-400 to-blue-400 ml-3" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
            {headingLetters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.05 * index,
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
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
            className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <Card className="relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 shadow-2xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-yellow-500/5" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full filter blur-[50px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-400/10 rounded-full filter blur-[50px]" />

              <motion.div
                className="absolute top-10 right-10 w-16 h-16 border border-white/10 rounded-full"
                animate={{
                  rotate: 360,
                  borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                className="absolute bottom-10 left-10 w-12 h-12 border border-white/10 rotate-45"
                animate={{
                  rotate: [45, 225, 45],
                  borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
                }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <CardContent className="relative z-10 p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Envíanos un mensaje</h2>
                  <p className="text-gray-300">Completa el formulario y nos pondremos en contacto contigo pronto</p>
                </div>

                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div
                      key="success"
                      variants={statusVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</span>
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      key="error"
                      variants={statusVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 flex items-center"
                    >
                      <XCircle className="w-5 h-5 mr-2 text-red-500" />
                      <span>Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      custom={0}
                      initial="hidden"
                      animate="visible"
                      variants={formFieldVariants}
                      className="relative"
                    >
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-1">
                        Nombre
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          onFocus={() => handleFocus("firstName")}
                          onBlur={handleBlur}
                          className="w-full p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: focusedField === "firstName" ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      custom={1}
                      initial="hidden"
                      animate="visible"
                      variants={formFieldVariants}
                      className="relative"
                    >
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-1">
                        Apellido
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          onFocus={() => handleFocus("lastName")}
                          onBlur={handleBlur}
                          className="w-full p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: focusedField === "lastName" ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        className="w-full p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: focusedField === "email" ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-1">
                      Empresa
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus("company")}
                        onBlur={handleBlur}
                        className="w-full p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: focusedField === "company" ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label htmlFor="country" className="block text-sm font-medium text-gray-200 mb-1">
                      País
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        onFocus={() => handleFocus("country")}
                        onBlur={handleBlur}
                        className="w-full p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        required
                      >
                        <option value="">Selecciona un país</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: focusedField === "country" ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    variants={formFieldVariants}
                    className="relative"
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                      Mensaje
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        className="w-full p-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: focusedField === "message" ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    custom={6}
                    initial="hidden"
                    animate="visible"
                    variants={formFieldVariants}
                    className="flex justify-center pt-2"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden group w-full bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-600 hover:to-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Enviar Mensaje</span>
                          </>
                        )}
                      </span>

                      <motion.div className="absolute -inset-1 rounded-lg blur-sm bg-blue-400/30 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-yellow-500/5" />
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${item.color} opacity-0 hover:opacity-20 blur-xl transition-opacity duration-700`}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} flex-shrink-0`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isMapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-yellow-500/5" />

              <div className="relative h-full w-full bg-gray-800/50 flex items-center justify-center">
                  {/* Google Maps Embedded */}
                  <div className="relative w-full max-w-md min-h-[200px] h-[250px] rounded-lg overflow-hidden shadow-lg z-10">
                    <iframe
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.9415934465277!2d-63.15445451720304!3d-17.724456252553217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7e55d9a3379%3A0xf7a3312a5d007438!2zQ2FsbGUgVXJ1cMOpIEIvSmVuZWNoZXLDug!5e0!3m2!1ses!2sbo!4v1744053223010!5m2!1ses!2sbo"

                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                
              </div>
            </motion.div>

            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-yellow-500/5" />
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-0 hover:opacity-20 blur-xl transition-opacity duration-700`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${stat.color} mx-auto mb-3`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="text-3xl font-bold text-white mb-1"
                    >
                      {stat.value}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                      className="text-sm text-gray-400"
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-yellow-500/5" />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">Síguenos en redes sociales</h3>

                <div className="flex justify-center gap-4">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}