import Uni from "../hero/uni.jpg";
import Old from "../hero/old.jpg";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-4" >
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={Uni.src}
          alt="University"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-black mb-2">Atividades</h2>
          <p className="text-black mb-4">
            Acesse o conteúdo e materiais didaticos disponibilizado pela instituição.
          </p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Acessar
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={Old.src}
          alt="University"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-black mb-2">Dashboard</h2>
          <p className="text-black mb-4">
            Acesse a dashboard, sendo você aluno ou professor.
          </p>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Acessar
          </button>
        </div>
      </div>
      
    
    </div>
  );
};

export default Cards;
