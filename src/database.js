import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Lee la URI desde .env

if (!MONGO_URI) {
  throw new Error("Por favor define la variable MONGO_URI en un archivo .env");
}

// Variable global para reutilizar la conexión en desarrollo
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      console.log("Conexión a la base de datos exitosa");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;


