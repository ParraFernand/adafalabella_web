import { Hero } from "@/components/hero_imp6";

import dynamic from "next/dynamic";
//import { Importacion3 } from "@/components/importacion3";

const Importacion6 = dynamic(() =>  import("@/components/importacion6").then(mod => mod.Importacion6))

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
          <source src="https://res.cloudinary.com/dcoidemmj/video/upload/v1747167835/world_network_jcnhky.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <Hero />

      <Importacion6 />
    </div>
  );
};

export default page;
