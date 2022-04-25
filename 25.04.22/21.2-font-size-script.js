const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const h1 = document.querySelector('h1');
const h1Style = getComputedStyle(h1);
let h1FontSize = h1Style.fontSize
let h1SizeNumber = h1FontSize.replace(`px`, ``);

console.log(h1SizeNumber);


const changeFontSize = (h1SizeNumber) => {
  plus.addEventListener('click', () => {
    if (h1SizeNumber < 100){
      h1SizeNumber++;
      h1SizeNumberStr = h1SizeNumber.toString();
      console.log(h1SizeNumberStr)
      h1.style.fontSize = `${h1SizeNumberStr}px`
    }
  });

  minus.addEventListener('click', () => {
    if (h1SizeNumber > 6){
      h1SizeNumber--;
      h1SizeNumberStr = h1SizeNumber.toString();
      console.log(h1SizeNumberStr)
      h1.style.fontSize = `${h1SizeNumberStr}px`
    }
  });
}
changeFontSize(h1SizeNumber);
