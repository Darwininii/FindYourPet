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
    <div className="contenedor">
      <form onSubmit={handleRegister} className="form_area">
        <h1 className="title">Registate</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="form_group">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="form_style sub_title"
            required
          />
        </div>
        <div className="form_gorup">
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            className="form_style sub_title"
            required
          />
        </div>
        <div className="form_group">
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="form_style sub_title"
            required
          >
            <option value="">Selecciona tu sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="form_group">
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo"
            className="form_style sub_title"
            required
          />
        </div>
        <div className="form_group">
          <input
            type="password"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            placeholder="Contraseña"
            className="form_style sub_title"
            required
          />
        </div>
        <button type="submit" className="btn">
          Registrarse
        </button>
        <p>
          ¿Tienes una cuenta?{" "}
          <a className="link" href="/IniciarSesion">
            Inicia sesión, ¡Ya!
          </a>
        </p>
      </form>
    </div>
  );
};

export default Registrate;
