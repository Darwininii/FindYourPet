const TarjetaMascota = ({ publicacion, onClick }) => {
  const imagenURL = publicacion?.imagen || "/placeholder.jpg"; // URL predeterminada si no hay imagen
  return (
    <div
      className="shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={() => onClick(publicacion)} // Llama a la función onClick pasando los datos de la publicación
    >
      <img
        src={imagenURL}
        alt={publicacion?.nombreMascota || "Imagen de la mascota"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">
          {publicacion?.nombreMascota || "Nombre desconocido"}
        </h3>
        <p className="text-sm text-gray-600">
          {publicacion?.descripcion || "Sin descripción"}
        </p>
      </div>
    </div>
  );
};

export default TarjetaMascota;

