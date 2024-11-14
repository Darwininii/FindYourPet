import React from "react";
import styles from "./Boton.module.css"; // Asegúrate de que la ruta sea correcta

const Boton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.type1}`}
    ></button>
  );
};

export default Boton;
