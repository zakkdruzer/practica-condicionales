// Mini 1 · ¿Te alcanza la plata?
// Datos de entrada (puedes cambiarlos para probar):
let dineroAlcanza = 10000;
let precio = 7500;
let dineroNoAlcanza= 2000;

console.log("** Mini 1 · ¿Te alcanza la plata? **");

// 👇 Escribe tu if / else aquí abajo
if (dineroAlcanza >= precio) {
  console.log("Te alcanza 🎉");
  console.log("Vuelto: " + (dineroAlcanza - precio));
} else {
  console.log("No te alcanza 😢");
  console.log("Te faltan: " + (precio - dineroNoAlcanza));
}
// Caso negativo
if (dineroNoAlcanza >= precio) {
  console.log("Te alcanza 🎉");
  console.log("Vuelto: " + (dineroAlcanza - precio));
} else {
  console.log("No te alcanza 😢");
  console.log("Te faltan: " + (precio - dineroNoAlcanza));
}