
import Image from "next/image"
import Git from "../hero/git.png"
import Link from "next/link"

const Footer = () => {

//     const redir = () => {
//         <a href="https://github.com/moonixt"></a>
//         return redir
//     }

  return (
    <footer>
        <div className="bg-black shadow-sm dark:border-b dark:border-gray-800 h-22 w-full ">
            <section className="text-white flex justify-center pt-5 items-center">
                <h1>All rights reserved @GradeHub</h1>
            </section>
            <section className="text-white flex justify-center items-center">
                <Link href="https://github.com/moonixt">
                <Image 
                src={Git.src}
                alt="Git"
                 width={30} 
                 height={30}
                 ></Image>
                 </Link>
            </section>
        </div>
      </footer>
  )
}

export default Footer
