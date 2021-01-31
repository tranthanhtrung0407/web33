var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
setTime();

function setTime(){
  setTimeout(time, 5000)
}

function time(n) {
  showSlides(slideIndex += 1)
  setTime()
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide_img");
  var li = document.getElementsByClassName("li");
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }


  // slideIndex++;
  // if (slideIndex > slides.length) {
    // slideIndex = 1
  // }
      
  for (i = 0; i < li.length; i++) {
    li[i].className = li[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  li[slideIndex-1].className += " active";

  // setTimeout(showSlides, 5000); // Change image every 2 seconds
}
