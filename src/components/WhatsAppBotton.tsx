import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/59178018946" 
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all duration-300"
    >
      <MessageCircle className="w-6 h-10" />
      <span>Cotiza tu importación Ahora</span>
    </Link>
  )
}
