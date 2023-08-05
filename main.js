//Preentrega numero 1

//variables
let dineroCliente = 100;
let precioCuarto = 20;
let precioMedio = 40;
let precioKilo = 60;

alert("Bienvenidos a Exehelados");
alert("Usted cuenta con " + "$" + dineroCliente);

let menu = prompt(
  "A) 1/4 Precio: $"+ precioCuarto + " B) 1/2 Precio: $" + precioMedio + " C) 1Kg precio: $" + precioKilo
);

//funcion
function dineroRestante(x) {
  return dineroCliente - x;
}

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

