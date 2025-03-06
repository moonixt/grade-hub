import Image from "next/image";
import Alan from "../gallery/alan.jpeg";
import Einstein from "../gallery/einstein.jpeg";
import Open from "../gallery/open.jpeg";
import Margaret from "../gallery/margaret.jpeg";

const GalleryNone = () => {
  return (
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4  ">
      <div className="relative  overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black ">
          <Image
            src={Alan.src}
            width={1000}
            height={1000}
            alt="University"
            className="w-auto h-150 sm:w-auto sm:h-190 object-none opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-white mb-2"></h2>
          {/* <p className="text-white ">
            Access the content and educational materials provided by the
            institution.
          </p> */}
        </div>
      </div>
      {/* <div className='text-black '> Content</div> */}
      <div className="relative   overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black">
          <Image
            src={Einstein.src}
            alt="University"
            width={1000}
            height={1000}
            className="w-auto h-150 sm:w-auto sm:h-190 object-none opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl  text-white mb-2"></h2>
          {/* <p className="text-white ">
            Access the dashboard, whether you are a student or a teacher.
          </p> */}
        </div>
      </div>
      <div className="relative  overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black">
          <Image
            src={Open.src}
            alt="University"
            width={1000}
            height={1000}
            className="w-auto h-150 sm:w-auto sm:h-190 object-none opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl  text-white mb-2"></h2>
          {/* <p className="text-white ">
            Access the dashboard, whether you are a student or a teacher.
          </p> */}
        </div>
      </div>
      <div className="relative  overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out  ">
        <section className="bg-black">
          <Image
            src={Margaret.src}
            alt="University"
            width={1000}
            height={1000}
            className="w-auto h-150 sm:w-auto sm:h-190 object-none opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl  text-white mb-2"></h2>
          {/* <p className="text-white ">
            Access the dashboard, whether you are a student or a teacher.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default GalleryNone;
