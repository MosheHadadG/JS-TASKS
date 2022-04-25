const textArea = document.querySelector('#text');
const button = document.querySelector('button');
const alertP = document.querySelector('p');

textArea.addEventListener('input', (event) => {
  if (event.target.value.length < 100) {
    alertP.innerText = "Not enough characters, need 100 characters"
    alertP.style.color = "red"
  }
  else{
    alertP.innerText = "Excellent, you can send the form!"
    alertP.style.color = "green"
    button.addEventListener('click', () => {
      alertP.innerText = "the form has been sent successfully"
      alertP.style.color = "blue"
      
    })
  }
})