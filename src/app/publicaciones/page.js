"use client";

import { useState } from "react";
import { db, storage } from "@/firebase"; // Asegúrate de importar Firebase Storage
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const NuevaPublicacion = ({ userId }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    ubicacion: "",
    imagen: null, // Cambiado para manejar archivos
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imagen: file }); // Guardar el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("Debes iniciar sesión para crear una publicación.");
      return;
    }

    try {
      setUploading(true);

      let imageUrl = "";

      // Subir imagen a Firebase Storage
      if (formData.imagen) {
        const storageRef = ref(storage, `publicaciones/${Date.now()}_${formData.imagen.name}`);
        await uploadBytes(storageRef, formData.imagen);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Guardar datos de la publicación en Firestore
      await addDoc(collection(db, "publicaciones"), {
        userId,
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        ubicacion: formData.ubicacion,
        imagen: imageUrl, // Guardar la URL de la imagen
        likes: [],
        fechaCreacion: new Date(),
      });

      alert("Publicación creada con éxito");
      setFormData({
        titulo: "",
        descripcion: "",
        ubicacion: "",
        imagen: null,
      });
    } catch (error) {
      console.error("Error al crear la publicación:", error);
      alert("Error al crear la publicación. Inténtalo nuevamente.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
        className="w-full border border-gray-300 p-2 rounded-md"
      />
      <textarea
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
        className="w-full border border-gray-300 p-2 rounded-md"
      ></textarea>
      <input
        type="text"
        name="ubicacion"
        value={formData.ubicacion}
        onChange={handleChange}
        placeholder="Ubicación"
        required
        className="w-full border border-gray-300 p-2 rounded-md"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full border border-gray-300 p-2 rounded-md"
      />
      <button
        type="submit"
        disabled={uploading}
        className={`w-full p-2 rounded-md text-white ${uploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
      >
        {uploading ? "Subiendo..." : "Crear Publicación"}
      </button>
    </form>
  );
};

export default NuevaPublicacion;

