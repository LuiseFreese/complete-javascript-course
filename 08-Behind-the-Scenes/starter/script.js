'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age} years old, born in ${birthYear}`;
    console.log(output);
  }

  printAge();

  console.log(firstName);
  return age;
}
const firstName = 'Jonas';
calcAge(1991);


// console.log(me);
// console.log(job);
console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;
console.log(addDecl(2, 3));
function addDecl(a, b) {
  return a + b;
}
console.log(addExpr(2, 3));
const addExpr = function (a, b) {
  return a + b;
};
console.log(addArrow(2, 3));
const addArrow = (a, b) => a + b;
*/
// delete all shoppingcarts that are empty

// console.log(NumProducts);
// if (!NumProducts) deleteShoppingCart();
// var numProduct = 10;

// function deleteShoppingCart() {
//   console.log('All items deleted');
// }

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991
//   calcAge: function () {
//     console.log(this);
//     console.log(2037-this.year);
//   };
// }

//primitive types
// let lastName = 'Williams';
// let oldname = lastName;
// lastname = 'Davis';
// console.log(lastname, oldname);

// //refernce types
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);

//both the same, because when we attempted to copy, it didn't create a new object in the heap.

//copying objects

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// const jessicaCopy = Object.assign({}, jessica);
// jessicaCopy.lastName = 'Davis';

const jessicaCopy = Object.assign(jessica, { lastName: 'Davis' });

console.log('this is Jessica Original: ', jessica);
console.log('this is Jessica Copy: ', jessicaCopy);
