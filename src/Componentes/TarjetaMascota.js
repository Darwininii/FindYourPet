const TarjetaMascota = ({ publicacion }) => {
  const handleImageError = (e) => {
    e.target.src = "/placeholder.jpg"; // Usar una imagen por defecto si hay un error
  };

  const imagenSrc = publicacion?.imagen?.startsWith("http")
    ? publicacion.imagen
    : "/placeholder.jpg"; // Validar la URL de la imagen

  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <img
        src={imagenSrc}
        alt={publicacion?.nombreMascota || "Imagen de la mascota"}
        className="w-full h-48 object-cover"
        onError={handleImageError} // Manejar errores de carga
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{publicacion?.nombreMascota || "Sin nombre"}</h2>
        <p className="text-gray-700">{publicacion?.descripcion || "Sin descripción"}</p>
        <p className="text-gray-500 text-sm">
          <strong>Ubicación:</strong> {publicacion?.ubicacion || "Desconocida"}
        </p>
      </div>
    </div>
  );
};

export default TarjetaMascota;

