import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const countries = [
    "BOLIVIA",
    "CHILE",
    "COLOMBIA",
    "COSTA RICA",
    "EL SALVADOR",
    "GUATEMALA",
    "HONDURAS",
    "NICARAGUA",
    "PANAMÁ",
    "PARAGUAY",
    "PERÚ",
    "REPDOMINICANA",
    "URUGUAY",
  ]

  return (
    <footer className="bg-blue-900 text-white">
      {/* Countries Banner */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Image
            src="/logo_ada2.png"
            alt="adfalabella Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <div className="text-sm text-center">{countries.join(" • ")}</div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Solutions */}
          <div>
            <h3 className="text-[#efc901] font-bold mb-4">Soluciones logísticas</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#efc901]" href="/importacion">Servicios de Importación</Link>
              </li>
              <li>
                <Link className="hover:text-[#efc901]" href="/exportacion">Servicios de Exportación</Link>
              </li>
             
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-[#efc901] font-bold mb-4">Descubre ADAFALABELLA</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#efc901]"  href="#">Nuestra historia</Link>
              </li>
              <li>
                <Link className="hover:text-[#efc901]" href="#">Nuestras oficinas</Link>
              </li>
              <li>
                <Link className="hover:text-[#efc901]" href="#">Noticias</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#efc901] font-bold mb-4">Conéctate con nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-[#efc901]" href="#">Contáctanos</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[#efc901]   font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#efc901]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#efc901]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#efc901]">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Privacy Policy & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="#" className="text-[#efc901] hover:underline">
              Políticas de privacidad
            </Link>
            <div className="text-sm text-gray-400">
              2025 © ADAFALABELLA S.R.L.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

