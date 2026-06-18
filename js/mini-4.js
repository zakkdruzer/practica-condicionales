// Mini 4 · ¿Año bisiesto?
// Dato de entrada (prueba los 4 años de la tabla):
let año1 = 2024;
let año2 = 2019;

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