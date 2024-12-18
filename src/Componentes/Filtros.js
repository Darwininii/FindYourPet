import { useState } from "react";
import Filtro from "../Componentes/Filtro.css";
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
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-wrap gap-4 items-centerc buscar-mascota"
    >
      {/* Campo especie */}
      <select name="especie" onChange={handleChange} className="style sub_ttl">
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
        className="style sub_ttl"
      />

      {/* Botón filtrar */}
      <button type="submit" className=" boton">
        Filtrar
      </button>
    </form>
  );
}
