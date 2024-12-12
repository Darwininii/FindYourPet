"use client";
import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import "./CrearMascota.css";

const CrearMascota = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    especie: "",
    ubicacion: "",
    imagen: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  const { currentUser } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      setError("Debes iniciar sesión para registrar una mascota.");
      return;
    }

    try {
      const publicacionesRef = collection(db, "mascotas");
      await addDoc(publicacionesRef, {
        ...formData,
        userId: currentUser.uid,
        createdAt: new Date().toISOString(),
      });

      alert("Mascota registrada exitosamente");
      router.push("/");
    } catch (err) {
      console.error("Error al registrar la mascota:", err);
      setError("Hubo un error al registrar la mascota.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Registrar Nueva Mascota</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="nombre" className="label">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion" className="label">Descripción</label>
          <textarea
            name="descripcion"
            id="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="textarea"
            required
          />
        </div>

        <div>
          <label htmlFor="especie" className="label">Especie</label>
          <select
            name="especie"
            id="especie"
            value={formData.especie}
            onChange={handleChange}
            className="select"
            required
          >
            <option value="">Seleccionar</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="ubicacion" className="label">Ubicación</label>
          <input
            type="text"
            name="ubicacion"
            id="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="imagen" className="label">Imagen (URL)</label>
          <input
            type="text"
            name="imagen"
            id="imagen"
            value={formData.imagen}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <button type="submit" className="button">Registrar Mascota</button>
      </form>
    </div>
  );
};

export default CrearMascota;
