"use client";

import "./Registrate.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Registrate = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    sexo: "",
    correo: "",
    contraseña: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.correo,
        formData.contraseña
      );
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nombre: formData.nombre,
        apellido: formData.apellido,
        sexo: formData.sexo,
        correo: formData.correo,
        fotoPerfil: "",
        descripcion: "",
      });

      alert("Registro exitoso");
      router.push("/perfil");
    } catch (err) {
      setError("Error al registrar. Verifica tus datos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Registro
        </h1>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full p-2 mb-3 border rounded-md"
          required
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          className="w-full p-2 mb-3 border rounded-md"
          required
        />
        <select
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded-md"
          required
        >
          <option value="">Selecciona tu sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Correo"
          className="w-full p-2 mb-3 border rounded-md"
          required
        />
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          placeholder="Contraseña"
          className="w-full p-2 mb-3 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Registrarse
        </button>
      </form>
      <div>
            <button className="btn">Registrarse</button>
            <p>
              ¿Tienes una cuenta?{" "}
              <a className="link" href="/IniciarSesion">
                Inicia sesión, ¡Ya!
              </a>
            </p>
          </div>
    </div>
  );
};

export default Registrate;
