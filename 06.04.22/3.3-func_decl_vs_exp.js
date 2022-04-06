function percentageOfWorld1(population) {
  const worldPopulation = 7900
  let result = ((population / worldPopulation) * 100);
  return result.toFixed(1);
}

let chinaPopulation = 1441;
let unitedStatesPopulation = 329;
let israelPopulation = 9;

console.log(`China has 1441 million people, so it's about ${percentageOfWorld1(chinaPopulation)}% of the world population.`)
console.log(`United States has 329 million people, so it's about ${percentageOfWorld1(unitedStatesPopulation)}% of the world population.`)
console.log(`Israel has 9 million people, so it's about ${percentageOfWorld1(israelPopulation)}% of the world population.`)


// function expression
const percentageOfWorld2 = (population) => (population / 7900 * 100).toFixed(1);

console.log(`China has 1441 million people, so it's about ${percentageOfWorld2(chinaPopulation)}% of the world population.`)
console.log(`United States has 329 million people, so it's about ${percentageOfWorld2(unitedStatesPopulation)}% of the world population.`)
console.log(`Israel has 9 million people, so it's about ${percentageOfWorld2(israelPopulation)}% of the world population.`)
