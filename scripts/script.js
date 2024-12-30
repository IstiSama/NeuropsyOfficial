document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {changeLogoSize()};
    console.log("test");

    function changeLogoSize() {
      
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
            document.getElementById("top-logo").style.width="0px";
        } else {
            document.getElementById("top-logo").style.width="500px";
        }
    }   

});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }