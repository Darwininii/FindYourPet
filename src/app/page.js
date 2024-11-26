"use client";

import { useState, useEffect } from "react";
import Filtros from "./Componentes/Filtros";
import TarjetaMascota from "./Componentes/TarjetaMascota";

export default function HomePage() {
  const [mascotas, setMascotas] = useState([]);  // Inicializamos como array vacío
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" });

  // Obtener las mascotas desde la API
  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const res = await fetch("/api/mascotas");  // Endpoint para obtener mascotas
        const data = await res.json();
        setMascotas(data);
      } catch (error) {
        console.error("Error al obtener las mascotas:", error);
      }
    };

    fetchMascotas();  // Llamamos a la función para cargar las mascotas
  }, []);  // El array vacío asegura que solo se ejecute una vez cuando se monte el componente

  const handleFilter = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  // Filtrar las mascotas según los filtros
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      !filtros.especie || mascota.especie.toLowerCase() === filtros.especie.toLowerCase();
    const coincideUbicacion =
      !filtros.ubicacion || mascota.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase());
    return coincideEspecie && coincideUbicacion;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Mascotas Perdidas</h1>

      {/* Filtros */}
      <Filtros onFilter={handleFilter} />

      {/* Resultados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {mascotasFiltradas.map((mascota) => (
          <TarjetaMascota key={mascota.id} mascota={mascota} />
        ))}
      </div>
    </div>
  );
}
