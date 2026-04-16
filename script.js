const btn = document.getElementById("colorBtn");
const card = document.querySelector(".card");

const colors = ["#ffffff", "#e3f2fd", "#f1f8e9", "#fff3e0", "#fce4ec"];
let colorIndex = 0;

console.log("Hola from github");
console.log("Another Edit for testing rebase");

btn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  card.style.backgroundColor = colors[colorIndex];
  console.log(`Changed color to: ${colors[colorIndex]}`);
});
