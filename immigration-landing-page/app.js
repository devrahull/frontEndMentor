const body = document.querySelector("body");
const servicesCards = document.querySelector("services-cards");

const km1 = document.querySelector(".km1");
const km2 = document.querySelector(".km2");
const km3 = document.querySelector(".km3");
const km4 = document.querySelector(".km4");
const km5 = document.querySelector(".km5");
const km6 = document.querySelector(".km6");


const hc1 = document.querySelector(".hc1");
const hc2 = document.querySelector(".hc2");
const hc3 = document.querySelector(".hc3");
const hc4 = document.querySelector(".hc4");
const hc5 = document.querySelector(".hc5");
const hc6 = document.querySelector(".hc6");


const cl1 = document.querySelector(".cl1");
const cl2 = document.querySelector(".cl2");
const cl3 = document.querySelector(".cl3");
const cl4 = document.querySelector(".cl4");
const cl5 = document.querySelector(".cl5");
const cl6 = document.querySelector(".cl6");

km1.addEventListener('click',(e)=>{
    
    hc1.style.display="block";
    body.style.overflow="hidden";
    
    

});
km2.addEventListener('click',(e)=>{

    hc2.style.display="block";
     body.style.overflow="hidden";
});
km3.addEventListener('click',(e)=>{

    hc3.style.display="block";
     body.style.overflow="hidden";
});
km4.addEventListener('click',(e)=>{

    hc4.style.display="block";
     body.style.overflow="hidden";
});
km5.addEventListener('click',(e)=>{

    hc5.style.display="block";
     body.style.overflow="hidden";
});
km6.addEventListener('click',(e)=>{

    hc6.style.display="block";
     body.style.overflow="hidden";
});

cl1.addEventListener('click',(e)=>{

    hc1.style.display="none";
    body.style.overflow="auto";
    
});

cl2.addEventListener('click',(e)=>{

    hc2.style.display="none";
    body.style.overflow="auto";
});

cl3.addEventListener('click',(e)=>{

    hc3.style.display="none";
    body.style.overflow="auto";
});

cl4.addEventListener('click',(e)=>{

    hc4.style.display="none";
    body.style.overflow="auto";
});

cl5.addEventListener('click',(e)=>{

    hc5.style.display="none";
    body.style.overflow="auto";
});

cl6.addEventListener('click',(e)=>{

    hc6.style.display="none";
    body.style.overflow="auto";
});

window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.querySelector("#upward-icon").style.display = "block";
    } else {
      document.querySelector("#upward-icon").style.display = "none";
    }
  }

  document.querySelector("#upward-icon").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


document.querySelector(".getInTouch").addEventListener("click",()=>{

    const heroFormDiv = document.querySelector(".form-div");
    heroFormDiv.style.display="block";
    body.style.overflow="hidden";
    document.querySelector('.cross-btn').style.display="block";

});
document.querySelector(".getInTouch1").addEventListener("click",()=>{

  const heroFormDiv = document.querySelector(".form-div");
  heroFormDiv.style.display="block";
  body.style.overflow="hidden";
  document.querySelector('.cross-btn').style.display="block";

});


document.querySelector('.cross-btn').addEventListener('click', ()=>{

  const heroFormDiv = document.querySelector(".form-div");
  heroFormDiv.style.display="none";
  body.style.overflow="auto";
  document.querySelector('.cross-btn').style.display="none";

});





// Get references to the DOM elements

const slides = document.querySelectorAll('.testimonial-slides-content');


// Set the initial slide index 
let slideIndex = 0;


// Function to start the automatic slide timer

  setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    updateSlide();
  }, 5000);


// Function to update the current slide
function updateSlide() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display="none";
  }
  
  slides[slideIndex].style.display="block";
  // slides[slideIndex].style.border=".5px solid black";
  // slides[slideIndex].style.

}

