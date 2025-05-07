import { Link } from "react-router-dom"

const Menu=()=>{
    return(
        <div className="menu-estilos">
            <Link className="titulo" to="/">Capacitaciones.com</Link>
            <section className="menu-botones">
            <Link className="boton" to="/Registro">Registrarse</Link>
            <Link className="boton" to="/InicioSesion">Iniciar Sesión</Link>
            </section>
        </div>
    )
}
export default Menu