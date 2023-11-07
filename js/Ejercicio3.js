/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

let cadena = "";
do {
  let texto = prompt("Introduce un texto");
  if (cadena == "") {
    cadena = cadena + texto;
  } else {
    texto = "";
  }
  if (cadena == "" && texto != "") {
    cadena += texto;
  } else if (cadena != "" && texto != "") {
    cadena += "-" + texto;
  } else {
    cadena = cadena;
  }
} while (confirm("¿Quieres seguir?"));
console.log(cadena);
