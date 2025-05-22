"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" }, // ← Quitar `submenu`
    { label: "Nosotros", href: "/nosotros" },
    { label: "Noticias", href: "/noticias" },
    { label: "Contacto", href: "/contacto" },
  ];


  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setScrollingDown(window.scrollY > lastScrollY && window.scrollY > 100);
      lastScrollY = window.scrollY;
    };

    const handleClickOutside = (event: Event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        closeButtonRef.current !== event.target
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: scrollingDown ? -100 : 0,
        opacity: scrollingDown ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 left-0 right-0 z-50"
    >
      <div
        className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-b from-gray-800 via-gray-900 to-black"
        style={{
          borderBottom: "5px solid #efc901",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-0 py-3">
        <div className="w-full flex justify-between items-center gap-6">
          {/* Logos */}
          <div className="flex items-start space-x-10 flex-shrink-0 gap-x-10">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/" className="group relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src="/logo_ada3.png"
                    alt="Logo Principal"
                    width={280}
                    height={410}
                    className="w-48 sm:w-44 md:w-56 rounded transition-all duration-500"
                  />
                  <span className="absolute inset-0 bg-[#efc901] opacity-0 rounded transition-opacity duration-300" />
                </motion.div>
              </Link>
              <Link href="/" className="group relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src="/logo_ada2.png"
                    alt="Logo Principal"
                    width={90}
                    height={410}
                    className="w-20 sm:w-44 md:w-24 rounded transition-all duration-500"
                  />
                  <span className="absolute inset-0 bg-[#efc901] opacity-0 rounded transition-opacity duration-300" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
          {/* Desktop Menu - Versión mejorada */}

          <motion.div
            className="hidden lg:flex w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center   space-x-1">
              {menuItems.map((item) => (
                <div key={item.label} className="flex items-center relative">
                  <Link
                    href={item.href}
                    className="relative group px-5 py-3"
                    onClick={() => setActiveItem(item.href)}
                  >
                    <span className="text-white text-base font-mono uppercase tracking-wider transition-all duration-300 group-hover:text-[#efc901] flex items-center">
                      {item.label}
                    </span>

                    {/* Líneas decorativas (igual que antes) */}
                    <span
                      className={`
            absolute left-0 top-0 h-full w-0.5 bg-[#efc901]
            transform origin-top transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
            ${
              activeItem === item.href
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0"
            }
            group-hover:scale-y-100 group-hover:opacity-100
            rounded-full
            shadow-[0_0_8px_rgba(239,201,1,0.6)]
          `}
                    />

                    <span
                      className={`
            absolute right-0 top-0 h-full w-0.5 bg-[#efc901]
            transform origin-top transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
            ${
              activeItem === item.href
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0"
            }
            group-hover:scale-y-100 group-hover:opacity-100
            rounded-full
            shadow-[0_0_8px_rgba(239,201,1,0.6)]
          `}
                    />
                  </Link>

                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Media Icons mejorados */}
          <motion.div
            className="hidden lg:flex gap-4 items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                Icon: Facebook,
                href: "https://www.facebook.com/profile.php?id=61572991178249",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/adafalabella_ag_despachante?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/adafalabella-srl/",
              },
              { Icon: FaWhatsapp, href: "https://wa.me/59178018946" },
              {
                Icon: FaTiktok,
                href: "https://www.tiktok.com/@ag.adafalabellasrl?is_from_webapp=1&sender_device=pc",
                label: "TikTok",
              },
            ].map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: index % 2 ? 10 : -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <Icon className="h-6 w-6 text-white transition-all duration-300 group-hover:text-[#efc901] group-hover:drop-shadow-[0_0_8px_rgba(239,201,1,0.6)]" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#efc901]/30 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Link>
            ))}

            {/* Botón de contacto mejorado */}
            <Link href="/contacto">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
              bg-[#FFD700] hover:bg-[#07479c] 
              text-[#07479c] hover:text-white font-semibold 
              py-2 px-5
              rounded-lg 
              shadow-md hover:shadow-lg 
              transition-all duration-300 
              ease-out 
              focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-opacity-50
              relative overflow-hidden
            "
              >
                <span className="relative z-10 uppercase">Contáctanos</span>
                <span className="absolute inset-0 bg-[#07479c] opacity-0 hover:opacity-10 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            ref={closeButtonRef}
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 text-[#efc901]" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu mejorado */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#11079c]/95 backdrop-blur-lg shadow-xl overflow-hidden border-t border-[#efc901]/30"
          >
            <motion.div
              className="flex flex-col items-center py-2"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                closed: {},
              }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 300 },
                    },
                    closed: {
                      opacity: 0,
                      y: 20,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="w-full"
                >
                  <div className="flex flex-col">
                    <Link
                      href={item.href}
                      className="block py-4 px-6 text-white font-mono uppercase text-center hover:bg-[#efc901]/10 transition-colors duration-300 relative group"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveItem(item.href);
                      }}
                    >
                      {item.label}
                      <span className="absolute left-1/2 bottom-2 w-0 h-0.5 bg-[#efc901] transition-all duration-300 group-hover:w-10 group-hover:left-[calc(50%-20px)]" />
                    </Link>


                  </div>

                  {index < menuItems.length - 1 && (
                    <div className="h-px bg-[#efc901]/10 mx-6" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
