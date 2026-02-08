const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* NO BUTTON TELEPORT (FAR + SAFE) */
function moveNo() {
  const padding = 20;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* CONFETTI FIXED (VISIBLE ON LAPTOP + MOBILE) */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function startConfetti() {
  confetti = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 5 + 3,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`
  }));
  requestAnimationFrame(draw);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.d;
  });
  requestAnimationFrame(draw);
}

yesBtn.addEventListener("click", () => {
  startConfetti();
  document.querySelector(".card").innerHTML = "<h1>YAY!! 💘🥰</h1>";
});
