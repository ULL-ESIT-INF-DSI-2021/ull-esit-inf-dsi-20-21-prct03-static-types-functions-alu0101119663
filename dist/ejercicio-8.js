function ipsInRange(ip1, ip2) {
    const ip1Copy = ip1.split(".");
    const ip2Copy = ip2.split(".");
    let aux = 1;
    let range = 0;
    for (let i = ip1Copy.length - 1; i >= 0; i--) {
        range += ((parseInt(ip2Copy[i]) - parseInt(ip1Copy[i])) * aux);
        aux *= 256;
    }
    return range;
}
const ip1 = "10.0.0.0";
const ip2 = "10.0.0.50";
let resultExercise8 = ipsInRange(ip1, ip2);
console.log(`Rango ${ip1} - ${ip2} == ${resultExercise8}`);
const ip3 = "10.0.1.0";
resultExercise8 = ipsInRange(ip1, ip3);
console.log(`Rango ${ip1} - ${ip3} == ${resultExercise8}`);
const ip4 = "20.0.0.10";
const ip5 = "20.0.1.0";
resultExercise8 = ipsInRange(ip4, ip5);
console.log(`Rango ${ip4} - ${ip5} == ${resultExercise8}`);
