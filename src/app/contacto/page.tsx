import { ContactForm } from "@/components/contac"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/fondo_nosotros.jpg"
          alt="Background"
          width={2419}
          height={2249}
          className="object-cover w-full h-full"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-indigo-950/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left blur */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[100px]" />

        {/* Bottom right blur */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full filter blur-[100px]" />
      </div>

      <ContactForm />
    </div>
  )
}