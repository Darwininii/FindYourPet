"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  if (loading) {
    return null; // While loading, don't show anything
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/Logo.png"
              width={80}
              height={80}
              alt="Find Your Pet Logo"
            />
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <Image src="/menu.svg" width={30} height={30} alt="Menú" />
        </button>

        <ul
          className={`${styles.navLinks} ${
            isMenuOpen ? styles.navLinksOpen : styles.navLinksHidden
          }`}
        >
          {/* Common Navigation Links */}
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/buscar">Buscar</Link>
          </li>
          <li>
            <Link href="/Mapa">Mapa</Link>
          </li>
          <li>
            <Link href="/ayuda">Ayuda</Link>
          </li>
          <li>
            <Link href="/Donacion">Donación</Link>
          </li>

          {/* Authentication-based Links */}
          {user ? (
            <>
              <li>
                <Link href="/perfil">Perfil</Link>
              </li>
              <li>
                <Link href="/publicacion">Registrar Mascotas</Link>
              </li>
              <li>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/IniciarSesion">Iniciar Sesión</Link>
              </li>
              <li>
                <Link href="/Registro">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}