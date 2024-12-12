import { db } from "@/firebase"; // Importa tu configuración de Firebase
import { collection, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Colección en Firestore
const mascotasCollection = collection(db, "mascotas");

// Función para crear una nueva mascota
export const crearMascota = async (mascotaData) => {
  try {
    const nuevaMascotaRef = doc(mascotasCollection); // Crea un ID único automáticamente
    await setDoc(nuevaMascotaRef, {
      nombre: mascotaData.nombre,
      descripcion: mascotaData.descripcion,
      especie: mascotaData.especie,
      ubicacion: mascotaData.ubicacion,
      imagen: mascotaData.imagen,
      latitud: mascotaData.latitud || null, // Opcional
      longitud: mascotaData.longitud || null, // Opcional
      createdAt: new Date().toISOString(), // Marca de tiempo
    });
    return nuevaMascotaRef.id; // Devuelve el ID generado
  } catch (error) {
    console.error("Error al crear la mascota:", error);
    throw new Error("No se pudo crear la mascota.");
  }
};

// Función para obtener una mascota por ID
export const obtenerMascotaPorId = async (id) => {
  try {
    const mascotaRef = doc(db, "mascotas", id);
    const mascotaSnap = await getDoc(mascotaRef);

    if (mascotaSnap.exists()) {
      return { id: mascotaSnap.id, ...mascotaSnap.data() };
    } else {
      throw new Error("Mascota no encontrada.");
    }
  } catch (error) {
    console.error("Error al obtener la mascota:", error);
    throw error;
  }
};

// Función para actualizar una mascota
export const actualizarMascota = async (id, datosActualizados) => {
  try {
    const mascotaRef = doc(db, "mascotas", id);
    await updateDoc(mascotaRef, {
      ...datosActualizados,
      updatedAt: new Date().toISOString(), // Actualiza la marca de tiempo
    });
    return true;
  } catch (error) {
    console.error("Error al actualizar la mascota:", error);
    throw error;
  }
};

// Función para eliminar una mascota
export const eliminarMascota = async (id) => {
  try {
    const mascotaRef = doc(db, "mascotas", id);
    await deleteDoc(mascotaRef);
    return true;
  } catch (error) {
    console.error("Error al eliminar la mascota:", error);
    throw error;
  }
};
