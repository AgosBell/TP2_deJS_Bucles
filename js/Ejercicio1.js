/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let edadSolicitada=parseInt(prompt(`Ingresar edad: `));
if(edadSolicitada >=18){
    document.write("Usted es apto para conducir un vehiculo");
}else{
    alert("No cuenta con la mayoría de edad para adquirir el carnet de conducir");
}