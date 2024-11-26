"use client";

import { useState } from "react";

export default function PublicacionPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    especie: "",
    ubicacion: "",
    imagen: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/mascotas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMensaje("Publicación creada exitosamente.");
        setFormData({ nombre: "", descripcion: "", especie: "", ubicacion: "", imagen: "" });
      } else {
        setMensaje("Error al crear la publicación.");
      }
    } catch (error) {
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Crear Publicación</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Especie</label>
          <select
            name="especie"
            value={formData.especie}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          >
            <option value="">Seleccione una especie</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Ubicación</label>
          <input
            type="text"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Imagen (URL)</label>
          <input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Publicar
        </button>

        {mensaje && <p className="mt-4 text-center text-sm">{mensaje}</p>}
      </form>
    </div>
  );
}
