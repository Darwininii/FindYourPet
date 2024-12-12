import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const ComentariosList = ({ publicacionId }) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const q = query(collection(db, "comentarios"), where("publicacionId", "==", publicacionId));
        const querySnapshot = await getDocs(q);

        const comentariosData = querySnapshot.docs.map(doc => doc.data());
        setComentarios(comentariosData);
      } catch (error) {
        console.error("Error al obtener los comentarios:", error);
      }
    };

    fetchComentarios();
  }, [publicacionId]);

  return (
    <div className="mt-6">
      <h3 className="font-bold text-xl">Comentarios:</h3>
      {comentarios.length > 0 ? (
        comentarios.map((comentario, index) => (
          <div key={index} className="bg-gray-100 p-3 mt-2 rounded-md">
            <p className="font-semibold">Usuario {comentario.userId}:</p>
            <p>{comentario.comentario}</p>
            <p className="text-xs text-gray-500">{new Date(comentario.fechaCreacion.seconds * 1000).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 mt-2">No hay comentarios aún.</p>
      )}
    </div>
  );
};

export default ComentariosList;
