function fromSnakeToCamelCase(strSnakeCase) {
    let strCamelCase = '';
    for (let i = 0; i < strSnakeCase.length; i++) {
        if (strSnakeCase[i] == "_") {
            strCamelCase += strSnakeCase.charAt(i + 1).toUpperCase();
            i++;
        }
        else {
            strCamelCase += strSnakeCase[i];
        }
    }
    return strCamelCase;
}
function fromCamelToSnakeCase(strCamelCase) {
    let strSnakeCase = '';
    for (let i = 0; i < strCamelCase.length; i++) {
        if (strCamelCase[i] == strCamelCase.charAt(i).toUpperCase()) {
            strSnakeCase += "_" + strCamelCase.charAt(i).toLowerCase();
        }
        else {
            strSnakeCase += strCamelCase[i];
        }
    }
    return strSnakeCase;
}
let testExercise4 = "sampleString";
let test1Exercise4 = "theStealthWarrior";
let resFunctionExercise4 = fromCamelToSnakeCase(testExercise4);
let res1FunctionExercise4 = fromCamelToSnakeCase(test1Exercise4);
let resultExercise4 = fromSnakeToCamelCase(resFunctionExercise4);
let result1Exercise4 = fromSnakeToCamelCase(res1FunctionExercise4);
console.log(`Una cadena dada en Camel Case (${testExercise4}) en formato Snake Case es: ${resFunctionExercise4}`);
console.log(`Una cadena dada en Camel Case (${test1Exercise4}) en formato Snake Case es: ${res1FunctionExercise4}`);
console.log(`\nUna cadena dada en Snake Case (${resFunctionExercise4}) en formato Camel Case es: ${resultExercise4}`);
console.log(`Una cadena dada en Snake Case (${res1FunctionExercise4}) en formato Camel Case es: ${result1Exercise4}`);
