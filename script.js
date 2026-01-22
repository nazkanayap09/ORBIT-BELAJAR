body{

}

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let dark = true;

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: Math.random() * 0.5
  });
}
// example
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = dark ? "white" : "black";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.x += s.dx;
    if (s.x > canvas.width) s.x = 0;
  });

  requestAnimationFrame(drawStars);
}

drawStars();
// background
document.querySelectorAll(".section").forEach(sec => {
  sec.addEventListener("click", () => {
    dark = !dark;
  });
});