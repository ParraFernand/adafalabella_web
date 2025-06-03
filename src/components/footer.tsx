import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

export function Footer() {
  const countries = [
    "BOLIVIA",
    "CHILE",
    "PERÚ",
    "BRASIL",
    "ESTADOS UNIDOS",
    "ARGENTINA",
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-800 via-gray-950 to-black text-white">
      {/* Countries Banner */}
      <div className="from-gray-800 via-gray-950 to-black py-4">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Image
            src="/logo_ada2.png"
            alt="adfalabella Logo"
            width={100}
            height={30}
            className="mr-4"
          />
          <div className="font-barlowCondensed text-xl md:text-3xl text-center">{countries.join(" • ")}</div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Solutions */}
          <div>
            <h3 className="text-[#efc901] font-barlowCondensed mb-4 text-xl">Soluciones a tus problemas</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#efc901] font-barlowCondensed text-xl"  href="/servicios">Nuestros Servicios </Link>
              </li>
             
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-[#efc901] font-barlowCondensed mb-4 text-xl">Descubre ADAFALABELLA</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#efc901] font-barlowCondensed text-xl"  href="/nosotros">Nuestra historia</Link>
              </li>
              <li>
                <Link className="hover:text-[#efc901] font-barlowCondensed text-xl" href="/contacto">Nuestras oficinas</Link>
              </li>
              <li>
                <Link className="hover:text-[#efc901] font-barlowCondensed text-xl" href="/noticias">Noticias</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#efc901] font-barlowCondensed text-xl mb-4">Conéctate con nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#efc901] font-barlowCondensed text-xl" href="#">Contáctanos</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[#efc901] font-barlowCondensed text-xl mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/profile.php?id=61572991178249" className="hover:text-[#efc901]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/adafalabella_ag_despachante?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-[#efc901]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/adafalabella-srl/" className="hover:text-[#efc901]">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/59178018946" className="hover:text-[#efc901]">
                <FaWhatsapp className="h-6 w-6" />
              </Link>
              <Link href="https://www.tiktok.com/@ag.adafalabellasrl?is_from_webapp=1&sender_device=pc" className="hover:text-[#efc901]">
                <FaTiktok className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Privacy Policy & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="#" className="text-[#efc901] hover:underline font-barlowCondensed text-xl">
              Políticas de privacidad
            </Link>
            <div className="text-gray-400 font-barlowCondensed text-xl" >
              2025 © ADAFALABELLA S.R.L.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

