import Image from 'next/image';
import Uni from "../hero/jupiter.jpg";
import Old from "../hero/night.jpg";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 p-4 ">
      <div className="relative shadow-md overflow-hidden  ">
        <section className="bg-gray-900">
          <Image
            src={Uni.src}
            alt="University"
            className="w-full h-full object-cover opacity-70 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-white mb-2">Atividades</h2>
          <p className="text-white ">
            Acesse o conteúdo e materiais didaticos disponibilizado pela
            instituição.
          </p>
        </div>
      </div>
      <div className="relative shadow-md  overflow-hidden ">
        <section className="bg-gray-900">
          <img
            src={Old.src}
            alt="University"
            className="w-full h-full object-cover opacity-60 "
          />
        </section>
        <div className="absolute inset-5 flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
          <p className="text-white ">
            Acesse a dashboard, sendo você Aluno ou professor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
