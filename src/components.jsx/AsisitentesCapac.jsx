const AsistentesCapac=({dato})=>{
    return(
        <section>
            <ul  className="datos-asistentes">
            <li>Nombre:{dato.nombre}</li>
            <li>Documento:{dato.documento}</li>
            <li>Sesión:{dato.sesion}</li>
            <li>tema:{dato.tema}</li>
            <li>fecha:{dato.fecha}</li>
            </ul>
        </section>
    )
}
export default AsistentesCapac