import mongoose from "mongoose";

const MascotaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
    enum: ["Perro", "Gato", "Ave", "Otro"],
  },
  ubicacion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String, // URL de la imagen
    required: true,
  },
  latitud: {
    type: Number, // Opcional: Ubicación en el mapa
  },
  longitud: {
    type: Number,
  },
}, { timestamps: true });

export default mongoose.models.Mascota || mongoose.model("Mascota", MascotaSchema);
