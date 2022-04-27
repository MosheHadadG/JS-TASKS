function Pokemon(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  }

// 1
const pikachu = new Pokemon('Pikachu', 'ELECTRIC', ['Thunder Shock', 'Double-Edge', 'Iron Tail', 'Electro Ball']);
const pidgeotto = new Pokemon('Pidgeotto', 'FLYING', ['Keen Eye', 'Tangled Feet', 'Big Pecks']);
const hypno = new Pokemon('Hypno', 'PSYCHIC', ['Insomnia', 'Forewarn', 'Inner Focus']);

// 2
// A callPokemon
Pokemon.prototype.callPokemon = function() {
  console.log(`I choose you ${this.name}`);
}
// B attack
Pokemon.prototype.attack = function() {
  console.log(`${this.name} used ${this.attackList[1]}`);
}


//* Pikachu
pikachu.callPokemon();
pikachu.attack();

//* Pidgeotto 
pidgeotto.callPokemon();
pidgeotto.attack();

//* Hypno 
hypno.callPokemon();
hypno.attack();