import "./Registrate.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form_area">
        <p className="title">REGISTRARSE</p>
        <form>
          <div className="form_group">
            <label className="sub_title" htmlFor="name">
              Nombre
            </label>
            <input
              placeholder="Ingresa tu nombre"
              className="form_style"
              type="text"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Correo
            </label>
            <input
              placeholder="Ingresa tu email"
              id="email"
              className="form_style"
              type="email"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Contraseña
            </label>
            <input
              placeholder="Ingresa tu contraseña"
              id="password"
              className="form_style"
              type="password"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="number">
              N° de telefono
            </label>
            <input
              placeholder="Ingresa tu numero telefonico"
              id="telefono"
              className="form_style"
              type="number"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              N° de mascotas
            </label>
            <input
              placeholder="Cuantas mascotas tienes?"
              id="mascotas"
              className="form_style"
              type="number"
            />
          </div>
          <div>
            <button className="btn">Registrarse</button>
            <p>
              ¿Tienes una cuenta?{" "}
              <a className="link" href="/IniciarSesion">
                Inicia sesión, ¡Ya!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
