import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import ComentariosList from "@/Componentes/ComentariosList";
import Comentarios from "@/Componentes/Comentarios";

const DetallePublicacion = ({ publicacionId, userId }) => {
  const [publicacion, setPublicacion] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPublicacion = async () => {
      try {
        if (!publicacionId) {
          setError("ID de publicación no proporcionado.");
          return;
        }

        const docRef = doc(db, "publicaciones", publicacionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPublicacion(docSnap.data());
        } else {
          setError("No se encontró la publicación.");
        }
      } catch (err) {
        console.error("Error al obtener la publicación:", err);
        setError("Ocurrió un error al cargar la publicación.");
      }
    };

    fetchPublicacion();
  }, [publicacionId]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {publicacion ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{publicacion.titulo}</h2>
          <img
            src={publicacion.imagen || "/placeholder.jpg"}
            alt={publicacion.titulo || "Imagen de la publicación"}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">{publicacion.descripcion}</p>
          <Comentarios publicacionId={publicacionId} userId={userId} />
          <ComentariosList publicacionId={publicacionId} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetallePublicacion;