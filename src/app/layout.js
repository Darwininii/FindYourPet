export const metadata = {
  title: "Find Your Pet",
  description: "Aplicación para encontrar mascotas perdidas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}


