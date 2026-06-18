// Mini 1 · ¿Te alcanza la plata?

// Datos de entrada (puedes cambiarlos para probar):
let dinero_alcanza = 10000;
let precio = 7500;
let dinero_no_alcanza= 5000;

// 👇 Escribe tu if / else aquí abajo - cambiar entre _alcanza o no_alcanza para ver los resultados
if (dinero_alcanza >= precio) {
  console.log("Te alcanza 🎉");
  console.log("Vuelto: " + (dinero_alcanza - precio));
} else {
  console.log("No te alcanza 😢");
  console.log("Te faltan: " + (precio - dinero_no_alcanza));
}