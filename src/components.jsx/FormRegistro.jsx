import { useState, useEffect } from "react"
import { Link, useNavigate, } from "react-router-dom"
import { alertaGenerica, alertaRedireccion } from "../helpers/funciones"
import { agregarCapacitado, capacitados } from "../services/dataBase"
import { use } from "react"

const FormRegistro=({cambiarVista})=>{
    const [nombre, setNombre]=useState("")
    const [documento, setDocumento]=useState("")
    const [sesion, setSesion]=useState("")
    const [tema, setTema]=useState("")
    const [fecha, setFecha]=useState("")

    let redireccion=useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
  
       if (!nombre || !documento || !sesion || !tema || !fecha) {
         alertaGenerica("Advertencia",'Por favor completa todos los campos',"info");
         return;
       }
        const nuevoAsistente = {
         nombre: nombre,
         documento: documento,
         sesion: sesion,
         tema: tema,
         fecha:fecha
       };
  
       agregarCapacitado(nuevoAsistente);
       
  
       let asistentesGuardados = JSON.parse(localStorage.getItem("asistentes")) || [];
       asistentesGuardados.push(nuevoAsistente);
       localStorage.setItem("asistentes", JSON.stringify(asistentesGuardados));
     
       alertaRedireccion(redireccion, "Bienvenido", "Registro exitoso", "success", "/Asistentes")
     }
  

   

    return(
        <form  action="" className="form-registro">
            <h1>Registro Capacitación</h1>
            <input type="text" placeholder=" Nombre" onChange={e=>setNombre(e.target.value)}/>
            <input type="text" placeholder=" Documento"onChange={e=>setDocumento(e.target.value)}/>
            <input type="text" placeholder=" Sesión" onChange={e=>setSesion(e.target.value)}/>
            <input type="text" placeholder=" Tema"onChange={e=>setTema(e.target.value)}/>
            <input type="date" placeholder="fecha" onChange={e=>setFecha(e.target.value)}/>
            <button type="button" className="boton-registro" onClick={handleSubmit}>Enviar</button>
            <p>Ya estas regiastrado <button type="button" className="iniciar-sesion" onClick={cambiarVista}>Inicia Sesión</button></p>
        </form>
    )
}
export default FormRegistro