const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popSound = document.getElementById("popSound");
const yesSound = document.getElementById("yesSound");
const heartsContainer = document.getElementById("hearts");

/* MOVE NO BUTTON FAR */
function moveNo() {
  popSound.play();
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 200);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

yesBtn.addEventListener("click", () => {
  yesSound.play();
  setInterval(createHeart, 200);
  document.querySelector(".card").innerHTML = "<h2>YAY!! 💘🥰</h2>";
});
