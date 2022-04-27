//* Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);

//! answer 1:
// this in global scop point to window object (global).


//* Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

//! answer 2:
// a. this in arrow function point to window object .
// b. change arrow function to other function (exp or dec)
// const myObj = {
//  name: "Timmy",
//  greet() {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

//* Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//  console.log(this);
// };

//! answer 3:
//this in function Outside object point to window object

//* Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//  console.log(this);
// };
// myFuncArrow();

//! answer 4:
// this in arrow function point to window object

//* Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// });

//! answer 5:
// a. this point to window object, beacuse this in this case in arrow function
// b. change arrow function to other function (exp or dec)
// document.querySelector(".element").addEventListener(function() {
//  console.log(this);
// });