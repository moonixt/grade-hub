import Image from "next/image";
import Uni from "../hero/jupiter.jpg";
import Old from "../hero/night.jpg";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 p-4  ">
      <div className="relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <section className="bg-gray-900 ">
          <Image
            src={Uni.src}
            width={1000}
            height={1000}
            alt="University"
            className="w-full h-full object-cover opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-white mb-2">Activities</h2>
          <p className="text-white ">
            Access the content and educational materials provided by the
            institution.
          </p>
        </div>
      </div>
      {/* <div className='text-black '> Content</div> */}
      <div className="relative shadow-md  overflow-hidden relative shadow-md overflow-hidden  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <section className="bg-gray-900">
          <Image
            src={Old.src}
            alt="University"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-60 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-white ">
            Access the dashboard, whether you are a student or a teacher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
