"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Ajusta la ruta si es necesario
import Filtros from "@/Componentes/Filtros";
import TarjetaMascota from "@/Componentes/TarjetaMascota";
import ComentariosList from "@/Componentes/ComentariosList";
import Comentarios from "@/Componentes/Comentarios";

export default function HomePage() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" });
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "publicaciones"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const publicacionesArray = [];
      querySnapshot.forEach((doc) => {
        publicacionesArray.push({ id: doc.id, ...doc.data() });
      });
      console.log("Publicaciones cargadas:", publicacionesArray); // Verifica las publicaciones cargadas
      setPublicaciones(publicacionesArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const mascotasFiltradas = publicaciones.filter((mascota) => {
    const coincideEspecie =
      !filtros.especie ||
      (mascota.especie &&
        mascota.especie.toLowerCase() === filtros.especie.toLowerCase());
    const coincideUbicacion =
      !filtros.ubicacion ||
      (mascota.ubicacion &&
        mascota.ubicacion
          .toLowerCase()
          .includes(filtros.ubicacion.toLowerCase()));
    return coincideEspecie && coincideUbicacion;
  });

  const abrirModal = (mascota) => setModalData(mascota);
  const cerrarModal = () => setModalData(null);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-36 w-36 border-t-8 bg-custom-gradient"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Mascotas Perdidas</h1>

      <Filtros onFilter={(nuevosFiltros) => setFiltros(nuevosFiltros)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {mascotasFiltradas.map((mascota) => {
          console.log("Datos de la tarjeta:", mascota); // Verifica los datos que se pasan al componente
          return (
            <TarjetaMascota
              key={mascota.id}
              mascota={{
                ...mascota,
                imagen: mascota.imagen || "/placeholder.jpg", // Imagen predeterminada
              }}
              onClick={() => abrirModal(mascota)}
            />
          );
        })}
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
            <h2 className="text-2xl font-bold">
              {modalData.nombreMascota || "Sin nombre"}
            </h2>
            <img
              src={modalData.imagen || "/placeholder.jpg"}
              alt={modalData.nombreMascota || "Mascota"}
              className="w-full h-64 object-cover mt-4 rounded-lg"
            />
            <p className="mt-4">{modalData.descripcion || "Sin descripción"}</p>
            <p className="mt-2">
              <strong>Ubicación:</strong>{" "}
              {modalData.ubicacion || "No especificada"}
            </p>

            <ComentariosList publicacionId={modalData.id} />
            <Comentarios
              publicacionId={modalData.id}
              userId={modalData.userId}
            />

            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">
                Me gusta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
