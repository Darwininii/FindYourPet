// Buscador.js
"use client"; // Directiva para que este componente se ejecute en el cliente

import { useState } from "react";
import { items } from "./datos"; // Ajusta la ruta según corresponda

export default function Buscador() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const input = event.target.value;
    setQuery(input);

    const results = items.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <div className="bg-gradient-to-r from-[#43c6ac] to-[#191654] flex items-center justify-center top-h-screen">
      {" "}
      {/* Centra el contenedor */}
      <div className="p-4 rounded w-1/2 md:w-1/3">
        {" "}
        {/* Contenedor del buscador */}
        <input
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={handleSearch}
          className="p-2 w-full border rounded"
        />
        {/* <ul className="mt-4">
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
