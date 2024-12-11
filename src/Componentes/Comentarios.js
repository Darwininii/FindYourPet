import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

const Comentarios = ({ publicacionId, userId }) => {
  const [comentario, setComentario] = useState("");

  const handleComment = async () => {
    try {
      await addDoc(collection(db, "comentarios"), {
        publicacionId,
        userId,
        comentario,
        fechaCreacion: new Date(),
      });
      setComentario("");
      alert("Comentario añadido");
    } catch (error) {
      console.error("Error al añadir comentario:", error);
    }
  };

  return (
    <div>
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Escribe un comentario..."
        className="w-full p-2 mb-3 border rounded-md"
      />
      <button
        onClick={handleComment}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Comentar
      </button>
    </div>
  );
};

export default Comentarios;
