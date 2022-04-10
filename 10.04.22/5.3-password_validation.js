// 1
const passwordValidation1 = function(password) {
  if(password.length > 7) {
    return "Strong";
  }
  else {
    return "Weak";
  }

}

// 2
const passwordValidation2 = function(password) {
  let validation = password.length > 7 ? "Strong" : "Weak";
  return validation;

}

console.log(passwordValidation1("123456789"));
console.log(passwordValidation2("123456"));

