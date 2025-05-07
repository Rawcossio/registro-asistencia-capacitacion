 
export let asistentes=[
    {
     img:"/jaime.png",
     nombre:"JAIME ZAPATA",
     experto:"front-end"
    },
    {
     img:"/alex.png",
     nombre:"ALEXANDER VILLA",
     experto:"Scrum"
    },
    {
     img:"/juanjo.png",
     nombre:"JUAN JOSE GALLEGO",
     experto:"Back-end"
    }
 ]

export let capacitados=[

{
    nombre:"Ramon Valdez",
    documento:"123456",
    sesion:"vecinda",
    tema:"Back-end"
},
{
    nombre:"ikki fenix",
    documento:"78910",
    sesion:"Santuario",
    tema:"Scrum"
},
{
    nombre:"Son Gokuh",
    documento:"111213",
    sesion:"Guerrero Z",
    tema:"Front-end"
},
{
    nombre:"Saitama",
    documento:"141516",
    sesion:"Heroes",
    tema:"Front-end"
},
{
    nombre:"Bugs Bunny",
    documento:"171819",
    sesion:"Loony Toons",
    tema:"Scrum"
},
{
    nombre:"Samurai Jack",
    documento:"202122",
    sesion:"Cartoon Network",
    tema:"Back-end"
},
]

export const agregarCapacitado = (capacitado) => {
    capacitados.push(capacitado)
    console.log(capacitados);
    
  };




  