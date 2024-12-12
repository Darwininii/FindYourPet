"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase"; // Ajusta la ruta según tu estructura
import Filtros from "@/Componentes/Filtros";
import TarjetaMascota from "@/Componentes/TarjetaMascota";
import ComentariosList from "@/Componentes/ComentariosList";
import Comentarios from "@/Componentes/Comentarios";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [mascotas, setMascotas] = useState([]);
  const [filtros, setFiltros] = useState({ especie: "", ubicacion: "" });
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        // Consulta a la colección de mascotas en Firestore
        const q = query(collection(db, "mascotas"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No hay mascotas registradas");
          setMascotas([]);
        } else {
          const fetchedMascotas = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMascotas(fetchedMascotas);
        }
      } catch (error) {
        console.error("Error al obtener las mascotas:", error);
        setMascotas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMascotas();
  }, []);

  const handleFilter = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      !filtros.especie ||
      mascota.especie?.toLowerCase() === filtros.especie.toLowerCase();
    const coincideUbicacion =
      !filtros.ubicacion ||
      mascota.ubicacion
        ?.toLowerCase()
        .includes(filtros.ubicacion.toLowerCase());
    return coincideEspecie && coincideUbicacion;
  });

  const abrirModal = (mascota) => {
    setModalData(mascota);
  };

  const cerrarModal = () => {
    setModalData(null);
  };

  // Estado de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-40 w-40 border-t-8 bg-custom-gradient"></div>
      </div>
    );
  }

  // Navigation sections
  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <div className="min-h-screen p-6">
            <h1 className="text-4xl font-bold text-center mb-6">
              Mascotas Perdidas
            </h1>
            <Filtros onFilter={handleFilter} />

            {mascotas.length === 0 ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold mb-4">
                  No hay mascotas registradas
                </h2>
                <p>
                  Aún no se han agregado mascotas perdidas. ¡Sé el primero en
                  reportar!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {mascotasFiltradas.map((mascota) => (
                  <TarjetaMascota
                    key={mascota.id}
                    mascota={mascota}
                    onClick={() => abrirModal(mascota)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      case "mapa":
        return <div>Sección de Mapa</div>;
      case "reportar":
        return <div>Sección de Reportar Mascota</div>;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex justify-center space-x-4 p-4 shadow-sm">
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "inicio" ? "boton_sup text-black" : "sec_boton"
          }`}
          onClick={() => setActiveSection("inicio")}
        >
          Inicio
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "mapa" ? "boton_sup text-white" : "sec_boton"
          }`}
          onClick={() => setActiveSection("mapa")}
        >
          Mapa
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "reportar" ? "boton_sup text-white" : "sec_boton"
          }`}
          onClick={() => setActiveSection("reportar")}
        >
          Reportar
        </button>
      </div>

      {/* Main Content */}
      {renderSection()}

      {/* Modal for Pet Details */}
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
            <p className="mt-2">
              <strong>Ubicación:</strong> {modalData.ubicacion}
            </p>

            {/* Comments Section */}
            <ComentariosList publicacionId={modalData.id} />
            <Comentarios
              publicacionId={modalData.id}
              userId={modalData.userId}
            />

            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/publicacion/${modalData.id}`
                  );
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
