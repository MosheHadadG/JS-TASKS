const lengthOfStrings = function(arr) {
  newArrLength = [];
  for(let i = 0; i < arr.length; i++) {
    let lengthStr = arr[i].length;
    newArrLength.push(lengthStr);
  }
  return newArrLength;
}

console.log(lengthOfStrings(["boo", "doooo", "hoo","ro"]));