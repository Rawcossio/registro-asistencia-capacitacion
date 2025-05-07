import linkedin from "/linkedin.png"
import github from "/github.png"
import discordia from "/discordia.png"
const CardAsistentes=({info})=>{
    return(
        <div className="Card-asistente">
            <img src={info.img} alt="" />
            <h1>{info.nombre}</h1>
            <p>{info.experto}</p>
            <section>
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={discordia} alt="" />
            </section>
        </div>
    )
}
export default CardAsistentes