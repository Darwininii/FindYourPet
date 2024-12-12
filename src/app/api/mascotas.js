import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, descripcion, especie, ubicacion, imagen, userId } = req.body;

    try {
      await addDoc(collection(db, "mascotas"), {
        nombre,
        descripcion,
        especie,
        ubicacion,
        imagen,
        userId, // Almacena el ID del usuario autenticado
      });
      res.status(201).json({ mensaje: "Mascota registrada exitosamente." });
    } catch (error) {
      res.status(500).json({ error: "Error al registrar la mascota." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Método no permitido");
  }
}
