"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Contactanos", href: "#" },
    { label: "Noticias", href: "#" },
    { label: "Contacto", href: "#" },
    { label: "Ponte la Camiseta", href: "#" },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setScrollingDown(true) // Se está bajando
      } else {
        setScrollingDown(false) // Se está subiendo
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-Lavandasuave shadow-md transition-all duration-500 ease-in-out ${
        scrollingDown ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        {/* Logo centrado */}
        <div className="w-full flex justify-center py-1">
          <Link href="/" className="flex flex-col items-center ml-6">
            <Image
              src="/logo_ada1.png"
              alt="Logo Principal"
              width={250}
              height={150}
              className="rounded"
            />
          </Link>
          <Link href="/" className="flex flex-col items-right ml-2">
            <Image
              src="/logo_ada2.png"
              alt="Logo Secundario"
              width={70}
              height={100}
              className="rounded"
            />
          </Link>
        </div>

        {/* Desktop Menu con línea amarilla entre los elementos */}
        <div className="hidden lg:flex items-center space-x-4 ml-6">
          {menuItems.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <Link
                href={item.href}
                className="text-x text-blue-900 font-medium hover:text-yellow-400 transition-colors px-3"
              >
                {item.label}
              </Link>
              {index < menuItems.length - 1 && (
                <span className="border-r-2 border-yellow-400 h-6" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden absolute top-3 right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-blue-900 font-medium hover:text-yellow-400 transition-colors" />
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 w-full flex flex-col items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-4 text-blue-900 font-medium hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
