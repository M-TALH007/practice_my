const lw = document.querySelector(".lower");
const hg = document.querySelector(".higher");
var count = document.querySelector(".number");

var number = 0;
lw.addEventListener("click", () => {
  number--;
  console.log(number);
  count.innerHTML = number;
  if (count.innerHTML < "0") {
    count.style.color = "red";
  } else if (count.innerHTML === "0") {
    count.style.color = "aqua";
  }
});

hg.addEventListener("click", () => {
  number++;
  console.log(number);
  count.innerHTML = number;
  if (count.innerHTML > "0") {
    count.style.color = "green";
  } else if (count.innerHTML === "0") {
    count.style.color = "aqua";
  }
});
