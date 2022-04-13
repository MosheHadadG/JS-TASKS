const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
 ];

// 1
const nameArr = function(data) {
  let names = [];
  data.forEach(function(obj){
    names.push(obj.name);
  });
  return names;
}
console.log(nameArr(data));

// 2
const beforeNineties = function(data) {
  let newArr = []
  data.forEach(function(obj) {
    let year = obj.birthday.split('-')[2];
    if(parseInt(year) < 1990) {
      newArr.push(obj);
    }
  });
  return newArr;
}
console.log(beforeNineties(data));

// 3
const  differentFoods = function(data) {
  let objDifferntFoods = {}
  let foodsArr = []
  data.forEach(function(obj) {
    let meats = obj.favoriteFoods.meats;
    let fish = obj.favoriteFoods.fish; 
    let foods = meats.concat(fish);
    foodsArr = foodsArr.concat(foods);
  });

  foodsArr.forEach(function(food){
    if(objDifferntFoods[food] !== undefined) {
      objDifferntFoods[food] += 1;
    }
    else {
      objDifferntFoods[food] = 1;
    }
  });
  return objDifferntFoods;
}
console.log(differentFoods(data));