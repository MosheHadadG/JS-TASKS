const population = [109, 97, 102, 114];

// My function in 3.3-declarations vs expressions
function percentageOfWorld1(population) {
  const worldPopulation = 7900
  let result = ((population / worldPopulation) * 100);
  return result.toFixed(1);
}


const populationPercentages = function (population) {
  let percentages = []
  for(let i = 0; i < population.length; i++) {
    percentages.push(percentageOfWorld1(population[i]));
  }
  return percentages;

}
console.log(populationPercentages(population));