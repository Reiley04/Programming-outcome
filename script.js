var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var CatFacts = ["Around 27,000 trees are cut down each day .",
               "Humans use only 1% of all available wate.",
               "78% of marine mammals are at risk of choking on plastic.",
               "A glass bottle can take up to 1 million years to decompose..",
               "Paper from trees can be recycled 6 times.."]

var factNumber;

function randomFact(){
  return CatFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = randomFact();
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
