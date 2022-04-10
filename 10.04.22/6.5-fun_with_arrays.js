// 1
let array1 = new Array(100);
array1.fill(0,1,100);
console.log(array1);

// 2
let array2 = Array.from(array1.keys(),x => x + 1);
console.log(array2)

// 3
const toObj = Object.assign({}, array2);
console.log(toObj)

// 4
const toArr = Object.keys(toObj);
console.log(toArr)

// 6
const copyArr = [...array2];
copyArr.push(1);

// Check if push to array effect only in copy array.
// Copy array
console.log(copyArr)
// Old array
console.log(array2)



