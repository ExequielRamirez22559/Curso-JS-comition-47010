


//funtion nombreFuncion(){codigo a ejecutar por la funcion}

/*function saludar() {
    console.log('hola');
}

saludar();
*/

saludar = ()=> {
    let nombre = prompt('¿Cuál es tu nombre?');
    alert(`Bienvenido a ExeHelados ${nombre}`)

}

saludar();
  


// lista de arreglos

const productos = [
    {id: 1, nombre: "Helado dos bochas", precio: 500},
    {id: 2, nombre: "Helado tres bochas", precio: 700},
    {id: 3, nombre: "1/4 de kilo", precio: 850},
    {id: 4, nombre: "1/2 kilo", precio: 1000},
    {id: 5, nombre: "1 kilo", precio: 2000},
    {id: 6, nombre: "3 litros", precio: 1500},
    {id: 7, nombre: "bombones helados", precio: 350},
    ]

const total = productos.reduce((acumulador, item)=> acumulador + item.precio, 0);
console.log(total);

  productos.forEach((item)=>{
    console.log(item.nombre);
    console.log(item.precio);
    console.log(item.id);
  })



    
//variables
let dineroCliente = 100;
let precioCuarto = 20;
let precioMedio = 40;
let precioKilo = 60;

alert("Usted cuenta con " + "$" + dineroCliente);

let menu = prompt(
  "A) 1/4 Precio: $"+ precioCuarto + " B) 1/2 Precio: $" + precioMedio + " C) 1Kg precio: $" + precioKilo
);

//funcion
function dineroRestante(x) {
  return dineroCliente - x;
}



//PROBANDO COMMMIT
//condicionales
switch (menu) {
    case "a":
      alert("Usted está comprando 1/4 de helado");
      dineroRestante();
      alert("usted cuenta con $" + dineroRestante(precioCuarto));
      break;
    case "b":
      alert("Usted está comprando 1/2 kilo de helado");
      dineroRestante();
      alert("usted cuenta con $" + dineroRestante(precioMedio));
      break;
    case "c":
      alert("Usted está comprando 1 kilo de helado");
      dineroRestante();
      alert("usted cuenta con $" + dineroRestante(precioKilo));
      break;
    default:
        alert("No corresponde a ninguna opción")
      break;
  }
