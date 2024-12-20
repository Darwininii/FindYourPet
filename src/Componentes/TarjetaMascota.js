const TarjetaMascota = ({ publicacion }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <img
        src={publicacion?.imagen || "/placeholder.jpg"} // Verifica si 'imagen' existe
        alt={publicacion?.nombreMascota || "Imagen de la mascota"} // Proporciona un valor predeterminado
        className="w-full h-48 object-cover"
      />
    </div>
  );
};

export default TarjetaMascota;
