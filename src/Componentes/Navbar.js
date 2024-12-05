"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Image
            src="/Logo.png"
            width={80}
            height={80}
            alt="Imagen de mascotas SVG"
          />
          {/* <h1>Find Your Pet</h1> */}
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
            <Link href="/IniciarSesion">Iniciar Sesión</Link>
          </li>
          <li>
            <Link href="/Registro">Registrarse</Link>
          </li>
          <li>
            <Link href="/ayuda">Ayuda</Link>
          </li>
          <li>
            <Link href="/Donacion">Donación</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
