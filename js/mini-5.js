// Mini 5 · El tablero del videojuego
// Estado del jugador y puntaje (puedes cambiarlos para probar):
let vidas1 = 3;
let vidas2 = 0;
let puntaje1 = 1500;
let puntaje2 = 800;

console.log("** Mini 5 · El tablero del videojuego **");

// 👇 Usa SOLO el operador ternario
let estado1 = vidas1 > 0 ? "Sigues vivo 🎮" : "Game Over 💀";
let mensajePuntaje1 = puntaje1 >= 1000 ? "¡Nuevo récord! 🏆" : "Sigue sumando 💪";

let estado2 = vidas2 > 0 ? "Sigues vivo 🎮" : "Game Over 💀";
let mensajePuntaje2 = puntaje2 >= 1000 ? "¡Nuevo récord! 🏆" : "Sigue sumando 💪";

console.log(estado1);
console.log(mensajePuntaje1);
console.log(estado2);
console.log(mensajePuntaje2);