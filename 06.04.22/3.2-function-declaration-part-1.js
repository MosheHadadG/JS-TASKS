/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions

// function welcome() {
//   let welcome = 'Welcome to Appleseeds Bootcamp!';
//   return welcome
// }

// My Answer
const welcome = () => "Welcome to Appleseeds Bootcamp!";


// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

// My Answer
const power = a => Math.pow(a,2);

// function add(a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// }

// My Answer
const add = (a, b = 5) => a + b;


// From function expressions to function declarations

// const hello = () => "Hello!";

// My Answer
function hello() {
  let sayHello = "Hello!"
  return sayHello;
}

// const squareRoot = a => Math.sqrt(a);

// My Answer
function squareRoot(a) {
  let myNumber = a;
  let result = Math.sqrt(a);
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


