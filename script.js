
// select buttons
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// select all slides
const images = document.querySelectorAll(".slide img");



// set current slide
let slideIndex = 0;

// max no. of slides
let imagesLength = images.length - 1;

changeImage(0);

function changeImage(index)
{
    images.forEach((image)=>
     {image.style.opacity = 0;});

images[index].style.opacity = 1;
}

// previous btn functionality
prevBtn.addEventListener("click",()=>
{slideIndex--;
if (slideIndex < 0) {slideIndex = imagesLength;}
changeImage(slideIndex);});

// next btn functionality
nextBtn.addEventListener("click",()=>
{slideIndex++;
if (slideIndex > imagesLength) {slideIndex = 0;}
changeImage(slideIndex);});