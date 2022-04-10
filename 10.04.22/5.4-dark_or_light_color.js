const darkOrLight = function(color) {
  switch (color) {
    case "pink":
    case "yellow":
    case "orange":
      return "light color";
      break;
    
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
      break;
    
    default:
      return "Unknown color";
  }
}


console.log(darkOrLight("yellow"));
console.log(darkOrLight("brown"));
console.log(darkOrLight("black"));