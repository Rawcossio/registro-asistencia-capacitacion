import { Link, useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../helpers/funciones"

const NavCerrarSesion=()=>{
    let redireccion=useNavigate()
    function CerrarSesion(){
        localStorage.removeItem("token")
        alertaRedireccion(redireccion,"Saliendo", "Estamos cerrando su sesión", "info", "/")
    }
    return(
        <div className="menu-estilos">
            <Link className="titulo" to="/">Capacitaciones.com</Link>
            <section className="menu-botones">
            <button onClick={CerrarSesion}>Cerrar Sesión</button>
            </section>
        </div>
    )
}
export default NavCerrarSesion