import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
