// 1
const doubleValues = function(arrNum) {
  const doubled = arrNum.map(function(n) {
    return n * 2
  });
  return doubled;
}

console.log(doubleValues([2,4,6,10,20]));

// 2
const onlyEvenValues = function(arrNum) {
  let newArr = [];
  arrNum.forEach(function(num) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
}
console.log(onlyEvenValues([2,3,5,10,20,41,58,100,101]));

// 3
const showFirstAndLast = function(arrStr) {
  let newArr = [];
  arrStr.forEach(function(str){
    if(typeof(str) === "string"){
      newArr.push(str[0] + str[str.length - 1]);
    }
  });
  return newArr;
}
console.log(showFirstAndLast(["something", "read", 5, 8, "Book", "Moshe", "Hadad"]))

// 4
const vowelCount = function(str) {
  let vowelLetters = ["a", "e", "i", "o", "u", "y", "w"]
  let obj = {}
  str = str.toLowerCase().split('');
  vowelLetters.forEach(function(vowel) {
    str.forEach(function(letter){
      if(vowel === letter) {
        if(obj[letter] !== undefined) {
          obj[letter] += 1;
        }
        else obj[letter] = 1;
      }
    });
  })
  return obj;
}
console.log(vowelCount("Let mE TEll You sOmthing"));

// 5
const capitalize = function(str) {
  str = str.split('');
  const cap = str.map(function(letter){
    return letter.toUpperCase();
  });
  return cap.join('');
}

console.log(capitalize("book"))

// // 6
// const shiftLetters = function()
