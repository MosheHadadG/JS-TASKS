// 1

const isString = (checkIfStr, callBack) => {
  if (typeof(checkIfStr) === 'string') {
    printStr(checkIfStr);
  }
}

const printStr = (str) => {
  console.log(str);
}

// String 
isString("something",printStr);
// Number
isString(4,printStr);

// 2
const firstWordUpperCase = (str, callBack) => {
  const arr = str.split(``);
  arr[0] = arr[0].toUpperCase();
  let newStr = arr.join(``);
  let dash = dashes(newStr);
  console.log(dash);
}
const dashes = (str) => {
  return str.replaceAll(``, `-`);
}

firstWordUpperCase("something2", dashes);


// 4

const isStr = (str) => {
  if(typeof(str) === "string") {
    return true;
  }
  else {
    return false;
  }

}
const helloName = (whatYourName, isStr) => {
  if (isStr(whatYourName)) {
    console.log(`Hello ${whatYourName}!`)
  }
  else {
    console.log('invaild')
  }
  
}

helloName("Moshe", isStr)
