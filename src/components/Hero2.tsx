import Image from "next/image";
import Books from "../hero/books.jpg";

const Hero2 = () => {
  return (
    <div className="relative">
      <section className="bg-black">
        <Image
          src={Books.src}
          alt="Bookshelf"
          width={1500}
          height={1500}
          className="w-700 h-100 sm:h-200 object-cover opacity-50 "
        ></Image>
      </section>
      <h1 className="absolute inset-0 flex  items-center justify-center text-white text-1xl sm:text-4xl md:text-6xl  ">
        Join us now @
      </h1>
    </div>
  );
};

export default Hero2;
