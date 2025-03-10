"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Aproxímate", href: "/aproximate" },
    { label: "Noticias", href: "#" },
    { label: "Contáctanos", href: "/contacto" },
    { label: "Ponte la Camiseta", href: "#" },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      setScrollingDown(window.scrollY > lastScrollY && window.scrollY > 100)
      lastScrollY = window.scrollY
    }

    const handleClickOutside = (event: Event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        closeButtonRef.current !== event.target) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-in-out ${scrollingDown ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ backgroundImage: "url('/sky.png')", backgroundSize: "cover" }}
    >
      <div className="container mx-auto px-28 flex flex-col items-center py-3">
        {/* Logos y Redes sociales */}
        <div className="w-full flex justify-around items-center py-0">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/logo_ada1.png" alt="Logo Principal" width={230} height={60} className="rounded" />
            </Link>
            <Link href="/">
              <Image src="/logo_ada2.png" alt="Logo Secundario" width={70} height={40} className="rounded" />
            </Link>
          </div>

          <div className="hidden lg:flex gap-10">
            <Link href="#" className="hover:text-yellow-400"><Facebook className="h-6 w-6" /></Link>
            <Link href="#" className="hover:text-yellow-400"><Instagram className="h-6 w-6" /></Link>
            <Link href="#" className="hover:text-yellow-400"><Linkedin className="h-6 w-6" /></Link>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-blue-900" /> : <Menu className="h-6 w-6 text-blue-900" />}
          </Button>
        </div>

        {/* Menú */}
        <div className="w-full flex flex-col items-center">
          <div className="hidden lg:flex items-center space-x-3">
            {menuItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <Link href={item.href} className="text-x text-blue-900 font-medium hover:text-yellow-400 transition-colors px-3">
                  {item.label}
                </Link>
                {index < menuItems.length - 1 && <span className="border-r-2 border-yellow-400 h-5" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
{isMenuOpen && (
  <div
    ref={menuRef}
    className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 z-50"
  >


    {/* Enlaces del menú móvil */}
    {menuItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="block py-2 text-blue-900 font-medium hover:text-yellow-400 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
      </Link>
    ))}
  </div>
)}

    </nav>
  )
}
