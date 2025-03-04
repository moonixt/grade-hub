import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Container>
        <main className="pt-10 pb-10 gap-8 row-start-2 items-center sm:items-start text-black font-bold">
          <div className="text-3xl">
            <h1>Featured News</h1>
          </div>
          <Cards></Cards>
        </main>
      </Container>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
        <div className="bg-black shadow-sm dark:border-b dark:border-gray-800 h-22 w-full flex items-center pt-2 pl-2 "></div>
      </footer>
    </div>
  );
}
