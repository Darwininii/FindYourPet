    export default function TarjetaMascota({ mascota }) {
    return (
      <div className="group relative w-60 h-36 bg-gray-200 rounded-lg shadow-md overflow-hidden perspective-1000">
        {/* Icono */}
        <div className="flex items-center justify-center h-full transition-transform duration-500 group-hover:scale-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-gray-700"
          >
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
        </div>
  
        {/* Contenido */}
        <div className="absolute inset-0 p-2 bg-gray-100 transition-transform transform rotate-x-90 origin-bottom group-hover:rotate-x-0">
          <h3 className="text-lg font-bold text-gray-800">{mascota.nombre}</h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-3">{mascota.descripcion}</p>
        </div>
      </div>
    );
  }
  