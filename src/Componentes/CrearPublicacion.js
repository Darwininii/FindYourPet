import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const CrearPublicacion = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    especie: "",
    ubicacion: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Referencia a la colección 'publicaciones' en Firestore
      const publicacionesRef = collection(db, "publicaciones");

      // Agregar la nueva publicación
      await addDoc(publicacionesRef, {
        ...formData,
        createdAt: new Date().toISOString(),
      });

      // Redirigir al usuario a la página de las publicaciones
      alert("Publicación creada exitosamente");
      router.push("/publicaciones"); // Cambia esta ruta según corresponda

    } catch (err) {
      console.error("Error al crear la publicación:", err);
      setError("Hubo un error al crear la publicación.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Publicación</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="titulo" className="block text-gray-700">
            Título
          </label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            value={formData.titulo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="descripcion" className="block text-gray-700">
            Descripción
          </label>
          <textarea
            name="descripcion"
            id="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imagen" className="block text-gray-700">
            Imagen (URL)
          </label>
          <input
            type="text"
            name="imagen"
            id="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="especie" className="block text-gray-700">
            Especie
          </label>
          <select
            name="especie"
            id="especie"
            value={formData.especie}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="ubicacion" className="block text-gray-700">
            Ubicación
          </label>
          <input
            type="text"
            name="ubicacion"
            id="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Crear Publicación
        </button>
      </form>
    </div>
  );
};

export default CrearPublicacion;
