const span = document.querySelector("h2 span");
const image = document.querySelector("img");

let maxNumber = 100;

window.addEventListener("load", () => {
  image.style.animationPlayState = "running";
  let interval = setInterval(() => {
    span.textContent++;
    if (span.textContent == maxNumber) {
      clearInterval(interval);
      span.parentElement.style.display = "none";
    }
  }, 30);
});
