# Práctica 3 - Tipos de datos estáticos y funciones

## Introducción
Durante la realización de esta práctica lo que haremos es familiarizarnos con la realización de ejercicios en código TypeScript, centrado en los tipos de datos estáticos y funciones en este lenguaje. Para empezar crearemos una estructura para nuestro proyecto y luego empezaremos a codificar los ejercicios que nos han propuesto.

## Antes de empezar.
Antes de empezar, hemos de crear la estructura. Para ello nos dirigimos al directorio donde vamos a empezar y ejecutamos lo siguiente:

```
$npm init --yes
Wrote to /home/usuario/Practicas/p3/package.json:

{
  "name": "p3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

[~/Practicas/P3()]$mkdir src
[~/Practicas/P3()]$mkdir dist
[~/Practicas/P3()]$cd src/
```
Una vez realizado, ya estamos en la carpeta donde realizaremos los ejercicios.
## Ejercicio 1: Años bisiestos
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-1.ts)

```
function isLeapYear(year: number) {
  if (year % 4 == 0) {
    if (year % 100 != 0) {
      return true;
    } else if ((year % 100 == 0) && (year % 400 == 0)) {
      return true;
    }
  }
  return false;
}
```
La función recibe como parametro el año que vamos a analizar, una vez recibido vemos si cumple las condiciones de si es divisible entre 4, si es divisible por 100 y si es divisible por 400. Entonces si en la primera no se da el caso nos devuelve false, sin embargo si cumbple la condicion comprueba la siguiete, que es un condicional compuesto, para que retorne un true, debe darse los dos casos tanto que sea divisible por 100 como por 400.

**Salida del programa**
```
El año 1997 es bisiesto? = false
El año 1996 es bisiesto? = true
El año 1900 es bisiesto? = false
El año 2000 es bisiesto? = true
```
## Ejercicio 2 - Notación decimal y factorial
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-2.ts)
## Ejercicio 3 - Validador de mensajes
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-3.ts)
## Ejercicio 4 - Conversor de estilo
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-4.ts)
## Ejercicio 5 - Un solo golpe
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-5.ts)
## Ejercicio 6 - Conversor ISBN
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-6.ts)
## Ejercicio 7 - El siguiente número
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-7.ts)
## Ejercicio 8 - Contando IPs
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-8.ts)
## Ejercicio 9 - Entrenador Pokemon
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-9.ts)
## Ejercicio 10 - Validador de nombre usuario
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-10.ts)

