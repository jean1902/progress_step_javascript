//
const prev = document.querySelector(".btn_Prev");
const next = document.querySelector(".btn_Next");
const hr = document.querySelector(".hr");
const circle = document.querySelectorAll(".circle");

let cureentIndex = 1;

next.addEventListener("click", () => {
  cureentIndex++;
  if (cureentIndex > circle.length) {
    cureentIndex = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  cureentIndex--;
  if (cureentIndex < circle.length) {
    cureentIndex = 1;
  }
  update();
});

function update() {
  circle.forEach((Circle, idx) => {
    if (idx < cureentIndex) {
      Circle.classList.add("active");
    } else {
      Circle.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".active");
  hr.style.width = ((active.length -1) / (circle.length - 1)) * 100 + "%";

  if (cureentIndex === 1) {
    prev.disabled = true;
  } else if (cureentIndex === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
