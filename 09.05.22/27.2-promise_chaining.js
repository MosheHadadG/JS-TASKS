const makeAllCaps = function(array) {
  return new Promise((reslove, reject) => {
    const arrCapitalize = array.map((word) => {
      if(typeof word !== 'string') {
        reject('At least one word is not string! - promise 1 rejected');
      }
      else {
        return word.toUpperCase();
      }
    });
    reslove(arrCapitalize);
  })
}

const sortWords = function(array) {
  return new Promise((reslove, reject) => {
    if(array.length > 0) {
      array = array.sort();
      reslove(array)
    }
    else {
      reject('The array is empty! - promise 2 rejected')
    }
  })
}

const arrResolved = ['march', 'jan', 'feb', 'dec']
const arrRejected = ['march', 'jan', 22, 'dec']

makeAllCaps(arrResolved)
.then((array) => {
  console.log('promise 1 resloved')
  console.log(array)
  return sortWords(array)
})
.then((sortArr) => {
  console.log('promise 2 resloved')
  console.log(sortArr);
})
.catch((errMsg) => {
  console.log(errMsg)

});

