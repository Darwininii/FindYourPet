import dbConnect from "@/database"; // Asegúrate de que la conexión esté configurada
import Mascota from "@/models/Mascota";

export default async function handler(req, res) {
  await dbConnect(); // Conectar a la base de datos

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const mascotas = await Mascota.find(); // Obtener todas las mascotas
        res.status(200).json(mascotas);
      } catch (error) {
        res.status(500).json({ error: "Error al obtener las mascotas." });
      }
      break;

    case "POST":
      try {
        const nuevaMascota = new Mascota(req.body); // Crear una nueva mascota
        await nuevaMascota.save();
        res.status(201).json({ mensaje: "Mascota creada exitosamente." });
      } catch (error) {
        res.status(500).json({ error: "Error al guardar la mascota." });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Método ${method} no permitido.`);
  }
}
