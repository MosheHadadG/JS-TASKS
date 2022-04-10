const people = ["Greg", "Mary", "Devon", "James"];

// 1
for(let i = 0; i < people.length; i++) {
  // console.log(people[i]);
}

// 2 remove Greg
people.shift();
// console.log(people);

// 3 remove James
people.pop();
// console.log(people);

// 4 add Matt to the front of the array
people.unshift('Matt');
// console.log(people);

// 5 add my name to the end of the array
people.push("Moshe");
// console.log(people);

// 6
for(let i = 0; i < people.length; i++) {
  // console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 7
let withoutMaryMatt = people.slice(2);
// console.log(withoutMaryMatt);

// 8 IndexOf Mary
// console.log(people.indexOf("Mary"));


// 9 IndexOF Foo (not exist)
// console.log(people.indexOf("Foo"));

// 10
//  the people variable with the value you started with
people.splice(0,people.length);
people.push("Greg", "Mary", "Devon", "James");
// remove "Devon" from the array and add "Elizabeth" 
people.splice(2,1,"Elizabeth");
console.log(people)


