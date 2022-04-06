let avgJhonTeam;
let avgMikeTeam;
let avgMaryTeam;
const highestAverageScore = function (johnTeamScore, mikeTeamScore, maryTeamScore) {
  //  Calculate the average
  avgJhonTeam = ((johnTeamScore[0] + johnTeamScore[1] + johnTeamScore[2]) / 3);
  avgMikeTeam = ((mikeTeamScore[0] + mikeTeamScore[1] + mikeTeamScore[2]) / 3);
  avgMaryTeam = ((maryTeamScore[0] + maryTeamScore[1] + maryTeamScore[2]) / 3);

  if (avgJhonTeam > avgMikeTeam && avgJhonTeam > avgMaryTeam) {
    console.log(`The winner is Jhon's team - average: ${avgJhonTeam}`)
  }
  else if (avgMikeTeam > avgJhonTeam && avgMikeTeam > avgMaryTeam) {
    console.log(`The winner is Mike's team - average: ${avgMikeTeam}`)
  }
  else if (avgMaryTeam > avgJhonTeam && avgMaryTeam > avgMikeTeam) {
    console.log(`The winner is Mary's team - average: ${avgMaryTeam}`)

  }
  else {
    console.log(`The result is a draw between the teams.`);
  }
}
// Mike win
highestAverageScore([89, 120, 103], [116, 94, 123],[89, 120, 103])
// jhon win
highestAverageScore([120, 120 , 102], [116, 94, 123],[116, 92, 123])
// draw between the teams.
highestAverageScore([120, 120 , 102], [120, 120, 102],[120, 120, 102])
// Mary win
highestAverageScore([120, 120 , 102], [120, 120, 102],[125, 120, 102])



