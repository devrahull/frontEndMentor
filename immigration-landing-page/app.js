const body = document.querySelector("body");


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


document.querySelector(".contact1").addEventListener("click",()=>{

    const heroFormDiv = document.querySelector(".form-div");
    heroFormDiv.style.display="block";
    body.style.overflow="hidden";
    // document.querySelector('.close-btn').style.display="block";

});
document.querySelector(".contact2").addEventListener("click",()=>{

  const heroFormDiv = document.querySelector(".form-div");
  heroFormDiv.style.display="block";
  body.style.overflow="hidden";
  // document.querySelector('.close-btn').style.display="block";

});
document.querySelector(".contact3").addEventListener("click",()=>{

  const heroFormDiv = document.querySelector(".form-div");
  heroFormDiv.style.display="block";
  body.style.overflow="hidden";
  // document.querySelector('.close-btn').style.display="block";

});


document.querySelector('.close-btn').addEventListener('click', ()=>{

  const heroFormDiv = document.querySelector(".form-div");
  heroFormDiv.style.display="none";
  body.style.overflow="auto";
  document.getElementById('email-address').value="";
  document.getElementById('mobile-number').value="";
  document.getElementById('name').value="";
  // document.querySelector('.cross-btn').style.display="none";

});




