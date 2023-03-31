const back = document.getElementById("back");
const next = document.getElementById("next");
const stoffel = document.getElementById("stoffel");
const speech = document.getElementById("speech");

const sequence = [
    {
        speech: "Hi! I'm Stoffel the red panda!",
        image: "images/teach1.jpeg"
    },
    {
        speech: "I'm here to teach you about the security triad!",
        image: "images/teach.jpeg"
    },
    {
        speech: "There are three main principles of security: confidentiality, integrity, and availability.",
        image: "images/smile.jpeg"
    }
]

let index = 0;

back.style.display = 'none';

next.addEventListener("click", () => {
    back.style.display = '';
    next.style.display = 'none';
    index++;
    updateStoffel();
    updateUI();
});

back.addEventListener("click", () => {
    back.style.display = 'none';
    next.style.display = '';
    index--;
    updateStoffel();
    updateUI();
})

function updateStoffel() {
    stoffel.src= sequence[index].image;
    speech.innerHTML = sequence[index].speech;
}

function updateUI() {
    if (index == 0) {
        back.style.display = 'none';
    } else if (index == sequence.length - 1) {
        next.style.display = 'none';
    } else {
        back.style.display = '';
        next.style.display = '';
    }
}