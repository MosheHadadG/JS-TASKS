const arr = [1,7,3,0,-5,7,3,9];
// 1
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2
const arrayLength = function(arr) {
  let length = 0;
  for(let i = 0; i < arr.length; i++) {
    length++;
    
  }
  return length;
}

console.log(arrayLength(arr));

// 3

const arraySum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arraySum(arr));

// 4
const arrayMulti = function(arr) {
  let multi = arr[0];
  for(let i = 1; i < arr.length; i++) {
    multi *= arr[i];
  }
  return multi;
}
console.log(arrayMulti(arr));
