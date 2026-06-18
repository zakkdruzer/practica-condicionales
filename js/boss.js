// Desafío final · Cajero automático seguro
// Estado del cajero (cambia estos valores para probar cada caso):
let saldo = 50000;
let montoSolicitado = 20000;
let saldoInsuficiente = 60000;
let montoNoValido = -5000;
let montoNoMultiplo = 7500;

console.log("** Desafío final · Cajero automático seguro **");

// 👇 Valida EN ORDEN antes de entregar la plata.
if (montoSolicitado <= 0) {
  console.log("⛔ Monto inválido");
} else if (montoSolicitado % 1000 !== 0) {
  console.log("⛔ Solo montos múltiplos de $1000");
} else if (montoSolicitado > saldo) {
  console.log("⛔ Saldo insuficiente");
} else {
  console.log("✅ Retiro exitoso");
  console.log("Entregado: " + montoSolicitado);
  console.log("Saldo: " + (saldo - montoSolicitado));
}

// Casos distintos

if (saldoInsuficiente <= 0) {
  console.log("⛔ Monto inválido");
} else if (saldoInsuficiente % 1000 !== 0) {
  console.log("⛔ Solo montos múltiplos de $1000");
} else if (saldoInsuficiente > saldo) {
  console.log("⛔ Saldo insuficiente");
} else {
  console.log("✅ Retiro exitoso");
  console.log("Entregado: " + montoSolicitado);
  console.log("Saldo: " + (saldo - montoSolicitado));
}

if (montoNoValido <= 0) {
  console.log("⛔ Monto inválido");
} else if (montoNoValido % 1000 !== 0) {
  console.log("⛔ Solo montos múltiplos de $1000");
} else if (montoNoValido > saldo) {
  console.log("⛔ Saldo insuficiente");
} else {
  console.log("✅ Retiro exitoso");
  console.log("Entregado: " + montoSolicitado);
  console.log("Saldo: " + (saldo - montoSolicitado));
}

if (montoNoMultiplo <= 0) {
  console.log("⛔ Monto inválido");
} else if (montoNoMultiplo % 1000 !== 0) {
  console.log("⛔ Solo montos múltiplos de $1000");
} else if (montoNoMultiplo > saldo) {
  console.log("⛔ Saldo insuficiente");
} else {
  console.log("✅ Retiro exitoso");
  console.log("Entregado: " + montoSolicitado);
  console.log("Saldo: " + (saldo - montoSolicitado));
}