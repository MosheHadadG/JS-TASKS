const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },
  ],
  cashRegister: 200
};

// 1
function getCandy(candyStore, id) {
  const findCandy = candyStore.candies.find(function (candy) {
    return candy.id === id;

  });
  return findCandy;
}
console.log(getCandy(candyStore, "5hd7y"));

// 2
function getPrice(candyStore, id){
  const findCandy = candyStore.candies.find(function(candy){
    return candy.id === id;
  });
  return findCandy.price;
}
console.log(getPrice(candyStore, "as12f"));

// 3
function addCandy(candyStore, id, name, price){
  newCandyObj = {
    name: name,
    id: id,
    price: price,
    amount: 1
  }
  candyStore.candies.push(newCandyObj);
  console.log(candyStore);
}
addCandy(candyStore, "jk239", "M&M's", 12);

// 4
function buy(candyStore, id){
  const findCandy = candyStore.candies.find(function(candy){
    return candy.id === id;
  });
  findCandy.amount -= 1;
  candyStore.cashRegister += findCandy.price;
  console.log(candyStore);
}
buy(candyStore, "5hd7y");
  
