const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// MOVE NO BUTTON FAR AWAY
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop + mobile
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// YES CLICK
yesBtn.addEventListener("click", () => {
  startConfetti();
  document.querySelector(".card").innerHTML =
    "<h1>YAY!! 💘🥰</h1>";
});

// 🎉 CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function startConfetti() {
  confettiPieces = Array.from({ length: 150 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
  }));
  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.y += p.d;
  });

  if (confettiPieces.some(p => p.y < canvas.height)) {
    requestAnimationFrame(drawConfetti);
  }
}
