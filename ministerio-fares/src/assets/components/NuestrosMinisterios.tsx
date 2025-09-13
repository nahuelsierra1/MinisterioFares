import { useEffect, useState } from "react";
import CardMinisterio from "./CardMinisterio";

const cards = [
  {
    title: "MUSICA",
    description: "Alabamos y adoramos juntos.",
    button: "CONOCER +",
    img: "../public/img/card-musica.jpg"
  },
  {
    title: "COMEDOR",
    description: "Alimentando.",
    button: "CONOCER +",
    img: "../public/img/card-comedor.jpg"
  },
  {
    title: "JOVENES",
    description: "Espacio para jóvenes y adolescentes.",
    button: "CONOCER +",
    img: "../public/img/card-jovenes.jpg"
  },
];

function NuestrosMinisterios() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black w-full min-h-screen">
      <div className="text-center mb-30 pt-30">
        <h3 className="text-[16px] font-bold text-green-500">NUESTROS</h3>
        <h2 className="text-[45px] font-bold text-white leading-6">MINISTERIOS</h2>
      </div>
      <div className="relative w-full max-w-xl h-56 mx-auto overflow-visible">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0 min-w-full h-56 flex items-center justify-center
                transition-all duration-700
                ${idx === activeIndex
                  ? "scale-105 z-10 shadow-2xl"
                  : "scale-90 opacity-60 z-0"}
              `}
            >
              <CardMinisterio {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NuestrosMinisterios;