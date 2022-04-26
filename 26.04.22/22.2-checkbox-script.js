const containerImg = document.querySelector('.container');
const checkBox = document.querySelector('#checkboxId');

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    containerImg.classList.add('checked')
  }
  else {
    containerImg.classList.remove('checked')
  }

})
