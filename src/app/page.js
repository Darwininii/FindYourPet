import Image from "next/image";
import Navbar from "./Componentes/Navbar";
import SearchComponent from "./Componentes/Buscador";
import Buscador from "./Componentes/Buscador";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Buscador />
    </div>
  );
}
