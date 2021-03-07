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

let test1Exercise6: string = "3-598-21507-X";
let test2Exercise6: string = "359821507X";
let test3Exercise6: string = "58-88-88";
let test4Exercise6: string = "8";

let resExercise6: boolean = isValidISBN(test1Exercise6);
console.log(`El ISBN ${test1Exercise6} es valido? -> ${resExercise6}`);

resExercise6 = isValidISBN(test2Exercise6);
console.log(`El ISBN ${test2Exercise6} es valido? -> ${resExercise6}`);

resExercise6 = isValidISBN(test3Exercise6);
console.log(`El ISBN ${test3Exercise6} es valido? -> ${resExercise6}`);

resExercise6 = isValidISBN(test4Exercise6);
console.log(`El ISBN ${test4Exercise6} es valido? -> ${resExercise6}`);