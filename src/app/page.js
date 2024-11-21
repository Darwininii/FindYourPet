"use client";

import { useState } from "react";

import Donacion from "../Componentes/Donaciones";

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio");

  const renderSection = () => {
    switch (activeSection) {
      case "donacion":
        return <Donacion />;

      default:
        return <div>Selecciona una sección en el Navbar</div>;
    }
  };
}
