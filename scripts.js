
// Function to extend the dropdown after clicking on the hamburger.
var y = document.getElementById("dropdown");
var z = document.getElementById("dropdown-container");

y.style.height = '0vh';

function hamburgerAnimation(x) {

    x.classList.toggle("change");

    if (y.style.height == "0vh") {
        y.style.height = "8vh";
        // z.style.transitionTimingFunction = "ease-in";
        // z.style.transitionDuration = "10s";
        z.style.display = "flex";
    } else {
        y.style.height = "0vh";
        z.style.display = "none";
    }

  }