"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Filtros from "@/Componentes/Filtros";
import TarjetaMascota from "@/Componentes/TarjetaMascota";

export default function HomePage() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" });
  const [loading, setLoading] = useState(true);

  // Cargar publicaciones desde Firestore
  useEffect(() => {
    const q = query(collection(db, "publicaciones"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const publicacionesArray = [];
      querySnapshot.forEach((doc) => {
        publicacionesArray.push({ id: doc.id, ...doc.data() });
      });
      console.log("Publicaciones cargadas:", publicacionesArray); // Verifica datos cargados
      setPublicaciones(publicacionesArray);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Aplicar filtros
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

  // Mostrar estado de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-36 w-36 border-t-8 bg-custom-gradient"></div>
      </div>
    );
  }

  // Mostrar mensaje si no hay publicaciones
  if (mascotasFiltradas.length === 0) {
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

      <Filtros onFilter={(nuevosFiltros) => setFiltros(nuevosFiltros)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {mascotasFiltradas.map((mascota, index) => {
          // Validación adicional para evitar objetos vacíos o mal formados
          if (!mascota || !mascota.imagen) {
            console.error("Datos de la tarjeta inválidos:", mascota);
            return null;
          }

          console.log("Datos de la tarjeta:", mascota); // Confirmar datos válidos

          return (
            <TarjetaMascota
              key={mascota.id || index} // Usa el índice como fallback si `id` no está presente
              mascota={{
                ...mascota,
                imagen: mascota.imagen || "/placeholder.jpg",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
