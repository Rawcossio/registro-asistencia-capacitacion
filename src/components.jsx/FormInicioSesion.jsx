import { useState } from "react"
import { useActionData, useNavigate } from "react-router-dom"
import { alertaGenerica, alertaRedireccion, generarToken } from "../helpers/funciones"

const FormInicioSesion=({cambiarVista})=>{
    const [nombre, setNombre]=useState("")
    const [documento, setDocumento]=useState("")
    const [contraseña, setContraseña]=useState("")

    let redireccion=useNavigate()   

    function IniciarSesion(nombre, documento, contraseña){
        if(nombre==="admin" && documento==="123456" && contraseña==="admin"){
            let tokenAcceso=generarToken()
            localStorage.setItem("token",tokenAcceso)
            alertaRedireccion(redireccion, "Bienvenido", "Sera redireccionado al home", "success", "/Asistentes")
        }else{
            alertaGenerica("Error", "usuario y/o contraseña incorrecta","error")
        }

    }

    return(
        <form action="" className="form-inicio">
            <h1>Inicio Sesión</h1>
            <input onChange={(e)=>setNombre(e.target.value)} type="text" placeholder=" Nombre"/>
            <input onChange={(e)=>setDocumento(e.target.value)} type="text" placeholder=" Documento"/>
            <input onChange={(e)=>setContraseña(e.target.value)} type="text" placeholder=" Contraseña"/>
            <button type="button" className="boton-inicio" onClick={()=>IniciarSesion(nombre, documento, contraseña)}>Enviar</button>
            <p>Aun no estas regiastrado <button type="button" className="registro" onClick={cambiarVista}>Registrarse</button></p>
        </form>
    )
}
export default FormInicioSesion