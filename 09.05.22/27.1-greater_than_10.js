const greaterThanTen = function(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve('greater than 10');
    }
    else {
      reject('less than 10');
    }
  });
}

greaterThanTen(15)
.then(msg => console.log(msg))
.catch((err) => console.log(err));