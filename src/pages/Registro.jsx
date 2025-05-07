import { useState } from "react"
import FormInicioSesion from "../components.jsx/FormInicioSesion"
import FormRegistro from "../components.jsx/FormRegistro"
import Menu from "../components.jsx/Menu"
import "./Registro.css"


const Registro=()=>{
    const [mostrarRegistro, setMostrarRegistro] = useState(true);
    return(
        <section>
            <nav><Menu/></nav>
            <div className="formulario">
            {mostrarRegistro ? (
            <FormRegistro cambiarVista={() => setMostrarRegistro(false)}/>
        ) : (
            <FormInicioSesion cambiarVista={() => setMostrarRegistro(true)} />
        )}
            </div>
        </section>
    )
}
export default Registro