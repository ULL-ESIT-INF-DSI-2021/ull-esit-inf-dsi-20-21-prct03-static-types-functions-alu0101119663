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

const year1: number = 1997;
const year2: number = 1996;
const year3: number = 1900;
const year4: number = 2000;

const resultado1: boolean = isLeapYear(year1);
const resultado2: boolean = isLeapYear(year2);
const resultado3: boolean = isLeapYear(year3);
const resultado4: boolean = isLeapYear(year4);

console.log(`El año ${year1} es bisiesto? = ${resultado1}`);
console.log(`El año ${year2} es bisiesto? = ${resultado2}`);
console.log(`El año ${year3} es bisiesto? = ${resultado3}`);
console.log(`El año ${year4} es bisiesto? = ${resultado4}`);


