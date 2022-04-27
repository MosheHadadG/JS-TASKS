// 1 - My Filter Method
Array.prototype.myFilter = function(callback) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    const index = i
   if(callback(item, index)) {
     newArr.push(this[i]);
   }
   else {
     continue;
   }
  }
  return newArr;
}

const evenNums = [2,3,4,5,6,7].myFilter(function(num) {
  return num % 2 === 0;
});

console.log(evenNums)

// 2 - My Find Method
Array.prototype.myFind = function(callback) {
  
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    const index = i
    if (callback(item, index)) {
      return this[i];
    }
    else {
      continue;
    }
  }
}

const findMoshe = ["Yossi","Avi", "Or", "Daniel", "Moshe", "Shir"].myFind(function(name) {
  return name === "Moshe";
});

console.log(findMoshe)

// 3 - My Reduce Method

Array.prototype.myReduce = function(callback) {
  let counter = 0;
  for (let i = 1; i < this.length; i++) {
    const currentValue = this[i];
    const acc = this[i - 1]
    result = callback(acc, currentValue);
    counter += result;
    i++;
  }
  return counter;
}
const sum = [5,10,15,20,25,30].myReduce(function(total, num) {
  return total + num;
});

console.log(sum)