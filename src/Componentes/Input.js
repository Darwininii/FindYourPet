import styles from "./Input.module.css";

const Input = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <div className={styles.textInputWrapper}>
      <input
        placeholder={placeholder} // Usa el prop `placeholder`
        type="text"
        value={value} // Usa el prop `value`
        onChange={onChange} // Usa el prop `onChange`
        className={styles.textInput}
      />
    </div>
  );
};

export default Input;
