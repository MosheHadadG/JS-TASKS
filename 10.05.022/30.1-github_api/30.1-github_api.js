const boxProfile = document.querySelector('.boxProfile');
const searchUser = document.querySelector('#searchUser');
const searchInput = document.querySelector('input');
const notFound = document.querySelector('#notFound')

function searchUserEvent(event) {
  event.preventDefault();
  const userNameInput = searchInput.value
  boxProfile.innerHTML = '';
  connectToApi(userNameInput)
}

searchUser.addEventListener('submit', searchUserEvent);
searchInput.addEventListener('focus', () => {
  notFound.innerText = '';
})


//! Then & Catch
// function connectToApi(userName) {
//   const apiUrl = `https://api.github.com/users/${userName}`
//   fetch(apiUrl)
//     .then((response => {
//       if (!response.ok) {
//         notFound.innerText = 'User not found'
//         throw new Error(`Status code Error: ${response.status}`)
//       }
//       else {
//         console.log(response)
//         return response.json()
//       }
//     }))
//     .then((data => {
//       console.log(data)
//       const name = data.name;
//       const avatarImg = data.avatar_url;
//       const publicRepos = data.public_repos;
//       const profileUrl = data.html_url;
//       createCard(name, avatarImg, publicRepos, profileUrl)
//       searchInput.value = '';
//     }))
//     .catch(error => {
//       console.log('Something went wrong with fetch!');
//       console.log(error);
//     })
// }

//! Async await
async function connectToApi(userName) {
  const apiUrl = `https://api.github.com/users/${userName}`
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      notFound.innerText = 'User not found';
      throw new Error(`Status code Error: ${response.status}`);
    }
    else {
      const data = await response.json();
      const name = data.name;
      const avatarImg = data.avatar_url;
      const publicRepos = data.public_repos;
      const profileUrl = data.html_url;
      createCard(name, avatarImg, publicRepos, profileUrl)
      searchInput.value = '';
    }
  } catch (error) {
    console.log('Something went wrong with fetch!');
    console.log(error);
  }
}



function createCard(name, img, repos, profileUrl) {
  // box card
  const card = document.createElement('div');
  card.setAttribute('id', 'Box');
  card.addEventListener('click', () => {
    window.open(`${profileUrl}`, '_blank');
  });
  boxProfile.appendChild(card)
  // avatar img
  const imgCard = document.createElement('img');
  imgCard.classList.add('imgBox');
  imgCard.src = `${img}`;

  // name
  const nameCard = document.createElement('h1');
  nameCard.classList.add('headingBox');
  nameCard.innerText = `${name}`;

  // public repos
  const publicRepos = document.createElement('span');
  publicRepos.classList.add('descBox');
  publicRepos.innerText = `Public Repos: ${repos}`;

  // append to card
  card.appendChild(imgCard);
  card.appendChild(nameCard);
  card.appendChild(publicRepos);

}
