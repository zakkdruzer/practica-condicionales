// Mini 2 · El portero del cine
// Datos de entrada (cámbialos para probar los 4 casos):
let edad = 14;
let tieneEntrada = true;
let conAdultoResponsable = true;
let sinAdultoResponsable = false;
    
console.log("** Mini 2 · El portero del cine **");

// 👇 Arma la condición y el if / else aquí
if (tieneEntrada && (edad >= 18 || conAdultoResponsable)) {
  console.log("Puedes pasar 🎬");
} else {
  console.log("Acceso denegado 🚫");
}
// Caso negativo
if (tieneEntrada && (edad >= 18 || sinAdultoResponsable)) {
  console.log("Puedes pasar 🎬");
} else {
  console.log("Acceso denegado 🚫");
}