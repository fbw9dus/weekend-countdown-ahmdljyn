var ch = document.querySelector(".ch")
var input = document.querySelector(".in")
var btn = document.querySelector(".b")
var day = new Date().getDay()
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
btn.addEventListener("click",weekend)
function weekend(){
    ch.innerHTML = "Hallo " + input.value + ". "+ " Today is " + days[day]+ "!." + " There is only " + (5 - day) + " Day to the Weekend"
    btn.style.display = "none"
    input.style.display = "none"
}

var header = document.querySelector("h1");
header.style.border = "solid 5px";
header.style.textAlign = "center";
header.style.fontFamily = "Arial";
var ul = document.getElementsByClassName("nav-list")[0]
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.listStyleType = "none";
ul.style.backgroundColor = "blue";
ul.style.color = "white";
ul.style.padding = "1em";
ul.style.marginTop = "-1.5em";
var h2 = document.querySelector("h2");
h2.style.textAlign = "center";
var fotos = document.getElementsByClassName("info")[0]
fotos.style.display = "flex";
fotos.style.displayWarp = "warp";
fotos.style.justifyContent = "space-around";
var img = document.querySelectorAll("img");
for (i = 0; i < img.length; i++) {
    img[i].style.width = "256px";
    img[i].style.height = "190px";
    img[i].style.borderImage
}
var packageTitle = document.getElementsByClassName("info-package");
for (i = 0; i < packageTitle.length; i++) {
    packageTitle[i].style.borderBottom = "solid 1px";
    packageTitle[i].style.padding = "1em";
}
var mild = document.getElementsByClassName("mild")[0]
mild.style.borderBottom = "solid 1px yellow"
var mild = document.getElementsByClassName("intense")[0]
mild.style.borderBottom = "solid 1px orange"
var mild = document.getElementsByClassName("extreme")[0]
mild.style.borderBottom = "solid 1px red"
/*"*/
var section = document.getElementsByClassName("prices")[0];
section.style.display = "flex";
section.style.justifyContent = "space-around";
section.style.padding = "40px";
var price = document.querySelectorAll("p");
for (i = 0; i < price.length; i++) {
    price[i].style.width = "60px";
    price[i].style.height = "60px";
    price[i].style.padding = "40px";
    price[i].style.margin = "30px";
    price[i].style.border = "5px solid blue";
    price[i].style.borderRadius = "50% 50%";
    price[i].style.display = "flex";
    price[i].style.justifyContent = "center";
    price[i].style.fontFamily = "Arial";
}
var footer = document.getElementsByClassName("footer")[0]
footer.style.padding = "30px";
footer.style.backgroundColor = "blue";
var links = document.getElementsByClassName("links")[0]
links.style.display = "flex";
links.style.justifyContent = "space-around";
links.style.listStyleType = "none";
var link = document.querySelectorAll("a");
for (i=0; i<link.length; i++){
    link[i].style.color = "white";
}