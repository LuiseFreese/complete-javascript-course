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



const friends = ["Michael", "Steven", "Peter"];

//add element to the end
friends.push("Jay ");
console.log(friends);
//add elements to the beginning
friends.unshift("John");
// remove last element
friends.pop;
friends.shift;
console.log(friends);
//removes first element from array
friends.shift();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf("Steven"));

console.log(friends.includes("Bob"));


//coding challenge

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Data 1: Test for bill values 275, 40 and 430

// const bill = 275;
// bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
// console.log(
//   `the bill was ${bill}, the calculated tip was ${tip} and the total value is ${
//     bill + tip
//   }`
// );

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
calcTip(275);

const bills = [125, 555, 44];
// const tips = [calcTip(125), calcTip(555), calcTip(44)];
//or
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44)];
//or

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totals);

// objects

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

console.log(interestedIn);

console.log(jonas[interestedIn]);

// challenge write "Jonas has 3 friends, and his best friends is called Michael"
// find jonas, 3 and Michael
console.log(
  jonas.firstName +
    " has " +
    jonas.friends.length +
    " friends, and his best friend is called " +
    jonas.friends[0]
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    console.log(this.calcAge);
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(this);
console.log(this);

//challenge

//"Jonas is a 46-year old teacher, and he has a/no drivers license"

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// challenge #3
//1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!
//4. bonus Luise: round the BMI to the next integer

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(john.mass, john.height);
console.log(john.calcBMI());
console.log(john.bmi);

if (john.bmi < mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${Mark.calcBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is lower than ${
      mark.fullName
    }'s ${mark.calcBMI()}`
  );
}
*/
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

//loop over an array
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// console.log(jonas[0])
// console.log(jonas[1])
// console.log(jonas[2])
// console.log(jonas[3])
// console.log(jonas[4])
//jonas[5] does not exist

// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// }

// now replace the hardcoded value of the length of the array with a dynamic one
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
// }
// //create an array with a for loop

// const types = []; // create an empty array

// //now l
// for (let i = 0; i < jonas.length; i++) {
//   //reading the array
//   console.log(jonas[i]);
//   // filling types Array

//   types[i] = typeof jonas[i];
// }
// //logging filled array to the console
// console.log(types);

// // // yet another example

// const years = [1991, 2007, 1069, 2020];

// // we want to calculate the ages for these birthYears and store them in an array

// // first create an empty array

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log('---ONLY STRINGS---')
// for (let i = 0; i < jonas.length; i++) {
//   //we only want to print to console elements that are strings.
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < jonas.length; i++) {
  //we only want to print to console elements until we found a number
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
