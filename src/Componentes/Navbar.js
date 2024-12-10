"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  if (loading) {
    return null; // Mientras carga, no mostrar nada
  }

  return (
    <nav className="navbar">
      <Link href="/" className="title">
        Find Your Pet
      </Link>
      <div className="nav_buttons">
        {user ? (
          <>
            <Link href="/perfil" className="btn">Perfil</Link>
            <Link href="/publicacion" className="btn">Registrar Mascotas</Link>
            <button onClick={handleLogout} className="btn">Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn">Iniciar Sesión</Link>
            <Link href="/registro" className="btn">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}



