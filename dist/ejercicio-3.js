function isValid(str) {
    let strCopy = '';
    let aux = 0;
    let aux1 = '';
    strCopy = str;
    for (let i = 0; i < str.length; i++) {
        aux = parseInt(strCopy, 10);
        if (aux.toFixed().length > 1) {
            i += (aux.toFixed().length - 1);
        }
        if (isNaN(aux) == true) {
            return false;
        }
        for (let j = 1; j <= aux; j++) {
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
const cadenaVacia = '';
const cadena1 = '3hey5hello2hi';
const cadena2 = '3hey10helloworld';
const cadena3 = '3hey9helloworld';
const cadena4 = '4code10helloworld';
const resCadenaVacia = isValid(cadenaVacia);
console.log(`Cadena vacia: ${resCadenaVacia}`);
const resCadena1 = isValid(cadena1);
console.log(`Cadena ${cadena1}: ${resCadena1}`);
const resCadena2 = isValid(cadena2);
console.log(`Cadena ${cadena2}: ${resCadena2}`);
const resCadena3 = isValid(cadena3);
console.log(`Cadena ${cadena3}: ${resCadena3}`);
const resCadena4 = isValid(cadena4);
console.log(`Cadena ${cadena4}: ${resCadena4}`);
