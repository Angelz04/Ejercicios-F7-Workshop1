//3.a

//Primera linea
let p = true , q = true
let notp = !p
let notpAndq = !p && q
console.log("NOT p", notp );
console.log("NOT p AND q" , notpAndq);

//Segunda linea
p = true , q = false
notp = !p
notpAndq = !p && q
console.log("NOT p", notp );
console.log("NOT p AND q" , notpAndq);

//Tercera linea
p = false, q = true
notp = !p
notpAndq = !p && q
console.log("NOT p", notp );
console.log("NOT p AND q" , notpAndq);

//Cuarta linea
p = false, q = false
notp = !p
notpAndq = !p && q
console.log("NOT p", notp );
console.log("NOT p AND q" , notpAndq);

//3.b
console.log("Segunda Tabla");

//Primra linea
p = true, q = true
notp = !p
let notq = !q
let notpAndNotq = !p && !q
console.log("NOT p", notp);
console.log("NOT q", notq);
console.log("NOT p AND NOT q", notpAndNotq);

//Segunda linea
p = true, q = false
notp = !p
notq = !q
notpAndNotq = !p && !q
console.log("NOT p", notp);
console.log("NOT q", notq);
console.log("NOT p AND NOT q", notpAndNotq);

//Tercera linea
p = false, q = true
notp = !p
notq = !q
notpAndNotq = !p && !q
console.log("NOT p", notp);
console.log("NOT q", notq);
console.log("NOT p AND NOT q", notpAndNotq);

//Cuarta linea
p = false, q = false
notp = !p
notq = !q
notpAndNotq = !p && !q
console.log("NOT p", notp);
console.log("NOT q", notq);
console.log("NOT p AND NOT q", notpAndNotq);