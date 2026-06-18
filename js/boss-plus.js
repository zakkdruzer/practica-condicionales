// Desafío final · Cajero automático seguro
// Estado del cajero (cambia estos valores para probar cada caso):
let saldo = 50000;
let montoSolicitado = 20000;

let comision = 0;

console.log("** Desafío final · Cajero automático seguro - MEJORADO **");

// Validaciones EN ORDEN
if (typeof montoSolicitado !== "number" || isNaN(montoSolicitado)) {
  console.log("⛔ El monto debe ser un número válido");
} else if (montoSolicitado <= 0) {
  console.log("⛔ Monto inválido");
} else if (montoSolicitado > 200000) {
  console.log("⛔ Máximo permitido por operación: $200000");
} else if (montoSolicitado % 1000 !== 0) {
  console.log("⛔ Solo montos múltiplos de $1000");
} else {
  if (montoSolicitado > 30000) {
    comision = 300;
  }

  if (montoSolicitado + comision > saldo) {
    console.log("⛔ Saldo insuficiente");
  } else {
    let comprobante = comision > 0 ? "con comisión" : "sin comisión";

    console.log(
      "✅ Retiro exitoso · Entregado: " +
        montoSolicitado +
        " · Saldo: " +
        (saldo - montoSolicitado - comision) +
        " · " +
        comprobante
    );
  }
}