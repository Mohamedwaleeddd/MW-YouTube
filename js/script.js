document.querySelector('.cont2').style.width = "80%";
document.querySelector('nav').style.width = "80%";
function show() {
  var x = document.querySelector('.left');
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
    document.querySelector('nav').style.width = "100%";
    document.querySelector('.cont2').style.width = "100%";

  } else{
    x.style.opacity = "1";
    document.querySelector('nav').style.width = "80%";
    document.querySelector('.cont2').style.width = "80%";
  }
}