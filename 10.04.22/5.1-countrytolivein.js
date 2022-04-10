const countryToLiveIn = function (language, isIsland, population, country) {
  if (language === "English" && population < 50 && isIsland === false) {
    console.log(`You should live in ${country}.`);
  }
  else {
    console.log(`${country} does not meet your criteria'`);
  }
}

countryToLiveIn('English', false, 20, 'Finland');