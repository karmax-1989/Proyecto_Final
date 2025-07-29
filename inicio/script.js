

//Ejercicios de Javascript

/* 1 Ejercicio 

let nota1 = 8;
let nota2 = 6;
let nota3 = 4;
let promedio = (nota1+nota2+nota3)/3;

console.log("EL promedio de las Notas es " + promedio);

 2 Ejercicio 

let nombre = "Carlos";
let edad = 36;

console.log(nombre +"tiene "+edad +"años ");

 3 Ejercicio 

let horas = 20;
let precio = 5000;
let sueldo = horas*precio;

console.log("EL sueldo del trabajador es "+sueldo+"por "+horas+"horas trabajadas ");

 4 Ejercicio 

let valor = 10000;
let cantidad = 50;
let total = valor * cantidad;

console.log("El total a pagar es " + total + "Por " + cantidad + "balones");

 5 Ejercicio 

let subtotal = 1000000;
let descuento = subtotal*10/100;
let tot = subtotal - descuento;

console.log("EL total de su compra es "+subtotal+"Pero hoy tenemos 10% de descuento -"+descuento+"entonces el total a pagar es "+tot);

alert("EL total de su compra es "+subtotal+"Pero hoy tenemos 10% de descuento -"+descuento+"entonces el total a pagar es "+tot);

*/

//Ejercicios estrucuras de control

//Tercer ejercicio

let precio=300000;
let descuento=0;
if (precio<200000){
    total = precio-descuento;
    }
else {
    descuento = precio*(20/100);
    total = precio-descuento;
}
console.log("El precio es "+precio+"COn la promoción del dia, el descuento es "+descuento+"el total a pagar es")
