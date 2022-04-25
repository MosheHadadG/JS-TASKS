const button = document.querySelector('button');
const input = document.querySelector('#ageInput');
const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
  if (!input.value) {
    h1.innerHTML = "Please Enter your age"
  }
  else if (input.value >= 18) {
    h1.innerText = "you can drink appear"
  }
  else if (input.value < 18) {
    h1.innerText = "you’re too young"
  }
});