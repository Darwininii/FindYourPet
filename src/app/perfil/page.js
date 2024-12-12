"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; 
import { db, storage } from "@/firebase";
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Perfil.css"; // Importa los estilos

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
      if (!user) {
        alert("Debes iniciar sesión para actualizar tu perfil.");
        return;
      }
  
      let photoURL = formData.fotoPerfil;
  
      // Si se seleccionó un archivo para subir
      if (file) {
        const storageRef = ref(storage, `perfil/${user.uid}/${file.name}`);
        const uploadTask = await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(uploadTask.ref); // Obtén la URL de descarga
      }
  
      // Actualiza el documento del usuario en Firestore
      const docRef = doc(db, "usuarios", user.uid);
      await updateDoc(docRef, {
        ...formData,
        fotoPerfil: photoURL, // Actualiza la URL de la foto en Firestore
      });
  
      alert("Perfil actualizado con éxito");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      alert("Hubo un error al actualizar tu perfil. Intenta nuevamente.");
    }
  };
  

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        {formData.fotoPerfil ? (
          <img
            src={formData.fotoPerfil}
            alt="Foto de perfil"
            className="perfil-foto"
          />
        ) : (
          <div className="perfil-placeholder">Sin Foto</div>
        )}
        <h1 className="perfil-nombre">
          {formData.nombre} {formData.apellido}
        </h1>
      </div>

      <form className="perfil-form">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="perfil-input"
        />
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          className="perfil-input"
        />
        <select
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          className="perfil-select"
        >
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
          className="perfil-textarea"
        ></textarea>
        <input type="file" onChange={handleFileChange} className="perfil-file" />
        <button type="button" onClick={handleSave} className="perfil-button">
          Guardar cambios
        </button>
      </form>

      <h2 className="perfil-subtitulo">Mis Publicaciones</h2>
      <div className="perfil-publicaciones">
        {publicaciones.map((pub) => (
          <div key={pub.id} className="perfil-publicacion">
            <h3 className="perfil-publicacion-titulo">{pub.titulo}</h3>
            <p className="perfil-publicacion-descripcion">{pub.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
