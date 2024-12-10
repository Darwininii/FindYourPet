import "@/app/styles/globals.css"; // Importar estilos globales
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        {/* Proveedor de autenticación */}
        <AuthProvider>
          {/* Barra de navegación superior */}
          <div className="flex justify-end p-4 space-x-4">
            <a href="/Login" className="text-blue-600 hover:underline">Iniciar Sesión</a>
            <a href="/registrarse" className="text-blue-600 hover:underline">Registrarse</a>

          </div>
          {/* Contenido principal */}
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}


