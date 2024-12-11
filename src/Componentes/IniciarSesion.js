import "./Registrate.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form_area">
        <p className="title">INICIAR SESION</p>
        <form>
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
          <div>
            <button className="btn">Iniciar Sesion</button>
            <p>
              ¿No tienes una cuenta?{" "}
              <a className="link" href="/Registro">
                Registrate, ¡Ya!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
