import { useState } from "react";

export default function Filtros({ onFilter }) {
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filtros); // Envía los filtros al padre
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-wrap gap-4 items-center">
      {/* Campo especie */}
      <select
        name="especie"
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 w-full sm:w-48"
      >
        <option value="">Todas las especies</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Ave">Ave</option>
      </select>

      {/* Campo ubicación */}
      <input
        type="text"
        name="ubicacion"
        placeholder="Ubicación"
        onChange={handleChange}
        className="border rounded-lg px-4 py-2 w-full sm:w-48"
      />

      {/* Botón filtrar */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Filtrar
      </button>
    </form>
  );
}
