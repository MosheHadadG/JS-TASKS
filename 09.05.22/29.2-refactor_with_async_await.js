const getJokeBtn = document.querySelector('button');
const jokeTitleH1 = document.querySelector('h1');
const jokeP = document.querySelector('p');

getJokeBtn.addEventListener('click', () => {
  const data = fetch('https://api.jokes.one/jod');
  getJsonAndShow(data);
})


async function getJsonAndShow(data) {
  try {
    const responseData = await data;
    console.log(responseData);
    const jsonData = await responseData.json();
    console.log(jsonData);
    const jokesObj = jsonData.contents.jokes;
    jokesObj.forEach((jokeObj) => {
      const jokeTitle = jokeObj.joke.title;
      const jokeText = jokeObj.joke.text;
      jokeTitleH1.innerText = `${jokeTitle}`;
      jokeP.innerText = `${jokeText}`;
    })
  }
  catch(error) {
    console.log('sorry the page not found');
  }
}
