import { ContactForm } from "@/components/contac"


export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      
       <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center bottom" }}
        >
          <source src="https://res.cloudinary.com/dcoidemmj/video/upload/v1747644626/pista_zwdspz.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
 
        {/* Bottom right blur */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full filter blur-[100px]" />
      </div>

      <ContactForm />
    </div>
  )
}