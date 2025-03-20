
export function SobreNosotros() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-7 min-h-screen">
      {/* Sección izquierda - Contenido alineado a la izquierda */}
      <div className="flex flex-col justify-center p-8 bg-black text-white md:col-span-3 md:pl-16">
        <div className="max-w-md space-y-8">
          <div className="space-y-4">
            <div className="w-12 h-1 bg-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gold">
              Estamos aquí <br /> para mover su negocio.
            </h2>
            <div className="w-12 h-1 bg-white" />
            <p className="text-xl md:text-2xl">
              ADAFALABELLA SRL. ha ofrecido sus servicios de la más alta calidad a los 
              residentes de toda Bolivia desde el año 2020. Un servicio excelente comienza con 
              personas excelentes y con mucha experiencia, por lo que nos esforzamos en elegir 
              a los mejores para nuestro equipo. Siempre contará con un equipo cuyas prioridades 
              sean la puntualidad, la seguridad y la atención. Nuestro objetivo no es sólo satisfacer 
              sus necesidades, sino también exceder sus expectativas de lo que debe ofrecerle un 
              Operador Logístico de Transporte Internacional.
            </p>
            <div className="w-12 h-1 bg-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gold">
              ¡No solamente manejamos números, sino también <br /> EMOCIONES!
            </h2>
            <div className="w-12 h-1 bg-white" />
          </div>
        </div>
      </div>

      {/* Sección derecha - Imagen más ancha */}
      <div
        className="relative bg-cover bg-center bg-fixed md:col-span-4"
        style={{
          backgroundImage: "url('/edificio.jpg')", // Reemplaza con la URL correcta
          minHeight: "100vh",
        }}
      >
        {/* Capa de color para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </section>
  );
}
