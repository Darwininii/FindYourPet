"use client";

import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

const NuevaPublicacion = ({ userId }) => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    ubicacion: "",
    imagen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "publicaciones"), {
        userId,
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        ubicacion: formData.ubicacion,
        imagen: formData.imagen,
        likes: [],
        fechaCreacion: new Date(),
      });
      alert("Publicación creada con éxito");
    } catch (error) {
      console.error("Error al crear la publicación:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <textarea
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
      ></textarea>
      <input
        type="text"
        name="ubicacion"
        value={formData.ubicacion}
        onChange={handleChange}
        placeholder="Ubicación"
        required
      />
      <input
        type="text"
        name="imagen"
        value={formData.imagen}
        onChange={handleChange}
        placeholder="URL de la imagen"
        required
      />
      <button type="submit">Crear Publicación</button>
    </form>
  );
};

export default NuevaPublicacion;
