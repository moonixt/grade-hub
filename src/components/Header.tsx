import Image from 'next/image';
import Hub from "../hero/hub.png";

const Header = () => {
  return (
    <div className="bg-black shadow sticky top-0 z-50 border-b border-black shadow-sm h-20 w-full flex items-center justify-between  pt-2 pl-2 ">
      <section>
        <h1 className="text-red-600 text-white sm:text-3xl text-1xl ">
          {" "}
          GradeHub
        </h1>
      </section>
      <section className="pr-5">
        <Image
          src={Hub.src}
          alt="logo"
          width={50}
          height={50}
          className="rounded-md object-cover"
        />
      </section>
    </div>
  );
};

export default Header;
