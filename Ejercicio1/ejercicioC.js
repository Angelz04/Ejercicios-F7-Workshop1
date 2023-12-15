/* Ejercicio 1.c
Crear una fórmula para saber si un número es o no es un múltiplo de 2.*/
const numero = prompt("Ingrese un número");

//Verificar si es múltiplo de 2
const esMultiploDeDos = numero % 2 === 0;

console.log(`El número ${numero} ${esMultiploDeDos ? 'es' : 'no es'} múltiplo de 2.`);
