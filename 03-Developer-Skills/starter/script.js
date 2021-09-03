// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// const x = 23;

// console.log();

// const calcAge = birthyear => 2037 - birthyear;

// console.log(calcAge(1991));
// console.log(calcAge(1978));
// console.log(calcAge(1990));

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
//Keep in mind that sometimes there might be a sensor error."

//1 ) understand the problem
// - what is the amplitude? It is the difference between the highest and the lowest value
// how do I calculate the amplitude (highest value - lowest value)
// how do I eliminate the error string?
// loop over this array, break at string
// write all valueas that are numbers into a new array

// const newArray = [];
// for (let i = 0; i <= temperatures.length; i++) {
//   if (typeof temperatures[temp] == 'string') continue;
//   console.log(temperatures);
//   return (newArray = [temperatures[temp]]);
//   //   const highestValue = console.log(Math.max(temperatures[temp]));
// }

// for (let temp = 0; temp <= temperatures.length; temp++) {
//   if (typeof temperatures[temp] == 'string') continue;
//   const lowestValue = console.log(Math.min(temperatures[temp]));
// }

// const amplitude = highestValue - lowestValue;

// console.log(amplitude);

// console.log('---ONLY STRINGS---')
// for (let i = 0; i < jonas.length; i++) {
//   //we only want to print to console elements that are strings.
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] === 'number') {
    // console.log(typeof temperatures[i]);
    console.log(Math.max.temperatures);
  }
  //   const maxValue = Math.max(temperatures);
  //   const minValue = Math.min(temperatures);
  //   const amplitude = maxValue - minValue;
  //   console.log(amplitude);
}


// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do? Ignore it

// 2) Breaking up into sub-problems
// - How to ignore errors? ✅
// - Find max value in temp array ✅
// - Find min value in temp array ✅
// - Subtract min from max (amplitude) and return it ✅
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(min, max);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?
//NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
// -merge two arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C fix the bug
    // value: Number(prompt('degree celcius')),
    value: 10,
  };
  //B FIND the bug
  // console.log(measurement.value);
  // // console.warn(measurement.value);
  // // console.error(measurement.value);

  // console.log(measurement);
  // console.log(typeof measurement.value);
  // console.table(measurement);

  const kelvin = parseInt(measurement.value) + 273;
  return kelvin;
};
// A identify the bug
console.log(measureKelvin());
//using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// 1. transform the array to a string
// myTemps = [17, 21, 23];
// const printForeCast = function (myTemps) {};
// printForeCast([17, 21, 23]);
// console.log();

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}C ... ${data1[1]}C... ${data1[2]}C`);

const printForeCast = function (arr) {
  let str = '';
  for (let i = 0; i < data1.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log(`...` + str);
};
printForeCast(data1);

//this would be hard coded.

//how long is the array? answer: data1.length

// we could loop over the length of the array 💡

// for (let i = 0; i <= data1.length; i++) {
//   let ourText = `data1[i]+`;
// }
*/
