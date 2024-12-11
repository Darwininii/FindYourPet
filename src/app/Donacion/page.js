"use client";

import { useState } from "react";
import styles from "./Donaciones.module.css";

const Donacion = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const handleSelectAmount = (value) => {
    setAmount(value);
    setCustomAmount(""); // Resetea el campo de monto personalizado
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(""); // Resetea el monto predefinido si se ingresa uno personalizado
  };

  const handleDonation = () => {
    const finalAmount = customAmount || amount;
    alert(`¡Gracias por tu donación de $${finalAmount}!`);
    // Aquí agregar lógica adicional, como enviar el monto al backend
  };

  return (
    <div className={styles.donationContainer}>
      <h2>Apóyanos con tu Donación</h2>
      <p>
        Tu ayuda nos permite continuar nuestro trabajo y brindar mejores
        servicios.
      </p>

      <div className={styles.amountOptions}>
        <button onClick={() => handleSelectAmount("5")}>$5</button>
        <button onClick={() => handleSelectAmount("10")}>$10</button>
        <button onClick={() => handleSelectAmount("20")}>$20</button>
        <button onClick={() => handleSelectAmount("50")}>$50</button>
      </div>

      <p>O ingresa una cantidad personalizada:</p>
      <input
        type="number"
        placeholder="Monto personalizado"
        value={customAmount}
        onChange={handleCustomAmountChange}
        className={styles.customInput}
      />
      <button onClick={handleDonation} className={styles.donateButton}>
        Donar
      </button>
    </div>
  );
};

export default Donacion;
