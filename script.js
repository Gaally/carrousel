 var index = 0;
 var images;
 var time;

 autoSlide();
 function autoSlide(n){
      images = document.getElementsByClassName('image');
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }

    if(index > images.length - 1){
      index = 0;
    }
    images[index].style.display = "block";
    captionText.innerHTML = dots[index].alt;
    index++;

    time = setTimeout(autoSlide, 5000);
  }


function manualSlide2(n){
  clearTimeout(time);
  newIndex = index + n;
  autoSlide(newIndex);
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function manualSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += "active";
      captionText.innerHTML = dots[slideIndex-1].alt; 
    }