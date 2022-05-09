const getJokeBtn = document.querySelector('button');
const jokeTitleH1 = document.querySelector('h1');
const jokeP = document.querySelector('p');

getJokeBtn.addEventListener('click', () => {
  fetch('https://api.jokes.one/jod')
  .then((responseData) => {
    console.log(responseData)
    return responseData.json();
  })
  .then((jsonData) => {
    console.log(jsonData)
    const jokesObj = jsonData.contents.jokes;
    jokesObj.forEach((jokeObj) => {
      const jokeTitle = jokeObj.joke.title;
      const jokeText = jokeObj.joke.text;
      jokeTitleH1.innerText = `${jokeTitle}`;
      jokeP.innerText = `${jokeText}`;
    })
  })
  .catch((err) => {
    console.log('sorry the page not found')
  })
})
