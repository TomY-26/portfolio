const changeStyleSheet = (sheet) => {
    document.getElementById("pageStyle").setAttribute("href", sheet);
};

const changeStyleColour = () => {
    let styleColour = document.getElementById("changeColour");

    styleColour.onclick = function () {
            if(document.getElementById("changeColour").innerHTML === "Dark" ) {
                changeStyleSheet("./resources/css/darkStyle.css")
                document.getElementById("changeColour").innerHTML = "Light";
            } else {
                changeStyleSheet("./resources/css/lightStyle.css")
                document.getElementById("changeColour").innerHTML = "Dark";
            }
}
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-7.125rem";
  }
  prevScrollpos = currentScrollPos;
}

window.onload = changeStyleColour;
