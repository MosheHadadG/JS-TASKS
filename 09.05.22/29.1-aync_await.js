const getIDs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });
}

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

// with then and catch:
// getIDs()
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//   })
//   .catch((error) => {
//     console.log("It is an error!");
//   });

// async await
//*My answer: 
async function getIdGetRecipe() {
  debugger;
  try {
    const ids = await getIDs();
    console.log(ids)
    const recipe = await getRecipe(ids[2])
    console.log(recipe)
  }
  catch(error) {
    console.log("It is an error!");
  }

}
getIdGetRecipe()

