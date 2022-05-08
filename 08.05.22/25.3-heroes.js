const wonderWoman = {
  name: "Diana Prince"
 }
 const batman = {
  name: "Bruce Wayne"
 }
 const superHeroes = [wonderWoman, batman];

 function printName() {
  console.log(`my name is ${this.name}`);
 }

 function printHeroes(heroes, printFunc) {
  heroes.forEach((heroObj) => {
    let print = printFunc.bind(heroObj);
    print();
  })

  
 }

 printHeroes(superHeroes, printName);