const gradeAssigner = function (numberScore){
  if (numberScore <= 64) {
    return "F"
  }
  else if (numberScore <= 69) {
    return "D"
  }
  else if (numberScore <= 79) {
    return "B"
  }
  else if (numberScore <= 100) {
    return "A"
  }
}

// Check
console.log(gradeAssigner(60))
console.log(gradeAssigner(66))
console.log(gradeAssigner(75))
console.log(gradeAssigner(85))
console.log(gradeAssigner(98))
