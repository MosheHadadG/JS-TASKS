const lengthOfStrings = function(arr) {
  let newArrLength = []; 
  let i = 0
  while(i < arr.length) {
    let lengthStr = arr[i].length;
    newArrLength.push(lengthStr);
    i++;
  }
  return newArrLength;
}

console.log(lengthOfStrings(["boo", "doooo", "hoo","ro"]));