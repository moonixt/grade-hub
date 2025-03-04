import Cards from "@/components/Cards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Container from "@/components/Container";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Container>
        <main>
          <div className="text-3xl pt-10 pb-5 gap-8 row-start-2 items-center sm:items-start text-black font-bold">
            <h1>Featured News</h1>
          </div>
          <Cards></Cards>
          <Content></Content>
        </main>
      </Container>
      <Hero2 />
      <Footer></Footer>
    </div>
  );
}
