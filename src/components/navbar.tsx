"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
//import { Button } from "@/components/ui/button";
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
    { label: "Servicios", href: "/servicios" },
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
        opacity: scrollingDown ? 0 : 1
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 left-0 right-0 z-50"
    >
      <div 
        className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-b from-gray-100 via-blue-300 to-blue-900"
        style={{
          borderBottom: "3px solid #efc901",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-28 py-4">
        <div className="w-full flex justify-between items-center">
          {/* Logos */}
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="transform hover:scale-105 transition-transform duration-300">
              <Image src="/logo_ada1.png" alt="Logo Principal" width={230} height={60} className="rounded" />
            </Link>
            <Link href="/" className="transform hover:scale-110 transition-transform duration-300">
              <Image src="/logo_ada2.png" alt="Logo Secundario" width={70} height={40} className="rounded" />
            </Link>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            className="hidden lg:flex gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, index) => (
              <Link 
                key={index}
                href={href}
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative"
                >
                  <Icon className="h-6 w-6 text-[#07479c] transition-colors duration-300 group-hover:text-[#efc901]" />
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#efc901] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            ref={closeButtonRef}
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <motion.div 
          className="hidden lg:flex justify-center mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <Link 
                  href={item.href}
                  className="relative group px-4 py-2"
                  onClick={() => setActiveItem(item.href)}
                >
                  <span className="text-white text-sm font-medium transition-colors duration-300 group-hover:text-[#efc901]">
                    {item.label}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#efc901] transform origin-left transition-transform duration-300 ${activeItem === item.href ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`} />
                </Link>
                {index < menuItems.length - 1 && (
                  <span className="h-4 w-px bg-[#efc901]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden"
          >
            <motion.div 
              className="flex flex-col items-center py-4"
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
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    className="block py-3 px-6 text-blue-900 font-medium hover:bg-blue-50 transition-colors duration-300"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveItem(item.href);
                    }}
                  >
                    {item.label}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="h-px bg-blue-100 mx-6" />
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