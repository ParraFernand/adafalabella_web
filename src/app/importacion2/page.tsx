import { Hero } from "@/components/hero_imp2";
import { Importacion2 } from "@/components/importacion2";

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
      <Importacion2 />
    </div>
  );
};

export default page;
