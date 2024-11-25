"use client";

import Mapa from "@/Componentes/Mapa";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Mapa</h1>
      <p className="text-lg mb-6 text-white text-center bg-slate-700 p-4 rounded-lg shadow-md">
        Aquí puedes buscar en el mapa, ya sea ingresando una dirección
        específica o explorando directamente. Además, puedes añadir una imagen
        para mostrar la localidad exacta, lo que nos ayudará a identificar la
        ubicación con más precisión. Si estás buscando a una mascota perdida,
        ¡también puedes incluir la foto de tu mascota para mayor visibilidad!
      </p>
      <Mapa />
    </div>
  );
}
