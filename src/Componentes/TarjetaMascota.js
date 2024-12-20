const TarjetaMascota = ({ mascota }) => {
  if (!mascota) {
    console.error("TarjetaMascota recibió datos inválidos:", mascota);
    return null;
  }

  return (
    <div className="shadow-md rounded-lg overflow-hidden">
      <img
        src={mascota.imagen || "/placeholder.jpg"}
        alt={mascota.nombreMascota || "Imagen de la mascota"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{mascota.nombreMascota || "Sin nombre"}</h2>
        <p className="text-gray-700">{mascota.descripcion || "Sin descripción"}</p>
        <p className="text-gray-500 text-sm">{mascota.ubicacion || "Ubicación desconocida"}</p>
      </div>
    </div>
  );
};

export default TarjetaMascota;
