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
*/

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
//as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
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
