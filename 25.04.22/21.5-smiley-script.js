const input = document.querySelector('input');
const button = document.querySelector('button');
const smileysDiv = document.querySelector('.smileys');

button.addEventListener('click', (event) => {
  // Check if the user entered only numbers
  for (let i = 0; i < input.value.length; i++) {
    if (input.value.charCodeAt(i) > 57 || input.value.charCodeAt(i) < 48) {
      alert('error');
      return;
    }
  }

// rest img
  smileysDiv.innerHTML = null;

  // create img 
  // append child (img) to smileysDiv (parent)
  for(let i = 0; i < input.value; i++) {
    let imgSmiley = document.createElement('img');
    imgSmiley.src = "../21.5-smileyImg.jpg";
    imgSmiley.style.width = '50px'
    smileysDiv.appendChild(imgSmiley);
  }
})

// on focus input rest imgaes
input.addEventListener('focus', (event) => {
  smileysDiv.innerHTML = null;
})