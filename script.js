const back = document.getElementById("back");
const next = document.getElementById("next");
const stoffel = document.getElementById("stoffel");
const speech = document.getElementById("speech");

const sequence = [
    "Hi! I'm Stoffel the red panda!",
    "I'm here to teach you about the security triad!"
]

back.style.display = 'none';

next.addEventListener("click", () => {
    back.style.display = '';
    next.style.display = 'none';
    stoffel.src="images/teach.jpeg"
    speech.innerHTML = sequence[1];
});

back.addEventListener("click", () => {
    back.style.display = 'none';
    next.style.display = '';
    stoffel.src="images/teach1.jpeg"
    speech.innerHTML = sequence[0];
})