import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = ({ onSectionChange }) => {
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
          <li onClick={() => onSectionChange("inicio")}>
            <Link href="#">Inicio</Link>
          </li>
          <li onClick={() => onSectionChange("buscar")}>
            <Link href="#">Buscar</Link>
          </li>
          <li onClick={() => onSectionChange("mapa")}>
            <Link href="#">Mapa</Link>
          </li>
          <li>
            <Link href="#">|</Link>
          </li>
          <li onClick={() => onSectionChange("iniciarSesion")}>
            <Link href="#">Iniciar Sesión</Link>
          </li>
          <li onClick={() => onSectionChange("registrarse")}>
            <Link href="#">Registrarse</Link>
          </li>
          <li onClick={() => onSectionChange("ayuda")}>
            <Link href="#">Ayuda</Link>
          </li>
          <li>
            <Link href="#">|</Link>
          </li>
          <li onClick={() => onSectionChange("donacion")}>
            <Link href="#">Donación</Link>
          </li>
        </ul>
        <nav className="bg-blue-600 text-white p-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="text-xl font-bold">Mascotas Perdidas</h1>
    <div>
      <a href="/publicacion" className="px-4 py-2 bg-white text-blue-600 rounded-lg">Publicar</a>
    </div>
  </div>
</nav>
      </div>
    </nav>
  );
};

export default Navbar;


