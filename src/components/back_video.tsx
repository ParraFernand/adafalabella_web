// components/BackgroundVideo.tsx
const BackgroundVideo = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-[-10] overflow-hidden">
        {/* Video en blanco y negro */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover "
        >
          <source src="/puerto.mp4" type="video/mp4" />
          Tu navegador no soporta el video de fondo.
        </video>
  
        {/* Capa de oscurecimiento */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>
    );
  };
  
  export default BackgroundVideo;
  