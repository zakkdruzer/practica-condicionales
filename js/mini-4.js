// Mini 4 · ¿Año bisiesto?
// Dato de entrada (prueba los 4 años de la tabla):
let año1 = 2024;
let año2 = 2019;
let año3 = 2000;
let año4 = 1900;

console.log("** Mini 4 · ¿Año bisiesto? **");

// 👇 Resuelve la regla del año bisiesto
if ((año1 % 4 === 0 && año1 % 100 !== 0) || año1 % 400 === 0) {
  console.log(año1 + " es bisiesto ✅");
} else {
  console.log(año1 + " no es bisiesto ❌");
}

// Caso distintos
if ((año2 % 4 === 0 && año2 % 100 !== 0) || año2 % 400 === 0) {
  console.log(año2 + " es bisiesto ✅");
} else {
  console.log(año2 + " no es bisiesto ❌");
}

if ((año3 % 4 === 0 && año3 % 100 !== 0) || año3 % 400 === 0) {
  console.log(año3 + " es bisiesto ✅");
} else {
  console.log(año3 + " no es bisiesto ❌");
}

if ((año4 % 4 === 0 && año4 % 100 !== 0) || año4 % 400 === 0) {
  console.log(año4 + " es bisiesto ✅");
} else {
  console.log(año4 + " no es bisiesto ❌");
}