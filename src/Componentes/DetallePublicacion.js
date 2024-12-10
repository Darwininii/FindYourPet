import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import ComentariosList from "@/Componentes/ComentariosList";
import Comentarios from "@/Componentes/Comentarios"; // El componente que se encargará de agregar comentarios

const DetallePublicacion = ({ publicacionId, userId }) => {
  const [publicacion, setPublicacion] = useState(null);

  useEffect(() => {
    const fetchPublicacion = async () => {
      const docRef = doc(db, "publicaciones", publicacionId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPublicacion(docSnap.data());
      } else {
        console.log("No se encontró la publicación.");
      }
    };

    fetchPublicacion();
  }, [publicacionId]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {publicacion ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{publicacion.titulo}</h2>
          <img
            src={publicacion.imagen}
            alt={publicacion.titulo}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">{publicacion.descripcion}</p>
          
          {/* Aquí se integran los comentarios */}
          <Comentarios publicacionId={publicacionId} userId={userId} />
          
          {/* Mostrar los comentarios existentes */}
          <ComentariosList publicacionId={publicacionId} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetallePublicacion;
