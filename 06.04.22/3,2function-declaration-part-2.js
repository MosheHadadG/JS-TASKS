/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).

// function welcome() {
//   let welcome = 'Welcome to Appleseeds Bootcamp!';
//   return welcome;
// }

// My Answer
// Explicit Return
const welcomeExplicit = () => { 
  return 'Welcome to Appleseeds Bootcamp!' ;
}

// Implicit Return
const welcomeImplicit = () => 'Welcome to Appleseeds Bootcamp!';



// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

// My Answer
// Explicit Return
const powerExplicit = (a) => { 
  return Math.pow(a,2) ;
}

// Implicit Return
const powerImplicit = () => Math.pow(a,2);



// From function expressions to IIFE functions.

// const squareRoot = a => Math.sqrt(a);

// My Answer
function squareRoot(a) {
  let myNumber = a;
  let result = Math.sqrt(myNumber);
  return result;
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// My Answer
function randomNumbers(a,b) {
  let num1 = a;
  let num2 = b;
  let result = Math.random() * (num1 - num2) + num2;
  return result;
}