/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
// learn to use console.log
console.log("Jonas");
console.log(23);
// declare a variable
let firstName = "Matilda";
// pass in a variable into the console.log
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
//convention camelCase notation, ALLCAPS only for constants, no special characters other than _ and $, be descriptive
let myFirstJob = "Programmer";
console.log(myFirstJob);

// assignment values and variables
let country = "Germany";
let continent = "Europe";
let population = 82000000;
console.log(country);
console.log(continent);
console.log(population);
//primitives:
//number decimal and integers
//string text '' or ""
//boolean true or false
//undefined means empty value
//null means empty value as well
//BigInt (for numbers to big than for Number )
//important: value have types, not variables

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof "Luise");
console.log(typeof 23);
console.log(typeof javascriptIsFun);
// dynamic typing: reassign a value to a variable
javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(year);
// null is not an object 💡
console.log(typeof null);

//assignment Data types

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let age = 30;
//reassign the variable
age = 31;
console.log(age);
//use const if your variable won't change in the future

const birthYear = 1991;
//birthYear = 1990; // leads to uncaught TypeError, assignment to constant variable
// const can't be mutated/reassigned
//const can't be empty, because you need an initializer
//use const, unless you know that the value of the variable will change in the future
// avoid var NEVER EVER USE IT
var job = "programmer";
job = "teacher";

//even works without let or const - but don't!
lastName = "Freese";
console.log(lastName);


//operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// you can log more than one value with console.jog()
console.log(ageJonas, ageSarah);
//log several operations
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 **3 means 2 to the power of 3 + 2*2*2 = 8
console.log(ageSarah + ageJonas);
//concatenate with plus
const firstName = "Luise";
const lastName = "Freese";
console.log(firstName + " " + lastName);
// = is an operator by itself: first it will calculate 10+6, then it wil assign the result to the variable x
let x = 10 + 6;
console.log(x);
x += 10; // x = x +10 =26
x *= 4; // x + x *4 = 104
x++; // x + x+1
x--; // x-1
x--; // x-1
console.log(x);
//comparison operator
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
//math first, then comparison
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


// Coding challenge 1
// store mass and height of Mark and John in variables
let massMark;
let massJohn;
let heightMark;
let heightJohn;

//assign test data 1
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

// // assign test data 2
// massMark = 95;
// massJohn = 85;
// heightMark = 1.88;
// heightJohn = 1.76;

// calculate the BMI

let bMIMark = massMark / heightMark ** 2;
console.log(bMIMark);
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

// create a boolean variable

let markHigherBmi = bMIMark > bmiJohn;
console.log(markHigherBmi);

const firstName = "Jonas";
const job = "teacher";
const birthyear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthyear) + " year old " + job + " .";
console.log(jonas);
// template literals `` are easy for multiple line strings
const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🤓");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years 💡`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// Coding Challenge 2:

// Coding challenge 1
// store mass and height of Mark and John in variables
let massMark;
let massJohn;
let heightMark;
let heightJohn;

//assign test data 1
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

// // assign test data 2
// massMark = 95;
// massJohn = 85;
// heightMark = 1.88;
// heightJohn = 1.76;

// calculate the BMI

let bMIMark = massMark / heightMark ** 2;
console.log(bMIMark);
let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

if (bMIMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console(`John's BMI is higher than Mark's!`);
}
//Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!
if (bMIMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console(`John's BMI is higher than Mark's!`);
}

//Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!

if (bMIMark > bmiJohn) {
  console.log(`Mark's BMI (${bMIMark}) is higher than John's (${bmiJohn})!`);
} else {
  console(`John's BMI (${bmiJohn}) is higher than Mark's (${bMIMark})!`);
}

// create a boolean variable

// let markHigherBmi = bMIMark > bmiJohn;
// console.log(markHigherBmi);

//type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

//type coercion
console.log("I'm " + 23 + " years old. ");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" > "18");

guess the outcome
let n = "1" + 1;
n = n - 1;

console.log(n);

// 5 falsy values
0, "", undefined, null, NaN;

//everything else is truthy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

// Js will tru to convert money into a boolean
const money = -1000;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

// check if variable is declared

let height = 0;
if (height) {
  console.log("Yay defined");
} else {
  console.log("meh, height is UNDEFINED");
}

// const age = 18;
// if (age === 18) console.log("You just became an adult");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
if (favourite === 23) {
  console.log("yay cool!");
}

if (favourite !== 23) console.log("Why not 23??");


const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");

const isTired = false; //C
console.log(hasGoodVision || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}


//coding challenge 3
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Calculate the average score for each team, using the test data below
//Test data 1
const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);

// // Test data 2

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// // Test data 3
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 106) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// // Compare the team's average scores
// if (averageScoreDolphins > averageScoreKoalas) {
//   console.log("🐬 won");
// } else if (averageScoreDolphins === averageScoreKoalas) {
//   console.log("it's a draw");
//   0;
// } else {
//   console.log("🐨 won");
// }

//bonus 1 and bonus 2

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log("🐬 won");
} else if (
  averageScoreDolphins > averageScoreKoalas &&
  averageScoreDolphins < 100
) {
  console.log("Koalas win");
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins >= 100
) {
  console.log("it's a draw- both win");
  0;
} else {
  console.log("no one wins");
}

// yay made it!


const day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//   //break;
//   case "tuesday":
//     console.log("tidy up all files");
//     console.log("Go to coding meetup");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("create content");
//     break;
//   case "friday":
//     console.log("review");
//     break;
//   default:
//     console.log("not a valid day");
// }

if (day === "monday") {
  console.log("monday activity");
} else if (day === "tuesday" || day === "wednesday") {
  console.log("midweek activity");
} else if (day === "thursday") {
  console.log("thursday activity");
} else {
  console.log("weeeekend");
}
*/

//ternary operator

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink wine");

const drink = age >= 18 ? "wine" : "water";

console.log(`I would like to drink ${age >= 18 ? "wine" : "water"}`);
