// in array
const boom = function(n) {
  let i = 1;
  let allNum = []
  while(i <= n) {
    allNum.push(i)
    i++;
  }
  for(let j = 0; j < allNum.length; j++) {
    if(allNum[j] % 7 === 0 && allNum[j] === 7) {
      allNum[j] = "Boom-Boom"
    }
    else if(allNum[j] % 7 === 0) {
      allNum[j] = "Boom"
    }
  }
  console.log(allNum)
}


// Check
boom(50);

