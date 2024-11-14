import Image from "next/image";
import Navbar from "./Componentes/Navbar";
import Buscador from "./Componentes/Buscador";
import Footer from "./Componentes/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Buscador />
      <Footer />
    </div>
  );
}
