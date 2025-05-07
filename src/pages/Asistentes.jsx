import { useEffect, useState } from "react"
import AsistentesCapac from "../components.jsx/AsisitentesCapac"
import NavCerrarSesion from "../components.jsx/NavCerrarSesion"
import { capacitados } from "../services/dataBase"
import "./Asistentes.css"



const Asistentes=()=>{

    const [arreglo,setArreglo]=useState([""])

useEffect(()=>{
    let nuevoAsistente=JSON.parse(localStorage.getItem("asistentes"));
    let arregloExiste= nuevoAsistente ? nuevoAsistente: [];
    setArreglo(arregloExiste)
},[])

    return(
        <section>
            <nav><NavCerrarSesion/></nav>
            <div className="lista-asistentes">
                <h1>Asistentes Capacitación</h1>
                { arreglo.map((array)=>{
                    return <AsistentesCapac dato={array}/>
                })
                
                }
            </div>
        </section>
    )
}
export default Asistentes 