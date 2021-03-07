function nextNumber(num) {
    let numString = num.toFixed();
    let aux = "";
    const szNum = numString.length;
    for (let i = szNum - 1; i > -1; i--) {
        for (let j = 0; j < szNum; j++) {
            if (i - j > 0) {
                if (parseInt(numString.charAt(i - j)) > parseInt(numString.charAt(i - j - 1))) {
                    aux = numString.charAt(i - j);
                    numString = numString.substr(0, i - j - 1) + aux + numString.charAt(i - j - 1) + numString.substr(i - j + 1, szNum);
                    return parseInt(numString);
                }
                else {
                    aux = numString.charAt(i - j);
                    numString = numString.substr(0, i - j - 1) + aux + numString.charAt(i - j - 1) + numString.substr(i - j + 1, szNum);
                }
            }
        }
        numString = num.toFixed();
    }
    return -1;
}
console.log(`Siguiente numero a 12 -> ${nextNumber(12)}`);
console.log(`Siguiente numero a 513 -> ${nextNumber(513)}`);
console.log(`Siguiente numero a 2017 -> ${nextNumber(2017)}`);
console.log(`Siguiente numero a 9 -> ${nextNumber(9)}`);
console.log(`Siguiente numero a 111 -> ${nextNumber(111)}`);
console.log(`Siguiente numero a 531 -> ${nextNumber(531)}`);
