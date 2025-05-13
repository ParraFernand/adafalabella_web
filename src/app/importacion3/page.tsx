import { Hero } from "@/components/hero_imp3";
import { Importacion10 } from "@/components/importacion10";
import { Importacion11 } from "@/components/importacion11";
import { Importacion12 } from "@/components/importacion12";
import { Importacion13 } from "@/components/importacion13";
import { Importacion14 } from "@/components/importacion14";

const page = () => {
  return (
    <div className="space-y-20">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center bottom" }}
        >
          <source src="/world_network.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Hero />

      <Importacion11 />
      <Importacion12 />
      <Importacion13 />
      <Importacion14 />
      <Importacion10 />
    </div>
  );
};

export default page;
