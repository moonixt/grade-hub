import Image from "next/image";
import Hero2 from "../hero/hero2.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <section className="bg-gray-900">
        <Image
          src={Hero2.src}
          alt="Hero"
          width={1500}
          height={1500}
          className="w-700 h-100 sm:h-200 object-cover opacity-50 "
        ></Image>
      </section>
      <h1 className="absolute inset-0 flex  items-center justify-center text-white text-1xl sm:text-4xl md:text-6xl  ">
        Activities, grades, all in one place.
      </h1>
    </div>
  );
};

export default Hero;
