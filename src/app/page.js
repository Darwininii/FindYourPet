"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Filtros from "@/Componentes/Filtros";
import TarjetaMascota from "@/Componentes/TarjetaMascota";
import ComentariosList from "@/Componentes/ComentariosList";
import Comentarios from "@/Componentes/Comentarios";

export default function HomePage() {
  const [publicaciones, setPublicaciones] = useState([]); // Publicaciones desde Firestore
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" }); // Filtros aplicados
  const [modalData, setModalData] = useState(null); // Datos para el modal
  const [loading, setLoading] = useState(true); // Estado de carga

  // Obtener publicaciones desde Firestore en tiempo real
  useEffect(() => {
    const q = query(collection(db, "publicaciones"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const publicacionesArray = [];
      querySnapshot.forEach((doc) => {
        publicacionesArray.push({ id: doc.id, ...doc.data() });
      });
      console.log("Publicaciones cargadas:", publicacionesArray);
      setPublicaciones(publicacionesArray);
      setLoading(false); // Cambiar estado de carga a falso
    });

    return () => unsubscribe(); // Limpiar la suscripción al desmontar
  }, []);

  // Manejo del modal
  const abrirModal = (publicacion) => {
    console.log("Publicación seleccionada:", publicacion); // Verificar en la consola
    setModalData(publicacion);
  };
  const cerrarModal = () => setModalData(null);

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-36 w-36 border-t-8 bg-custom-gradient"></div>
      </div>
    );
  }

  // Mostrar mensaje si no hay publicaciones
  if (publicaciones.length === 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">No hay mascotas registradas</h2>
        <p>¡Sé el primero en reportar una mascota perdida!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Mascotas Perdidas</h1>

      {/* Componente de Filtros */}
      <Filtros onFilter={(nuevosFiltros) => setFiltros(nuevosFiltros)} />

      {/* Lista de publicaciones */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {publicaciones.map((publicacion) => (
          <TarjetaMascota
            key={publicacion.id}
            publicacion={publicacion}
            onClick={abrirModal} // Pasar la función abrirModal
          />
        ))}
      </div>

      {/* Modal para Detalles de Mascota */}
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
              src={modalData.imagen || "/placeholder-image.png"}
              alt={modalData.nombreMascota || "Mascota"}
              className="w-full h-64 object-cover mt-4 rounded-lg"
            />
            <p className="mt-4">{modalData.descripcion || "Sin descripción"}</p>
            <p className="mt-2">
              <strong>Ubicación:</strong>{" "}
              {modalData.ubicacion || "No especificada"}
            </p>

            {/* Sección de comentarios */}
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
