import Asistentes from "../pages/Asistentes";
import InicioSesion from "../pages/InicioSesion";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import Registro from "../pages/Registro";
import RutaProtegida from "../components.jsx/RutaProtegida";

export let enrutador=[
{
path:"/",
element:<PaginaPrincipal/>
},
{
path:"/Registro",
element:<Registro/>
},
{
path:"/InicioSesion",
element:<InicioSesion/>
},
{
path:"/Asistentes",
element:<RutaProtegida proteger={<Asistentes/>}/>
},
]