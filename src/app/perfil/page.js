"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; 
import { db, storage } from "@/firebase";
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

export default function Perfil() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    sexo: "",
    descripcion: "",
    fotoPerfil: "",
  });
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }

        // Obtener publicaciones del usuario
        const publicacionesQuery = query(
          collection(db, "publicaciones"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(publicacionesQuery);
        const userPublicaciones = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPublicaciones(userPublicaciones);

        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    try {
      let photoURL = formData.fotoPerfil;

      if (file) {
        const storageRef = ref(storage, `perfil/${user.uid}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }

      const docRef = doc(db, "usuarios", user.uid);
      await updateDoc(docRef, {
        ...formData,
        fotoPerfil: photoURL,
      });

      alert("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Perfil</h1>
      <form>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
        />
        <select name="sexo" value={formData.sexo} onChange={handleChange}>
          <option value="">Selecciona tu sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Escribe algo sobre ti"
        ></textarea>
        <input type="file" onChange={handleFileChange} />
        <button type="button" onClick={handleSave}>
          Guardar cambios
        </button>
      </form>

      <h2>Publicaciones</h2>
      <ul>
        {publicaciones.map((pub) => (
          <li key={pub.id}>
            <h3>{pub.titulo}</h3>
            <p>{pub.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


