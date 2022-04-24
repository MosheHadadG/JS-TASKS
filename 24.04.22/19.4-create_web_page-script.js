// Style Body 
// Background to body
const body = document.body;
body.style.background = "#f4f4f4";
body.style.margin = "0px";


// create div Boxes
// insert boxesDiv before Script js.
const script = document.querySelector('script');
const boxesDiv = document.createElement('div');
boxesDiv.classList.add('Boxes')
body.insertBefore(boxesDiv, script);

// create 4 divs(Box) and append to BoxesDiv
for(let i = 1; i <= 4; i++) {
  const boxDiv = document.createElement('div');
  boxDiv.classList.add(`Box`);
  boxesDiv.appendChild(boxDiv);
}


const Boxes = document.querySelectorAll('.Box');
const box1 = Boxes[0];
const box2 = Boxes[1];
const box3 = Boxes[2];
const box4 = Boxes[3];

// Text Divs
box1.innerText = "Header"
box2.innerText = "Main"
box3.innerText = "Aside"
box4.innerText = "Footer"


// create div (main), with display flex and append Box2 & Box3.
const main = document.createElement('div');
// Style Main div
const mainStyle = main.style;
mainStyle.display = "flex";
mainStyle.justifyContent = "space-around";
mainStyle.marginTop = "20px";
mainStyle.marginBottom = "200px";
mainStyle.fontSize = "2rem"
mainStyle.textAlign = "center"
// insert box 2 & box 3 to Main Div
boxesDiv.insertBefore(main, box2);
main.appendChild(box2);
main.appendChild(box3);

// Style Box 1 - Header
const styleBox1 = box1.style;
styleBox1.background = "#333";
styleBox1.width = "100%";
styleBox1.height = "75px";
styleBox1.display = "flex";
styleBox1.alignItems = "center";
styleBox1.fontSize = "1.4rem";


// Style Box 2 - Main
const styleBox2 = box2.style;
styleBox2.background = "purple";
styleBox2.width = "60%";
styleBox2.height = "500px";

// Style Box 3 - Aside
const styleBox3 = box3.style;
styleBox3.background = "orange";
styleBox3.width = "30%";;
styleBox3.height = "500px";

// Style Box 4 - Footer
const styleBox4 = box4.style;
styleBox4.background = "#333";
styleBox4.width = "100%";
styleBox4.height = "140px";
styleBox4.display = "flex";
styleBox4.alignItems = "center"
styleBox4.justifyContent = "center"
styleBox4.fontSize = "2rem"



