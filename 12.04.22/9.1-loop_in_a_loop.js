const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for(let i = 0; i < listOfNeighbours.length; i++) {
  const oneArr = listOfNeighbours[i];
  for(let j = 0; j < oneArr.length; j++) {
    console.log(`Neighbour: ${oneArr[j]}`)
  }
}