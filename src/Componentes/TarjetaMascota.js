const TarjetaMascota = ({ publicacion }) => {
  console.log("Datos de la tarjeta:", publicacion); // Verifica qué datos recibe

  // Si la imagen falla, muestra un placeholder
  const handleImageError = (e) => {
    e.target.src = "/placeholder-image.jpg"; // Imagen predeterminada
  };

  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <img
        src={publicacion?.imagen || "/placeholder-image.jpg"} // Verifica que exista una imagen válida
        alt={publicacion?.nombreMascota || "Imagen de la mascota"}
        className="w-full h-48 object-cover"
        onError={handleImageError} // Manejar errores de imagen
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


