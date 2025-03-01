import Hero1 from "../hero/hero.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={Hero1.src}
        alt="Hero"
        width={2000}
        height={1500}
        className="w-full h-auto object-cover blur-[1px] "
      ></img>
      <h1 className="absolute inset-0 flex  items-center justify-center text-white  text-1xl sm:text-4xl md:text-6xl ">
        Atividades, notas, tudo em um só lugar.
      </h1>
    </div>
  );
};

export default Hero;
