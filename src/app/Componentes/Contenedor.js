import styles from "./Contenedor.module.css";

const Contenedor = ({ children }) => {
  return <div className={styles.contenedor}>{children}</div>;
};

export default Contenedor;
