const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 1;

//Ejercicio2 a. (a/b*c)
const solucionA = a / (b * c);
console.log("El resultado de la expresion algebraica (a/b*c) es: ",solucionA);

//Ejercicio2 b. (a^2+b^92)
const solucionB = Math.pow(a,2)+Math.pow(b,92);
console.log("El resultado de la expresion algebraica (a^2+b^92) es: ",solucionB);

//Ejercicio2 c. (x+y)/(u+(w/a))
const solucionC = (x+y)/(u+(w/a));
console.log("El resultado de la expresion algebraica (x+y)/(u+(w/a)) es: ",solucionC);

//Ejercicio2 d. (x/y)*(z+w)
const solucionD = (x/y)*(z+w);
console.log("El resultado de la expresion algebraica (x/y)*(z+w) es: ",solucionD);