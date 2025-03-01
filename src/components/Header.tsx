import { IoTriangleSharp } from "react-icons/io5";
import "../styles/globals.css";


const Header = () => {
  return (
    <div className=' headermaincolor shadow-sm dark:border-b dark:border-gray-800 h-22 w-full flex items-center pt-2 pl-2 '>
      <section className="pb-1 ">
      <IoTriangleSharp 
      size={60}/>
      </section>
      <section>
      <h1 className='text-white text-4xl'> GradeHub</h1>
      </section>
    </div>
  )
}

export default Header
