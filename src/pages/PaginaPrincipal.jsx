import CardAsistentes from "../components.jsx/CardAsistentes"
import Menu from "../components.jsx/Menu"
import { asistentes } from "../services/dataBase"
import './index.css'

const PaginaPrincipal=()=>{
return(
    <>
    <section>
        <nav>
            <Menu/>
        </nav>
        <main className="Asistentes">
            <h1>Introducción al mundo del desarrollo de software</h1>
            <h2>Expositores</h2>
            <section>
                {
                    asistentes.map((asistente)=>{
                        return <CardAsistentes info={asistente}/>
                    })
                }
            </section>
        </main>
    </section>
    </>
)
}
export default PaginaPrincipal