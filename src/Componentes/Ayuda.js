// app/help/page.js
import styles from "./ayuda.module.css"; // Importar el CSS módulo específico de la página

export default function Ayuda() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a la seccion de ayuda</h1>
      <p className={styles.description}>
        Aquí encontrarás instrucciones sobre cómo utilizar Find your pet.
      </p>

      <section className={styles.section}>
        <button>¿Cómo usar la aplicación?</button>
        <p>Para comenzar a usar la aplicación, sigue estos pasos...</p>
      </section>

      <section className={styles.section}>
        <h2>Preguntas Frecuentes (FAQ)</h2>
        <button>¿como creo una cuenta?</button>
        <ul>
          <li>
            <button>¿Cómo registrarse?</button> Visita la página de registro...
          </li>
          <li>
            <button>¿Cómo cambiar la contraseña?</button>
            Dirígete a tu perfil...
          </li>
          <button>¿Como hacer una publicacion?</button>
        </ul>
      </section>
    </div>
  );
}
