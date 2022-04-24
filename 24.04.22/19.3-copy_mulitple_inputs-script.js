const inputsArr = document.querySelectorAll('input')

inputsArr.forEach((input, index) => {
  // The focus returns to the first unfulfilled on click
  input.addEventListener('click', () => {
    if (input.value === "") {
      const currentInput = [...inputsArr].find((input) => {
        return (input.value === '');
      });
      currentInput.focus();
    }
  });
  // After the input is filled the focus shifts to the next input
  input.addEventListener('input', () => {
    if (index + 1 < inputsArr.length) {
      inputsArr[index + 1].focus();
    }
  })

  // paste to input all the text.
  input.addEventListener('paste', (event) => {
    let pastedSplit = event.clipboardData.getData('text').split('');
    if (pastedSplit.length === inputsArr.length) {
      for (let i = 0; i < inputsArr.length; i++) {
        inputsArr[i].value = pastedSplit[i];
      }
    }
  });
});
