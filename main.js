const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});


var counter = 1;
setInterval(function () {
  document.getElementById("clik"+counter).click();
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4400);