:::writing{variant="standard" id="77108"}// SHOW MAIN APP AFTER INTRO
setTimeout(() => {
document.getElementById("intro").style.display = "none";
document.getElementById("app").classList.remove("hidden");
}, 4000);

// YES BUTTON → POPUP
document.getElementById("yesBtn").addEventListener("click", () => {
document.getElementById("popup").classList.remove("hidden");
document.getElementById("popupText").innerText =
"Yay! Thank youuu ❤️";
});

function closePopup() {
document.getElementById("popup").classList.add("hidden");
}

// MOVING NO BUTTON
const noBtn = document.getElementById("noBtn");

let moveCount = 0;

noBtn.addEventListener("mouseover", () => {

moveCount++;

// Movement range increases each try
let range = 200 + (moveCount * 30);

const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 50);

noBtn.style.left = `${x}px`;
noBtn.style.top = `${y}px`;