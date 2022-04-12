const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];

const compareArr = function(food, food1) {
  let sameItems = [];
  for(let topValue of food) {
    for(let bottomValue of food1) {
      if(topValue === bottomValue) {
        sameItems.push(bottomValue);
      }
    }
  }
  if (sameItems.length == 0) {
    return false;
  }
  else {
    return sameItems;
  }
}

compareArr(food, food1);