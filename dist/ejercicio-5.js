const onePunch = (str) => str == `` ? (`Broken!`) :
    (str.split(" ").sort().join(" ").replace(/[ae]/gi, ""));
const test1Exercise5 = 'Beard Jeans Hairbrush Knuckleduster Sand';
const test2Exercise5 = 'Sock Beard Vest Lady Sage';
const test3Exercise5 = 'Beard Sack Gun Parachute Face-Kicking-Shoes';
const test4Exercise5 = 'Snot Snow Soda Tank Beard';
const test5Exercise5 = '';
let resultExercise5 = onePunch(test1Exercise5);
console.log(`${test1Exercise5} => ${resultExercise5}`);
resultExercise5 = onePunch(test2Exercise5);
console.log(`${test2Exercise5} => ${resultExercise5}`);
resultExercise5 = onePunch(test3Exercise5);
console.log(`${test3Exercise5} => ${resultExercise5}`);
resultExercise5 = onePunch(test4Exercise5);
console.log(`${test4Exercise5} => ${resultExercise5}`);
resultExercise5 = onePunch(test5Exercise5);
console.log(`Cadena vacia ('${test5Exercise5}') => ${resultExercise5}`);
