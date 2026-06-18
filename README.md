# Condicionales en JavaScript

Colección de ejercicios básicos y progresivos para practicar variables, operadores, comparaciones, `if / else`, `else if`, operadores lógicos y operador ternario en JavaScript.

## Contenido

Este proyecto incluye los siguientes ejercicios:

- **Mini 1 · ¿Te alcanza la plata?**: comparación entre dinero disponible y precio de un producto.
- **Mini 2 · El portero del cine**: validación de acceso usando edad, entrada y acompañamiento.
- **Mini 3 · Clasificador de temperatura**: clasificación del clima con rangos usando `else if`.
- **Mini 4 · ¿Año bisiesto?**: uso del operador resto y lógica compuesta para validar años bisiestos.
- **Mini 5 · El tablero del videojuego**: construcción de mensajes según vidas y puntaje.
- **Boss · Cajero automático seguro**: validación completa de un retiro con múltiples reglas y mejoras adicionales.

## Objetivo

Practicar la toma de decisiones en JavaScript mediante estructuras condicionales simples y compuestas, desarrollando lógica paso a paso y reforzando buenas prácticas de validación.

## Estructura del proyecto

```text
.
├── index.html
└── js/
    ├── mini-1.js
    ├── mini-2.js
    ├── mini-3.js
    ├── mini-4.js
    ├── mini-5.js
    ├── boss.js
    └── boss-plus.js
```

## Cómo usarlo

1. Abre el proyecto en tu editor.
2. Verifica que los archivos JavaScript estén dentro de la carpeta `js`.
3. Abre `index.html` en el navegador.
4. Presiona `F12` y entra en la pestaña **Console**.
5. Modifica los valores de las variables en cada archivo para probar distintos casos.

## Aprendizajes trabajados

- Declaración de variables con `let`.
- Comparaciones con `>`, `<`, `>=`, `<=`, `===` y `!==`.
- Uso de `if`, `else if` y `else`.
- Operadores lógicos `&&`, `||` y `!`.
- Operador resto `%` para validar divisibilidad.
- Operador ternario para decisiones simples.
- Validaciones en orden para evitar errores lógicos.

## Ejercicio final

El archivo `boss.js` reúne varios conceptos en un mismo problema:

- validación de monto inválido,
- control de múltiplos de 1000,
- verificación de saldo suficiente,
- límite máximo por operación,
- validación de tipo de dato,
- aplicación de comisión en ciertos retiros,
- generación de comprobante según corresponda.

**Se incluye tambien una version con mejoras extras**

## Recomendación

Probar cada ejercicio cambiando manualmente los valores de entrada ayuda a entender mejor cómo fluye la lógica y por qué el orden de las condiciones puede cambiar el resultado.

**Puedes ver el resultado en:**

https://zakkdruzer.github.io/practica-condicionales/
