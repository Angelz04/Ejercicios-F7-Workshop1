/*Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
básico por horas y el número de horas trabajadas en un mes y realice lo 
siguiente:
i. Calcular su salario básico mensual.

ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o 
igual a $700.000 COP.

iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transporte.*/

// D.i

const nombreEmpleado = prompt('Ingrese el nombre del empleado:');
const salarioPorHoras = parseFloat(prompt('Ingrese salario por horas:'))
const horasTrabajadas = parseFloat(prompt('Ingrese el número de horas trabajadas en el mes:'))

const salarioBasicoMensual = salarioPorHoras * horasTrabajadas;

//D.ii

const recibeSubsidio = salarioBasicoMensual <= 700000;

//D.iii

console.log('Nombre del empleado: ', nombreEmpleado);
console.log('Salario básico mensual: ', salarioBasicoMensual);
console.log('Recibe subsidio de transporte: ', (recibeSubsidio ? 'Sí' : 'No'))