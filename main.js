/*var i = 0;
var image = [];
var time = 1000;

image[0] = "space1.png";
image[1] = "space2.jpg";
image[2] = "space3.jpeg";
*/





/*function changeImg() {

document.slide.src = image[i];

  if (i < image.length - 1) {

    i++;

  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}


changeImg();*/

var slideIndex = 0;
showSlides();


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
