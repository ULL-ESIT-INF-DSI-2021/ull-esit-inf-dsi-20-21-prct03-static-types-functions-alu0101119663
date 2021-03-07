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

let testExercise2: number = 463;
let resFunctionExercise2: string = decimalToFactorial(testExercise2);
console.log(`El numero ${testExercise2} codificado en notacion factorial es: ${resFunctionExercise2}`);

let resultExercise2 = factorialToDecimal(resFunctionExercise2);
console.log(`Si obtenemos el numero entero a partir del numero anteriormente codificado (${resFunctionExercise2}) es: ${resultExercise2}`);