import Swal from "sweetalert2";


export function generarToken(){
return "token_"+Math.random().toString(36).substring(2,10)
}

export function alertaRedireccion(fn, titulo,mensaje,icono,ruta){
    let timerInterval;
Swal.fire({
  title: titulo,
  html: mensaje,
  timer: 2000,
  icon:icono,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    fn(ruta)
  }
})
}

export function alertaGenerica(titulo,mensaje,icono){
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono
      });

}