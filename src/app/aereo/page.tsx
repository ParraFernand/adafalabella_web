import { HeroAereo } from '@/components/hero_aereo';
<<<<<<< HEAD
import { Banner_aereo } from '@/components/banner_aereo';
=======
import { BannerAereo } from '@/components/banner_aereo';
>>>>>>> 762d824 (cambios 19)
import { Carousel } from '@/components/carousel';
import React from 'react';

const Page = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Video de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/oceano.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        {/* Capa de oscurecimiento opcional */}
        <div className="absolute inset-0 bg-black/50"/>
      </div>

      {/* Contenido principal */}
      <div>
        <HeroAereo />
<<<<<<< HEAD
        <Banner_aereo />
=======
        <BannerAereo />
>>>>>>> 762d824 (cambios 19)
        <div className="mt-5">
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Page;
