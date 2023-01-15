var images = ["oeuf1.png", "oeuf2.png", "oeuf3.png", "oeuf4.png", "oeuf5.png", "oeuf6.png", "oeuf7.png", "oeuf8.png"];
var currentImage = 0;

function changeImage() {
  currentImage = (currentImage + 1) % images.length;
  var img = document.getElementById("myImage");
  img.src = images[currentImage];
  img.alt = images[currentImage];
}

var sound1 = new Audio("cassage.mp3");
function playSound1() {
  sound1.play();
}

var sound2 = new Audio("cri.mp3");
function playSound2() {
  sound2.play();
}

var titre = document.getElementById("monTitre");
var bouton = document.getElementById("monBouton");

bouton.addEventListener("click", function() {
  titre.classList.toggle("couleur");
});

