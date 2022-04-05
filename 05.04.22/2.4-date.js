const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const dateToday = function(){
  let sentece = `Today is ${days[date.getDay()]} the ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
  return sentece;
}

console.log(dateToday());