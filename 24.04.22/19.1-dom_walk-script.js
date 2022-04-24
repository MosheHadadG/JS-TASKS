const startHereClass = document.querySelector('.start-here');

// 1
startHereClass.innerText = "main title"

// 2
const ul = document.querySelectorAll("ul")
const subTitlesUl = ul[1];
subTitlesUl.innerHTML += "<li>sub title 4</li>"

// 3
const lastLi = document.querySelectorAll("li")[7];
lastLi.innerHTML = ""

// 4
const firstLi = document.querySelector("li")
firstLi.innerText = "Master Of The Dom";

// 5
const paragraph = document.querySelector("p");
paragraph.innerText = "Something Else!"