import Image from "next/image";
import Alan from "../gallery/alan.jpeg";
import Einstein from "../gallery/einstein.jpeg";
import Open from "../gallery/open.jpeg";
import Margaret from "../gallery/margaret.jpeg";
import Link from "next/link";

const GalleryCover = () => {
  return (
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 pt-1 ">
      <div className="relative  overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black ">
          <Image
            src={Alan.src}
            width={1000}
            height={1000}
            alt="Alan Turing"
            className="w-auto h-150 sm:w-auto sm:h-150 object-cover opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-white mb-2">Tests</h2>
          <p className="text-white ">
            Access the content and educational materials provided by the
            institution.
          </p>
        </div>
      </div>
      {/* <div className='text-black '> Content</div> */}
      <div className="relative   overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black">
          <Image
            src={Einstein.src}
            alt="Albert Einstein"
            width={1000}
            height={1000}
            className="w-auto h-150 sm:w-auto sm:h-150 object-cover opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl  text-white mb-2">Articles</h2>
          {/* <p className="text-white ">
          Access the dashboard, whether you are a student or a teacher.
        </p> */}
        </div>
      </div>
      <div className="relative  overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black">
          <Image
            src={Open.src}
            alt="Robert Openheimmer"
            width={1000}
            height={1000}
            className="w-auto h-150 sm:w-auto sm:h-150 object-cover opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <Link href="/our-work">
            <h2 className="text-3xl  text-white mb-2">Our work</h2>
          </Link>
          {/* <p className="text-white ">
          Access the dashboard, whether you are a student or a teacher.
        </p> */}
        </div>
      </div>
      <div className="relative  overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black">
          <Image
            src={Margaret.src}
            alt="Margaret"
            width={1000}
            height={1000}
            className="w-auto h-150 sm:w-auto sm:h-150 object-cover opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl  text-white mb-2">See more</h2>
          {/* <p className="text-white ">
          Access the dashboard, whether you are a student or a teacher.
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryCover;
