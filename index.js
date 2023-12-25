//First diecee
var randomNumber = Math.floor(Math.random()*6+1);

var randomDiceImage = "images/"+"dice"+randomNumber+".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage);

//Second diecee
var randomNumber1 = Math.floor(Math.random()*6+1);

var randomDiceImage1 = "images/"+"dice"+randomNumber1+".png";

document.querySelector(".img2").setAttribute("src",randomDiceImage1)

//Showing the Result

var result = document.querySelector("h1");

if (randomNumber > randomNumber1) {
  result.innerHTML = "🥳Player 1 Wins"
}

if (randomNumber < randomNumber1) {
  result.innerHTML = "Player 2 Wins🥳"
}

if (randomNumber === randomNumber1) {
  result.innerHTML = "🤝Draw🤝"
}

//Theme color

var themeColor = document.getElementById("themeColor");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme","light");
}

let localData = localStorage.getItem("theme");
if (localData=="light") {
  themeColor.src = "dark theme icon/moon.png";
  document.body.classList.remove("dark-theme");
}

else if(localData == "dark") {
  themeColor.src = "dark theme icon/sun.png";
  document.body.classList.add("dark-theme");
}

themeColor.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeColor.src = "dark theme icon/sun.png";
    localStorage.setItem("theme","dark");
  }
  else {
    themeColor.src = "dark theme icon/moon.png";
    localStorage.setItem("theme","light");
  }
}