/*Ejercicio 1.b
La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando 
un  descuento  del  50%  para  compras  mayores  o  iguales  a  los  $100.000 
COP. Se le pide realizar un algoritmo que reciba el valor de una compra y 
muestre en consola el valor booleano que indique si la compra recibe o no 
el descuento*/

const compra = prompt("Ingrese el valor de la compra en COP:");

//Descuento
const umbralDescuento = 100000; // $100.000 COP
const porcentajeDescuento = 50; // 50%

//Verificación
const elegibleParaDescuento = compra >= umbralDescuento;

if (elegibleParaDescuento){
    console.log("¡Felicidades! Su compra aplica el descuento");
}
else{
    console.log("Su compra no cumple con el umbral para aplicar el descuento");
}