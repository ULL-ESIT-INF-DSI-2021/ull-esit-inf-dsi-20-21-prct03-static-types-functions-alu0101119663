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

```
function factorial(num: number): number {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function decimalToFactorial(num: number): string {
  let nFactorial: number = 0;
  let notacionFactorial: string = '';
  let numero: number = 0;

  while (factorial(nFactorial) < num) {
    nFactorial++;
  }
  nFactorial--;

  for (let i: number = nFactorial; i > -1; i--) {
    numero = Math.floor(num / factorial(i));
    notacionFactorial += numero.toFixed();
    num -= (numero * factorial(i));
  }
  return notacionFactorial;
}

function factorialToDecimal(str: string): number {
  let notacion: number = 0;
  let aux: number = 0;

  for (let i: number = str.length - 1; i > -1; i--) {
    notacion += ((parseInt(str[aux]) * factorial(i)));
    aux++; 
  }
  return notacion; 
}
```
Para este ejercicio tenemos 3 funciones, en la primera **factorial**, se le pasa un parametro, que es el número y retorna el factorial de este. Se utiliza recurisvidad para hallar el valor correcto, llamando la misma funcion decrementando el valor de entrada hasta que sea igual a 0. En la segunda **decimalToFactorial** se le pasa un número entero y retorna el mismo número pero en notación factoria. Se obtiene el mayor factorial y se sigue la fórmula que se nos indica en el guión de la práctica. El multiplicador de los factoriales se obtiene haciendo la división entre el resto. Hago uso de truncamiento por si existe algún problema. Antes de sacar el número se multiplica por el factorial, y se va sumando en el sumatorio hasta que se optiene el valor correspondiente en notación factorial. Por último, tenemos la función **factorialToDecimal** que se le pasa como parametro un número en notación factorial, se obtiene el número que representa y retorna dicho valor. Con la variable *aux* se obteniendo los números de la notación de izquierda a derecha. Dentro del bucle, se multiplica el número de la notación por el factorial correspondiente y se hace el sumatorio. Una vez terminado el bucle, el número se retorna.

**Salida del programa**

```
El numero 463 codificado en notacion factorial es: 341010
Si obtenemos el numero entero a partir del numero anteriormente codificado (341010) es: 463
```

## Ejercicio 3 - Validador de mensajes
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-3.ts)

```
function isValid(str: string): boolean {
  let strCopy: string = '';
  let aux: number = 0;
  let aux1: string = '';

  strCopy = str;
  for (let i: number = 0; i < str.length; i++) {
    aux = parseInt(strCopy, 10);
    if (aux.toFixed().length > 1) {
      i += (aux.toFixed().length - 1);
    }
    if (isNaN(aux) == true) {
      return false;
    }
    for (let j: number = 1; j <= aux; j++) {
      aux1 = str.charAt(i + j);
      if (!/[a-z]/gi.test(aux1)) {
        return false;
      }
    }
    strCopy = strCopy.slice(aux + 1);
    i += aux;
  }
  return true;
}

```
En este ejercicio, tenemos una fucnion que comprueba si un mensaje es válido o no. Para ello con un bucle se recorre la cadena que la función recibe como parámetro. Comprueba si la posición en la que se encuentra tiene guardado un número, en caso de que no sea así, se retorna false. Se avanza hasta la primera letra y hacemos que recorra la cantidad que indique el número que capturamos antes. Esto se repite para comprobar que hay tantas letras como el valor del número que precede a las letras. Si todo va bien, retorna un true. En caso contrario, retornará false.

**Salida del programa**
´´´
Cadena vacia: true
Cadena 3hey5hello2hi: true
Cadena 3hey10helloworld: true
Cadena 3hey9helloworld: false
Cadena 4code10helloworld: true
´´´
## Ejercicio 4 - Conversor de estilo
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-4.ts)

