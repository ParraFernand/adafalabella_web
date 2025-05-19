import { ServiciosPage } from "@/components/servicios";
import { Hero } from "@/components/hero_srv";
import {Exportacion} from '@/components/exportacion';

const page = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background with parallax effect */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center bottom" }}
        >
          <source src="https://res.cloudinary.com/dcoidemmj/video/upload/v1747167827/puerto1_dzi1eq.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Hero />
      <ServiciosPage />
      <Exportacion/>
    </div>
  );
};

export default page;
