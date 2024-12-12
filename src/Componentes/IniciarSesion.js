"use client";
import "./Registrate.css";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Error al iniciar sesión.");
    }
  };

  return (
    <div className="contenedor">
      <form className="form_area" onSubmit={handleLogin}>
        <p className="title">Inicia Sesion</p>
        <div className="form_group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            className="form_style sub_title"
          />
        </div>
        <div className="form_group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="form_style sub_title"
          />
        </div>
        <button className="btn" type="submit">
          Iniciar Sesión
        </button>
        <p>
          ¿No tienes una cuenta?{" "}
          <a className="link" href="/Registro">
            Registrate, ¡Ya!
          </a>
        </p>
        {error && <p>{error}</p>}
        <div></div>
      </form>
    </div>
  );
};

export default IniciarSesion;
