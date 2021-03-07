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

const ip1: string = "10.0.0.0";
const ip2: string = "10.0.0.50";

let resultExercise8: number = ipsInRange(ip1, ip2);
console.log(`Rango ${ip1} - ${ip2} == ${resultExercise8}`);

const ip3: string = "10.0.1.0";
resultExercise8 = ipsInRange(ip1, ip3);
console.log(`Rango ${ip1} - ${ip3} == ${resultExercise8}`);

const ip4: string = "20.0.0.10";
const ip5: string = "20.0.1.0";
resultExercise8 = ipsInRange(ip4, ip5);
console.log(`Rango ${ip4} - ${ip5} == ${resultExercise8}`);