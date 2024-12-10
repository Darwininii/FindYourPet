"use client";

import { useState, useEffect } from "react";
import Filtros from "@/Componentes/Filtros";
import TarjetaMascota from "@/Componentes/TarjetaMascota";
import Navbar from "@/Componentes/Navbar";
import ComentariosList from "@/Componentes/ComentariosList"; 
import Comentarios from "@/Componentes/Comentarios"; 

export default function HomePage() {
  const [mascotas, setMascotas] = useState([]);  
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" });
  const [modalData, setModalData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const res = await fetch("/api/mascotas");  
        const data = await res.json();
        setMascotas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las mascotas:", error);
      }
    };

    fetchMascotas(); 
  }, []);  

  const handleFilter = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      !filtros.especie || mascota.especie.toLowerCase() === filtros.especie.toLowerCase();
    const coincideUbicacion =
      !filtros.ubicacion || mascota.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase());
    return coincideEspecie && coincideUbicacion;
  });

  const abrirModal = (mascota) => {
    setModalData(mascota);
  };

  const cerrarModal = () => {
    setModalData(null);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Mascotas Perdidas</h1>

        
        <Filtros onFilter={handleFilter} />

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {mascotasFiltradas.map((mascota) => (
            <TarjetaMascota
              key={mascota.id}
              mascota={mascota}
              onClick={() => abrirModal(mascota)} 
            />
          ))}
        </div>
      </div>

      
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <button
              className="text-red-500 font-bold float-right"
              onClick={cerrarModal}
            >
              X
            </button>
            <h2 className="text-2xl font-bold">{modalData.nombre}</h2>
            <img
              src={modalData.imagen}
              alt={modalData.nombre}
              className="w-full h-64 object-cover mt-4 rounded-lg"
            />
            <p className="mt-4">{modalData.descripcion}</p>
            <p className="mt-2"><strong>Ubicación:</strong> {modalData.ubicacion}</p>

            {/* Mostrar los comentarios */}
            <ComentariosList publicacionId={modalData.id} />

            {/* Agregar un nuevo comentario */}
            <Comentarios publicacionId={modalData.id} userId={modalData.userId} />

            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/publicacion/${modalData.id}`);
                  alert("Enlace copiado al portapapeles");
                }}
              >
                Compartir
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">
                Me gusta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
