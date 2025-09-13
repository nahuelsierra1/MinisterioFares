type CardMinisterioProps = {
  title: string;
  description: string;
  button: string;
  img: string;
};

function CardMinisterio({ title, description, button, img }: CardMinisterioProps) {
  return (
    <div
      className="relative rounded-xl w-80 h-110 mt-40 mx-auto flex flex-col justify-center items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${img.startsWith('/') ? img : img.replace('../public', '')})`,
      }}
    >
      {/* Gradient overlay primero */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent z-0" />
      <div className="relative z-10 px-8 text-center w-full">
        <h4 className="text-2xl font-bold mb-2 text-white drop-shadow">{title}</h4>
        <p className="text-white drop-shadow mb-4">{description}</p>
        <button className="border border-2 px-4 py-2 text-white rounded transition">
          {button}
        </button>
      </div>
    </div>
  );
}

export default CardMinisterio;