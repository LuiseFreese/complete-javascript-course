"use strict";
/*
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (has DriversLicense) console.log("I can drive");

// function logger() {
//   console.log("My name is Luise");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} and ${oranges}`;
//   return juice;
// }

// fruitProcessor(5, 0);

// // declaration expression
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression

// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearsUntilRetirement(1991));

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


// functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with  ${applePieces} pieces of apple and ${orangePieces} of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1; // common in JS to tell that something doesn't make sense
  }
};
console.log(yearsUntilRetirement(1991, "Luise"));
console.log(yearsUntilRetirement(1970, "Max"));


// coding challenge 1 - part 2;

//create an arrow function

const DolphinScore1 = 124;
const DolphinScore2 = 23;
const DolphinScore3 = 71;

const KoalaScore1 = 65;
const KoalaScore2 = 54;
const KoalaScore3 = 49;

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(DolphinScore1, DolphinScore2, DolphinScore3));
//call the function for both teams
const koalaScore = calcAverage(KoalaScore1, KoalaScore2, KoalaScore3);
const dolphinScore = calcAverage(DolphinScore1, DolphinScore2, DolphinScore3);
//output the scores to the console
console.log(dolphinScore, koalaScore);
//Create a function 'checkWinner' that takes the average score of each team
//as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
//to the console, together with the victory points, according to the rule above
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`🐬 win!(${avgDolphins} vs. ${avgDolphins})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`🐨 win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`no one wins 💥`);
  }
};
//call the function
checkWinner(koalaScore, dolphinScore);
*/

//arrays

// //instead of declaring multiple independent variables
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
// //put them into [] which holds an array

const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// //another way is new Array
// const years = new Array(1991, 1984, 2008);
// //give me the first zero based element or the second zero based element

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
//give me the last element
console.log(friends[friends.length - 1]);
//replace the element at position 2 (zerobased) with Jay
friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2017 - 1991, "teacher", friends];
console.log(jonas);

//exercise

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// we want to calculate the age of the first, second and last element of the array without counting
const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge1(years[0]),
  calcAge1(years[1]),
  calcAge1(years[years.length - 1]),
];
console.log(ages);
