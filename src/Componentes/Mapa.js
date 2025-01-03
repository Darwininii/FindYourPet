"use client";

import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import FormImg from "./FormImg";
import Boton from "./Boton";

const Mapa = () => {
  const mapRef = useRef(null); // Referencia para el mapa
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");

  // Inicializa el mapa al cargar el componente
  useEffect(() => {
    const loadMap = () => {
      const google = window.google;

      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: 4.711, lng: -74.0721 }, // Centro inicial (Colombia)
        zoom: 5,
      });

      mapInstance.addListener("click", (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        // Coloca un marcador en la ubicación seleccionada
        if (marker) {
          marker.setPosition(e.latLng);
        } else {
          const newMarker = new google.maps.Marker({
            position: e.latLng,
            map: mapInstance,
          });
          setMarker(newMarker);
        }

        // Invierte geocoding para obtener dirección (opcional)
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDX6eB6_U4jqAsghSbfNjUMURAthT2Mlj8`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.results[0]) {
              setDireccion(data.results[0].formatted_address);
            }
          });
      });

      setMap(mapInstance);
    };

    // Verifica si el script de Google Maps ya está cargado
    if (!window.google) {
      const scriptExists = document.querySelector(
        'script[src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDX6eB6_U4jqAsghSbfNjUMURAthT2Mlj8&libraries=places"]'
      );

      // Solo carga el script si no está presente
      if (!scriptExists) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDX6eB6_U4jqAsghSbfNjUMURAthT2Mlj8&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = loadMap;
        document.head.appendChild(script);
      } else {
        // Si ya está cargado, simplemente inicializa el mapa
        loadMap();
      }
    } else {
      loadMap();
    }
  }, []);

  const handleBuscar = () => {
    const query = `${direccion}, ${ciudad}, ${barrio}`;
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: query }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);
        map.setZoom(15);

        if (marker) {
          marker.setPosition(location);
        } else {
          const newMarker = new google.maps.Marker({
            position: location,
            map: map,
          });
          setMarker(newMarker);
        }
      }
    });
  };

  return (
    <div className="styled-wrapper flex flex-col md:flex-row">
      {/* Formulario de búsqueda */}
      <div className="flex flex-col">
        <Input
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <Input
          placeholder="Ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <Input
          placeholder="Barrio"
          value={barrio}
          onChange={(e) => setBarrio(e.target.value)}
        />
        {/* Contenedor específico para el botón */}
        <div className="flex justify-center">
          <Boton text="Buscar" onClick={handleBuscar} />
        </div>
      </div>
      <FormImg />
      {/* Mapa */}
      <div
        ref={mapRef}
        className="flex-grow rounded border"
        style={{
          height: "400px",
          width: "700px",
          border: "1px solid black",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
};

export default Mapa;
