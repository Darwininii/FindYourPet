const TarjetaMascota = ({ publicacion }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={publicacion.imagen || "/placeholder.jpg"} // Imagen de la mascota
        alt={publicacion.nombreMascota}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{publicacion.nombreMascota}</h2>
        <p className="text-gray-600">{publicacion.descripcion}</p>
      </div>
    </div>
  );
};

export default TarjetaMascota;
