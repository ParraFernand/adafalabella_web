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
    <footer className="bg-gray-900 text-white">
      {/* Countries Banner */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Masterline Logo"
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
            <h3 className="text-brand-orange font-bold mb-4">Soluciones logísticas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Transporte marítimo</Link>
              </li>
              <li>
                <Link href="#">Transporte Aéreo</Link>
              </li>
              <li>
                <Link href="#">Transporte Terrestre</Link>
              </li>
              <li>
                <Link href="#">Proyectos industriales</Link>
              </li>
              <li>
                <Link href="#">Logística Contractual</Link>
              </li>
              <li>
                <Link href="#">Almacenaje y Distribución</Link>
              </li>
              <li>
                <Link href="#">Seguro de carga</Link>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-brand-orange font-bold mb-4">Descubre Masterline Group</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Nuestra historia</Link>
              </li>
              <li>
                <Link href="#">Nuestras oficinas</Link>
              </li>
              <li>
                <Link href="#">Noticias</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-brand-orange font-bold mb-4">Conéctate con nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Contáctanos</Link>
              </li>
              <li>
                <Link href="#">Solicita una cotización</Link>
              </li>
              <li>
                <Link href="#">Empleo</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-brand-orange font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-brand-orange">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-brand-orange">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-brand-orange">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Privacy Policy & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="#" className="text-brand-orange hover:underline">
              Políticas de privacidad
            </Link>
            <div className="text-sm text-gray-400">
              2024 © Masterline Logistics
              <br />
              2024 © Masterline Group
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

