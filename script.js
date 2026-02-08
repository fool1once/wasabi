const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popSound = document.getElementById("popSound");
const yesSound = document.getElementById("yesSound");

let noClicks = 0;

/* NO BUTTON LOGIC */
function moveNo() {
  popSound.currentTime = 0;
  popSound.play();

  noClicks++;

  // After 2 dodges → vanish
  if (noClicks >= 3) {
    noBtn.style.transition = "transform 0.4s, opacity 0.4s";
    noBtn.style.transform = "scale(0)";
    noBtn.style.opacity = "0";
    setTimeout(() => noBtn.remove(), 400);
    return;
  }

  const padding = 20;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* FLOATING HEARTS + EMOJI REACTIONS */
function createReaction() {
  const reactions = ["❤️", "😍", "🥰", "💖", "😘"];
  const emoji = document.createElement("div");
  emoji.className = "reaction";
  emoji.textContent = reactions[Math.floor(Math.random() * reactions.length)];

  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.fontSize = Math.random() * 20 + 24 + "px";

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 3500);
}

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  yesSound.currentTime = 0;
  yesSound.play();

  setInterval(createReaction, 250);

  document.querySelector(".card").innerHTML = `
    <h2>YAY!! 💘🥰</h2>
    <p>Best decision ever 😌</p>
  `;
});

/* MESSAGE POP SOUNDS */
document.querySelectorAll(".bubble").forEach((bubble, i) => {
  setTimeout(() => {
    popSound.currentTime = 0;
    popSound.play();
  }, i * 1000 + 500);
});
