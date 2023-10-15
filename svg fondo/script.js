const wave = document.getElementById("wave");
const wave2 = document.getElementById("wave2");
let previousScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const scrollDirection = scrollY > previousScrollY ? "down" : "up";

  if (scrollDirection === "down") {
    wave.style.transform = `translateX(-${scrollY * 0.5}px)`;
    wave2.style.transform = `translateX(${scrollY * 0.5}px)`;
    wave.style.filter = `invert(${scrollY*0.01}%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)`;
  } else if (scrollDirection === "up") {
    wave.style.transform = `translateX(-${scrollY * 0.5}px)`;
    wave2.style.transform = `translateX(${scrollY * 0.5}px)`;
    wave.style.filter = `invert(${scrollY*0.01}%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%)`;
  }

  previousScrollY = scrollY;
});
