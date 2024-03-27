const hex = document.querySelector(".hex");
const hex1 = document.querySelector(".text");
// console.log(hex.textContent);
const bt = document.querySelector(".btn");
const body = document.body;

// bt.addEventListener(
//   "click",
//   (changeColor = () => {
//     const red = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const rgb = `#${red}${green}${blue}`;
//     console.log(rgb);
//     body.style.backgroundColor = rgb;
//     hex.innerHTML = rgb;
//   })
// );

const hexN = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

bt.addEventListener(
  "click",
  (change = () => {
    let hash = "#";
    for (let i = 0; i <= 5; i++) {
      const random = Math.floor(Math.random() * hexN.length);
      //   console.log(random);
      hash += hexN[random];
      //   console.log(hash);
    }
    body.style.backgroundColor = "#0000FF";
    hex.innerHTML = hash;
    // console.log(hex1.style.color);
    // console.log(hex1.textContent);

    if (body.style.backgroundColor === "#0000FF") {
      hex1.style.color = "#ffffff";
    } else {
      hex1.style.color = "#000000";
    }
  })
);
