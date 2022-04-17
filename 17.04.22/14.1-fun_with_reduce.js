// 1. max
const grades = [88, 76, 65, 84, 92, 75, 58, 90];
const maxGrade = grades.reduce((max, currentVal) => {
  if(currentVal > max) {
    max = currentVal;
  }
  return max;
});

console.log(maxGrade);

// 2. sum of even numbers
const numbers = [2,3,5,6,8,21,44];
const sumOfEven = numbers.reduce((sum, currentVal) => {
  if(currentVal % 2 === 0){
    sum += currentVal;
  }
  return sum;
},0);

console.log(sumOfEven);

// 3. average
const grades1 = [88, 99, 95, 83, 74, 72, 67]
const avgGrades = grades1.reduce((avg, currentVal) =>  avg + currentVal ) / grades1.length;

console.log(avgGrades.toFixed(2));