```
function fromSnakeToCamelCase(strSnakeCase: string): string {
  let strCamelCase: string = '';
  for (let i: number = 0; i < strSnakeCase.length; i++) {
    if (strSnakeCase[i] == "_") {
      strCamelCase += strSnakeCase.charAt(i + 1).toUpperCase();
      i++;
    } else {
      strCamelCase += strSnakeCase[i];
    }
  }
  return strCamelCase;
}

function fromCamelToSnakeCase(strCamelCase: string): string {
  let strSnakeCase: string = '';
  for (let i: number = 0; i < strCamelCase.length; i++) {
    if (strCamelCase[i] == strCamelCase.charAt(i).toUpperCase()) {
      strSnakeCase += "_" + strCamelCase.charAt(i).toLowerCase(); 
    } else {
      strSnakeCase += strCamelCase[i]; 
    }
  }
  return strSnakeCase;
}
```
Para realizar este ejercicio necesitamos dos funciones, en la primera **fromSnakeToCamelCase** se pasa una cadena recibida por parámetro en estilo Snake Case (las palabras se separan por barrabaja) y devuelve una cadena en estilo Camel Case (palabras separadas con la primera de la siguiente en mayúscula). Para ello se recorre la cadena hasta que se le encuentra una barrabaja, una vez hecho se copia la siguiente letra en mayúscula. Mientras no se encuentre una barrabaja, se seguirá copiando letra a letra en la variable creada. En la segunda función **fromCamelToSnakeCase**, se hace lo contrario, se busca una letra mayúscula y si se encuentra se añade una barrabaja y luego la letra que estaba en mayúscula se la copiamos a la variable que creamos pero esta vez en minúscula. Al igual que en el caso anterior, si la condición no se da, se copia letra a letra sin realizar modificaciones.

**Salida del programa**
```
Una cadena dada en Camel Case (sampleString) en formato Snake Case es: sample_string
Una cadena dada en Camel Case (theStealthWarrior) en formato Snake Case es: the_stealth_warrior

Una cadena dada en Snake Case (sample_string) en formato Camel Case es: sampleString
Una cadena dada en Snake Case (the_stealth_warrior) en formato Camel Case es: theStealthWarrior
```
## Ejercicio 5 - Un solo golpe
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-5.ts)
```
const onePunch = (str: string) => str == ``? (`Broken!`):
(str.split(" ").sort().join(" ").replace(/[ae]/gi, ""));
```
Para realizar este ejercicio he creado una función anónima, la cual tiene dos opciones. Si la cadena está vacía se retorna *Broken!*. En caso de que no sea así se separa la cadena, se ordena alfabéticamente, las une de nuevo y por úlitmo, elimina todos los carácteres *a* y *e* de las palabras. Finalmente, se retorna el resultado de las anteriores operaciones.

**Salida del programa**
```
Beard Jeans Hairbrush Knuckleduster Sand => Brd Hirbrush Jns Knuckldustr Snd
Sock Beard Vest Lady Sage => Brd Ldy Sg Sock Vst
Beard Sack Gun Parachute Face-Kicking-Shoes => Brd Fc-Kicking-Shos Gun Prchut Sck
Snot Snow Soda Tank Beard => Brd Snot Snow Sod Tnk
Cadena vacia ('') => Broken!
```
## Ejercicio 6 - Conversor ISBN
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-6.ts)

```
function isValidISBN(ISBN: string): boolean {
  ISBN = ISBN.replace(/[-]/g, "");

  if (ISBN.length < 10) {
    return false; 
  }

  let sum: number = 0;

  for (let i = 0; i < ISBN.length; i++) {
    if ((ISBN[i] == "X") || (ISBN[i] == "x")) {
      sum += (10 * (ISBN.length - i));
    } else {
      sum += (parseInt(ISBN[i]) * (ISBN.length - i));
    }
  }

  if (sum % 11 == 0) {
    return true;
  } else {
    return false;
  }
}
```
Para este ejercicio se ha creado una función que recibe como parámetro una cadena que representa un ISBM, y devolverá true o false en función si es un ISBM válido o no. Primero usando una expresión regular, quitamos los guiones que pueda tener la cadena. El paso siguiente es comprobar el tamaño de la cadena dada. El siguiente paso es entrar a un bucle donde se irá realizando un sumatorio con la fórmula siguiente: *(x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0* esta función nos da la pista sobre la validez del ISBM. En el **for** se comprueba si hay alguna X, ya que esta tiene un valor correspondiente a 10 y se multiplica por el valor correspondiente. Si no, se pasa el número encontrado en la cadena a un entero y se multiplica por el valor correspondiente. Por úlitmo, se comprueba si el resultado obtenido es divisible por 11 y si lo es, se devolverá un *booleano* con valor true, afirmando la validez del ISBM. En el caso contrario, se devolverá un false.

**Salida del programa**

```
El ISBN 3-598-21507-X es valido? -> true
El ISBN 359821507X es valido? -> true
El ISBN 58-88-88 es valido? -> false
El ISBN 8 es valido? -> false
```

## Ejercicio 7 - El siguiente número
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-7.ts)

