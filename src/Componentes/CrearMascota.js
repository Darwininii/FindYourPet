"use client";

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const CrearMascota = () => {
  const [user, setUser] = useState(null); // Estado para el usuario autenticado
  const [formData, setFormData] = useState({
    nombreMascota: "",
    descripcion: "",
    imagen: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Debes iniciar sesión para registrar una mascota.");
      return;
    }

    try {
      // Agregar la nueva mascota a Firestore
      await addDoc(collection(db, "publicaciones"), {
        ...formData,
        userId: user.uid, // Asociar la mascota al usuario autenticado
        fechaRegistro: new Date(),
      });

      setSuccess("Mascota registrada exitosamente.");
      setFormData({ nombreMascota: "", descripcion: "", imagen: "" });

      // Redirige a la página principal
      router.push("/");
    } catch (err) {
      console.error("Error al registrar la mascota:", err);
      setError("Hubo un error al registrar la mascota. Inténtalo nuevamente.");
    }
  };

  if (!user) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500">
          Debes iniciar sesión para registrar una mascota.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Registrar Mascota</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="nombreMascota">
            Nombre de la Mascota:
          </label>
          <input
            type="text"
            id="nombreMascota"
            name="nombreMascota"
            value={formData.nombreMascota}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="descripcion">
            Descripción:
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="imagen">
            Imagen (URL):
          </label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Registrar Mascota
        </button>
      </form>
    </div>
  );
};

export default CrearMascota;
