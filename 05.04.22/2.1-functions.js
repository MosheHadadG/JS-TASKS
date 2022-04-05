const describeCountry = function(country,population,capitalCity) {
  let sentece = `${country} has ${population} and its capital city is ${capitalCity}`;
  return sentece;
}

console.log(describeCountry("Israel","9 million people", "Jerusalem"));
console.log(describeCountry("Finland","6 million people", "Helsinki"));
console.log(describeCountry("Denmark","5.8 million people", "Copenhagen"));