"use client";

import { useState } from "react";
import Navbar from "./Componentes/Navbar";
import Buscador from "./Componentes/Buscador";
import Footer from "./Componentes/Footer";
import Contenedor from "./Componentes/Contenedor";
import Donacion from "./Componentes/Donaciones";
import Ayuda from "./Componentes/Ayuda";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  const renderSection = () => {
    switch (activeSection) {
      case "donacion":
        return <Donacion />;
      case "ayuda":
        return <Ayuda />;
      default:
        return <div>Selecciona una sección en el Navbar</div>;
    }
  };

  return (
    <div>
      <Navbar onSectionChange={setActiveSection} />
      <Buscador />

      <Contenedor>{renderSection()}</Contenedor>
      <Footer />
    </div>
  );
}