```
function nextNumber(num: number): number {
  let numString: string = num.toFixed();
  let aux: string = "";
  const szNum: number = numString.length;

  for (let i: number = szNum - 1; i > -1; i--) {
    for (let j: number = 0; j < szNum; j++) {
      if (i - j > 0) {
        if (parseInt(numString.charAt(i - j)) > parseInt(numString.charAt(i - j - 1))) {
          aux = numString.charAt(i - j);
          numString = numString.substr(0, i - j - 1) + aux + numString.charAt(i - j - 1) + numString.substr(i - j + 1, szNum);
          return parseInt(numString);
        } else {
          aux = numString.charAt(i - j);
          numString = numString.substr(0, i - j - 1) + aux + numString.charAt(i - j - 1) + numString.substr(i - j + 1, szNum);
        }
      }
    }
    numString = num.toFixed();
  }
  return -1;
}
```

Para este ejercicio, se ha creado una funcion que recibe por parámetro un número, para obtener el siguiente número mayor si se reorganizan sus dígitos. Mediante dos bucles que recorrerán el número, uno de izquierda a derecha y el otro de manera inversa, hacemos desplazar el último número a la izquierda hasta que encuentre uno menor que intercambiará y retornará el número, siendo el siguiente posible. De no poder realizar esta operación, se hará con el penúltimo y así con todos los dígitos. Si finalmente agota todos los dígitos, se retorna un -1.

**Salida del programa**
```
Siguiente numero a 12 -> 21
Siguiente numero a 513 -> 531
Siguiente numero a 2017 -> 2071
Siguiente numero a 9 -> -1
Siguiente numero a 111 -> -1
Siguiente numero a 531 -> -1
```
## Ejercicio 8 - Contando IPs
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-8.ts)

```
function ipsInRange(ip1: string, ip2: string): number {
  const ip1Copy = ip1.split(".");
  const ip2Copy = ip2.split(".");
  let aux: number = 1; 
  let range: number = 0;

  for (let i: number = ip1Copy.length - 1; i >= 0; i--) {
    range += ((parseInt(ip2Copy[i]) - parseInt(ip1Copy[i]))* aux);
    aux *= 256; 
  }
  return range;
}

```
Para realizar este ejercicio, usaremos una función, esta recibe dos parámetro, que se corresponden con las dos IPs. Primeros separamos cada una de las IP en un array. Creamos un bucle donde recorremos el vector al revés. Se obtiene el valor y se resta la IP2 - IP1, ese resultado se multiplica por la variable auxiliar. Finalmente se retorna la suma total, que nos dará el rango.

**Salida del programa**
```
Rango 10.0.0.0 - 10.0.0.50 == 50
Rango 10.0.0.0 - 10.0.1.0 == 256
Rango 20.0.0.10 - 20.0.1.0 == 246
```

## Ejercicio 9 - Entrenador Pokemon
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-9.ts)

