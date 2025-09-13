import Header from "./Header";

function Hero() {

  return (
    <>
    <section className="flex flex-col justify-center items-center h-svh w-full hero px-5">
      <Header></Header>

      <div className=" text-white text-center mb-15 z-10">
        <h3 className="text-xl font-bold m-0 leading-0">MINISTERIO</h3>
        <h2 className="text-8xl font-bold m-1">FARES</h2>
        <h3 className="text-xl font-bold m-0 leading-0">APOSTOLICO Y PROFETICO</h3>
      </div>
      <div className="titulo z-10">
        <h1 className="text-[80px] font-black text-white w-[90%] leading-[65px]">UN LUGAR PARA LA FAMILIA</h1>
      </div>
      <hr className="border-0 w-[100%] h-1 bg-white my-[30px] z-10"/>
      <div className="reuniones text-white font-bold text-center z-10">
        <h3 className="mb-4 font-bold">REUNIONES</h3>
        <p className="border border-3 py-2 px-5 mb-2">MIERCOLES 19PM</p>
        <p className="border border-3 py-2 px-5">DOMINGOS 18PM</p>
      </div>
      
    </section>
          <div className="absolute bottom-0 w-full h-[600px] bg-gradient-to-t from-blue-700 via-blue-500 to-transparent z-0"></div>
    </>
  );
}
export default Hero;