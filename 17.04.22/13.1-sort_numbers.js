const numbers = [1, -5, 666, 2, 400, 11];


// slice for copy
// 1 descending to ascending order
const descToAscOrder = numbers.slice().sort((a, b) => a - b);

// 2 ascending to decending order.
const ascToDescOrder = numbers.slice().sort((a, b) => b - a);

// 1
console.log(descToAscOrder);
// 2
console.log(ascToDescOrder);