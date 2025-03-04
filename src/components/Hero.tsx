import Hero1 from "../hero/hero.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <section className="bg-gray-900">
        <img
          src={Hero1.src}
          alt="Hero"
          width={1500}
          height={1500}
          className="w-700 h-100 object-cover opacity-70 "
        ></img>
      </section>
      <h1 className="absolute inset-0 flex  items-center justify-center text-white text-1xl sm:text-4xl md:text-6xl  ">
        Activities, grades, all in one place.
      </h1>
    </div>
  );
};

export default Hero;
