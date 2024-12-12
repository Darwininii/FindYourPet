export default function NotFound() {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, no pudimos encontrar la página que buscabas.</p>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Regresar al inicio</a>
      </div>
    );
  }