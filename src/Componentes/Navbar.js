"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
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
        </div>
        <ul className={styles.navLinks}>
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
            <Link href="#">|</Link>
          </li>
          <li>
            <Link href="/iniciar-sesion">Iniciar Sesión</Link>
          </li>
          <li>
            <Link href="/registrarse">Registrarse</Link>
          </li>
          <li>
            <Link href="/ayuda">Ayuda</Link>
          </li>
          <li>
            <Link href="#">|</Link>
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
