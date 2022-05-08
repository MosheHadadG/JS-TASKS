const hero = {
  health: 5,
  power: 68,
  getStrength: function(){
  if (this.health <= 5){
  return this.power - 10;
  } else return this.power;
  }
 }
 function whoIsStronger(getStrength){
  const myStrength = 82;
  console.log(getStrength())
  if (getStrength() < myStrength){
  return "I am stronger";
  } else return "You are stronger";
 }
const whoIsStrongerBind = whoIsStronger(hero.getStrength.bind(hero));
console.log(whoIsStrongerBind)

//*1. problem in  invoke getStrength(), (this) reffering to the global object instead of hero object.
