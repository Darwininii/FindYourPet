export default function TarjetaMascota({ mascota, onClick }) {
  return (
    <div
      className="relative w-72 h-96 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
      onClick={onClick}
    >
      <img
        src={mascota.imagen}
        alt={mascota.nombre}
        className="w-full h-3/4 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{mascota.nombre}</h3>
        <p className="text-gray-600 text-sm truncate">
          {mascota.descripcion}
        </p>
      </div>
    </div>
  );
}
