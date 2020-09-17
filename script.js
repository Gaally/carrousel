 // déclaration de variables
 var index = 0;
 var time;


// initialisation du défilement automatique
 autoSlide(); // appel de la fonction autoslide
 function autoSlide(){ // création de la fonction autoslide
    var images = document.getElementsByClassName("image"); // création de variable pour les photos de la div image
    var dots = document.getElementsByClassName("demo"); // création de variable pour les photos des miniatures
    var captionText = document.getElementById("caption"); // création de variable pour le titre des photos

    for (var i = 0; i < images.length; i++) { // la boucle parcourt l'ensemble des photos de la liste pour l'autoslide
      images[i].style.display = "none"; // cache les photos
    }

    if(index > images.length - 1){ // si la var index > le nombre d'images moins une alors index = 0
    index = 0;
    }

    images[index].style.display = "block"; // affiche photo
    captionText.innerHTML = dots[index].alt; // prend le texte des photos pour les afficher
    index++;

 
   time = setTimeout(autoSlide, 5000); //execute autoslide toutes les 5secondes
}


var slideIndex = 1; // défini la photo sur 1
  showSlides(slideIndex); // affiche la photo actuelle


// suivant/précédent contrôle
function manualSlide(n) {
  clearTimeout(time);
  showSlides(slideIndex += n); //incrémente l'index slide par 1 et affiche cette photo
  autoSlide();
}
 

// vignettes contrôle
function currentSlide(n) {
  showSlides(slideIndex = n); // affiche la photo actuelle
}


// affiche les bonnes slides
function showSlides(n) {
  var slides = document.getElementsByClassName("image"); // toutes les photos du document
  var dots = document.getElementsByClassName("demo"); // toutes les miniatures du document
  var captionText = document.getElementById("caption"); // l'élement des titres du document
  if (n > slides.length) {slideIndex = 1} // si le nombre d'elément dans slides est plus grand que le nombre de slides
    if (n < 1) {slideIndex = slides.length} // si le nombre d'elément dans slides est plus  petit que le nombre de slides
      for (var i = 0; i < slides.length; i++) { // cache toutes les slides
        slides[i].style.display = "none";
      }
      for (var i = 0; i < dots.length; i++) { // remplace les dots avec la classe "active" par ""
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block"; // définit la diapo actuelle en élément block
      dots[slideIndex-1].className += "active"; // définit le dot appartenant à la slide en "active"
      captionText.innerHTML = dots[slideIndex-1].alt; // définit le texte appartenant au captiontext de la diapo actuelle
}