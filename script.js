var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

// set the gradient values
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// rgb to hex colour values
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// generate random colour values in hex format
function randomNumbers() {
  return Math.round(255 * Math.random());
}

function generateRandom() {
  color1.value = rgbToHex(randomNumbers(), randomNumbers(), randomNumbers());
  color2.value = rgbToHex(randomNumbers(), randomNumbers(), randomNumbers());
  setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandom);
