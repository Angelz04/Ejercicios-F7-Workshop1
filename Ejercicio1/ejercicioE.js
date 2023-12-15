/* Hacer un algoritmo con JavaScript que reciba cualquier letra del 
abecedario y muestre en consola el valor booleano que indique si es o no 
una vocal.*/

const letra = prompt("Ingrese una letral del abecedario:");
const letraMinuscula = letra.toLocaleLowerCase();

//Verificar si la letra es vocal
const esVocal = letraMinuscula === 'a' || letraMinuscula === 'e' || letraMinuscula === 'i' || letraMinuscula === 'o' || letraMinuscula === 'u';

console.log(`La letra ${letra} ${esVocal ? 'es' : 'no es'} una vocal.`);