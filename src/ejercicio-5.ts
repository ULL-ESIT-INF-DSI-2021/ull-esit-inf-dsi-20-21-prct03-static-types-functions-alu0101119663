const onePunch = (str: string) => str == ``? (`Broken!`):
(str.split(" ").sort().join(" ").replace(/[ae]/gi, ""));

const test1Exercise5: string = 'Beard Jeans Hairbrush Knuckleduster Sand';
const test2Exercise5: string = 'Sock Beard Vest Lady Sage';
const test3Exercise5: string = 'Beard Sack Gun Parachute Face-Kicking-Shoes';
const test4Exercise5: string = 'Snot Snow Soda Tank Beard';
const test5Exercise5: string = '';

let resultExercise5: string = onePunch(test1Exercise5);
console.log(`${test1Exercise5} => ${resultExercise5}`);

resultExercise5 = onePunch(test2Exercise5);
console.log(`${test2Exercise5} => ${resultExercise5}`);

resultExercise5 = onePunch(test3Exercise5);
console.log(`${test3Exercise5} => ${resultExercise5}`);

resultExercise5 = onePunch(test4Exercise5);
console.log(`${test4Exercise5} => ${resultExercise5}`);

resultExercise5 = onePunch(test5Exercise5);
console.log(`Cadena vacia ('${test5Exercise5}') => ${resultExercise5}`);