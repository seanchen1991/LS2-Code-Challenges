/*  For today's coding challenge your job is to write functions
 *  so that each function call works.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  const greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */
// to test this file cd into the directory where its found it in the command line and run node callBackPractice.js
// or you can copy and paste your functions into the Chrome console or JSBin for testing.
// console.log will be your best friend here!


const foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

// Write a function called firstItem that passes the first item of the given array to the callback function
const firstItem = (arr, cb) => {
  // write code here
};

// Write a function called getLength that passes the length of the array into the callback
const getLength = (arr, cb) => {
  // write code here
};

// Write a function called last which passes the last item of the array into the callback
// write code here

// Write a function called sumNums that adds two numbers and passes the result to the callback
const sumNums = (x, y, cb) => {
  // write code here
}

sumNums(5, 10, (sum) => {
  console.log(`The sum is ${sum}.`);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
const multiplyNums = (x, y, cb) => {
  // write code here
};

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
const contains = (arr, cb) => {
  // write code here
};

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

const removeDuplicates = (arr, cb) => {
  // write code here
};

removeDuplicates(foods, (uniqueFoods) => {

});

// Write a function called each that iterates over the provided array and passes the value and index into the callback.
const each = (arr, cb) => {

};

each(foods, (value, index) => {
  console.log(`${value} is at index ${index}.`);
});