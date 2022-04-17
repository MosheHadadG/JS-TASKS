const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a. 1
const descToAscOrder = foods.slice().sort();

// a. 2
const ascToDescOrder = descToAscOrder.slice().sort((a, b) => {
  if (a < b) {
    return 1;
  }
  else {
    return -1;
  }
});

console.log(descToAscOrder);
console.log(ascToDescOrder);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
 ];

 // b.1
 const descToAscWithUpper = foodsWithUpperCase.slice().sort((a, b) => {
   a = a.toLowerCase();
   b = b.toLowerCase();
   if(a > b){
     return 1;
   }
   else {
     return -1;
   }
 });

// b.2
 const ascToDescWithUpper = foodsWithUpperCase.slice().sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a < b){
    return 1;
  }
  else {
    return -1;
  }
});


 console.log(descToAscWithUpper)
 console.log(ascToDescWithUpper)

 
 const words = ["apple", "supercalifragilisticexpialidocious",

 "hi", "zoo"];

// c.1
 const longestToShortSort = words.sort((a, b) => b.length - a.length);

 console.log(longestToShortSort);