```
function combatePokemon(tipoPokemon1: string, tipoPokemon2: string, ataque: number, defensaOponente: number): number {
  let efectividad: number = 0;
  
  if (tipoPokemon1 == tipoPokemon2) {
    efectividad = 0.5;
  } else {
    switch (tipoPokemon1) {
      case "fuego":
        if (tipoPokemon2 == "hierba") {
          efectividad = 2;
        }

        if (tipoPokemon2 == "agua") {
          efectividad = 0.5;
        }

        if (tipoPokemon2 == "electrico") {
          efectividad = 1;
        }

        break;
      
      case "agua":
        if (tipoPokemon2 == "fuego") {
          efectividad = 2;
        }
        if ((tipoPokemon2 == "electrico") || (tipoPokemon2 == "hierba")) {
          efectividad = 0.5;
        }

        break;
      
      case "hierba":
        if (tipoPokemon2 == "agua") {
          efectividad = 2;
        }

        if (tipoPokemon2 == "electrico") {
          efectividad = 1;
        }

        if (tipoPokemon2 == "fuego") {
          efectividad = 0.5;
        }

        break;

      case "electrico":
        if (tipoPokemon2 == "agua") {
          efectividad = 2;
        }

        if ((tipoPokemon2 == "fuego") || (tipoPokemon2 == "hierba")) {
          efectividad = 1;
        }

        break;
    }
  }

  let daño = 50 * (ataque / defensaOponente) * efectividad;
  return daño;
}
```

Para poder realizar este ejercicio, creamos una función que recibe como parametros el tipo del Pokemon 1, el tipo del Pokemon 2, la capacidad de ataque del primer Pokemon y la capacidad de defensa del segundo Pokemon. La función nos retornará el daño, para ello será necesario hallar la efectividad del ataque, para poder comparar los tipos y así obtener la efictivdad se ha hecho un *switch*, que tendrá el valor del Pokemon 1, el que realiza el ataque, y va comparando en función del tipo del Pokemon que recibe el ataque. Una vez haya entrado en la condición, se podrá obtener la efictividad. Por úlitmo, con la operación que se nos da en el guión de la práctica se calculará el daño y se retornará.

**Salida del programa**
```
Combate entre Pikachu (ataque = 8) vs Squirtle (defensa = 6)
Daño que ha hecho Pikachu a Squirtle: 133.33333333333331

Combate entre Bulbasaur (ataque = 12) vs Charmander (defensa = 4)
Daño que ha hecho Bulbasaur a Charmander: 75
```

## Ejercicio 10 - Validador de nombre usuario
[Código resuelto](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101119663/blob/master/src/ejercicio-10.ts)

```
function isValidUsername(user: string): boolean {
  const userLen: number = user.length;

  if ((userLen >= 4) && (userLen <= 30)) {
    if ((user[0] != "_") && (user[userLen - 1] != "_")) {
      if ((/[A-Z]/.test(user)) && (/[a-z]/.test(user)) && (/[0-9]/.test(user)) && (/[$_-]/.test(user))) {
        if ((!/[A-Z][A-Z][A-Z]/.test(user)) && (!/[a-z][a-z][a-z]/.test(user)) && (!/[0-9][0-9][0-9]/.test(user)) && (!/[$_-][$_-][$_-]/.test(user))) {
          return true;
        }
      }
    }
  }
  return false;
}
```
Para poder completar este ejercicio, se ha desarrollado una función, que recibe como parámetro una cadena y devolverá un *booleano*. Para empezar se calcula el tamaño de la cadena y entramos a unos condicionales. Durante el primero comprobamos que la cadena tiene más de 4 caráctres y menos de 30. La siguiente comprueba que la cadena no empieza ni termina en barrabaja. La siguiente comprueba que los carácteres utilizados son letras en mayúsculas y minúsculas, números y los signos siguentes *[$ _ -]*, con esta comprobación hacemos que la cadena tenga al menos uno de cada tipo. Por último, con el último condicional nos aseguramos de que no se repite más de 2 veces cualquier tipo de carácter. Si se han cumplido todas las condiciones la función devolverá un true y si no, devolverá un false ya que no será un nombre de usuario válido.

**Salida del programa**
```
El usuario alu01 es valido? : false
El usuario u__hello$122__ es valido? : false
El usuario Alu01 es valido? : false
El usuario J$$_c0 es valido? : false
El usuario J$$c0 es valido? : true
El usuario u__hi$12__S es valido? : true
```
