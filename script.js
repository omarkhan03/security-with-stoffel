const back = document.getElementById("back");
const next = document.getElementById("next");
const stoffel = document.getElementById("stoffel");
const speech = document.getElementById("speech");
const pwd = document.getElementById("password");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const quiz = document.getElementById("quiz");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");

const sequence = [
    { // 0
        speech: "Hi! I'm Stoffel the red panda!",
        image: "images/roll.jpeg"
    },
    { // 1
        speech: "I'm here to teach you about the security triad!",
        image: "images/open.jpeg"
    },
    { // 2
        speech: "Before we start, please enter your password below!",
        image: "images/closed.jpeg",
    },
    { // 3 asks for password
        speech: "Okay, one more question before we begin... was that your real password? &#129320;",
        image: "images/smile.jpeg"
    },
    { // 4
        speech: "Good! You passed the first lesson! Never share your password with anyone!",
        image: "images/open.jpeg"
    },
    { // 5
        speech: "Shame on you! You failed the first lesson! Never share your password with anyone!",
        image: "images/yawn.jpeg"
    },
    { // 6 introduces the triad
        speech: "There are three main principles of security: confidentiality, integrity, and availability.",
        image: "images/open.jpeg"
    },
    { // 7 confidentiality
        speech: "First off, we have confidentiality. This means that only authorized users should be able to access information.",
        image: "images/confidentiality.jpeg"
    },
    { // 8
        speech: "Pop quiz: Who should have access to your email password?",
        image: "images/smile.jpeg"
    },
    { // 9
        speech: "Wrong! Only you should have access to your email password!",
        image: "images/wrong.jpeg"
    },
    { // 10
        speech: "Correct! Only you should have access to your email password!",
        image: "images/correct.jpeg"
    },
    { // 11
        speech: "Confidentiality is important because it prevents unauthorized users from accessing sensitive information.",
        image: "images/confidentiality.jpeg"
    },
    { // 12
        speech: "Question about confidentiality?",
        image: "images/smile.jpeg"
    },
    { // 13
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 14
        speech: "Correct! explenation.",
        image: "images/correct.jpeg"
    },
    { // 15
        speech: "Great! Now let's move on to integrity, integrity is the principle that data should neither be tampered with nor accidentally corrupted.",
        image: "images/confidentiality.jpeg"
    },
    { // 16
        speech: "Pop quiz: Basic question about integrity?",
        image: "images/smile.jpeg"
    },
    { // 17
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 18
        speech: "Correct! explenation.",
        image: "images/correct.jpeg"
    },
    { // 19
        speech: "Integrity is important because it protects data from being modified or destroyed by unauthorized users.",
        image: "images/confidentiality.jpeg"
    },
    { // 20
        speech: "Harder uestion about integrity?",
        image: "images/smile.jpeg"
    },
    { // 21
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 22
        speech: "Correct! explenation.",
        image: "images/correct.jpeg"
    },
    { // 23
        speech: "Perfect! Finally, we have availability, which is the principle that data should be accessible to authorized users when they need it.",
        image: "images/availability.jpeg"
    },
    { // 24
        speech: "Pop quiz: Basic question about availability?",
        image: "images/smile.jpeg"
    },
    { // 25
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 26
        speech: "Correct! explenation.",
        image: "images/correct.jpeg"
    },
    { // 27
        speech: "Integrity is important because it protects data from being modified or destroyed by unauthorized users.",
        image: "images/confidentiality.jpeg"
    },
    { // 28
        speech: "Harder uestion about availability?",
        image: "images/smile.jpeg"
    },
    { // 29
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 30
        speech: "Correct! explenation.",
        image: "images/correct.jpeg"
    },
    { // 31
        speech: "Now that you know about the security triad, you can protect yourself from cyber attacks!",
        image: "images/sleep.jpeg"
    },
]

let index = 0;
updateStoffel();
updateUI();

next.addEventListener("click", () => {

    if (index === 4) { 
        index = 6; 
    } else if (index >= 9 && index % 4 === 1 && index <= 29) {
        index += 2;
    }
    else {
        index++;
    }

    updateStoffel();
    updateUI();
});

back.addEventListener("click", () => {

    if (index === 6) {
        index = 2;
    }
    else if (index >= 10 && index % 4 === 2 && index <= 30) {
        index -= 2;
    }
    else if (index >= 11 && index % 4 === 3 && index <= 31) {
        index -= 3;
    }     
    else {
        index--;
    }

    updateStoffel();
    updateUI();
})

no.addEventListener("click", () => {
    index = 4;
    updateStoffel();
    updateUI();
})

yes.addEventListener("click", () => {
    index = 5;
    updateStoffel();
    updateUI();
})

function updateStoffel() {
    stoffel.src= sequence[index].image;
    speech.innerHTML = sequence[index].speech;
}

function updateUI() {

    quiz.style.display = 'none';

    pwd.style.display = 'none';
    no.style.display = 'none';
    yes.style.display = 'none';

    back.style.display = '';
    next.style.display = '';


    if (index == 0) {
        back.style.display = 'none';
    } else if (index == sequence.length - 1) {
        next.style.display = 'none';
    } else if (index == 2) {
        pwd.style.display = '';
    } else if (index == 3) {
        back.style.display = 'none';
        next.style.display = 'none';

        no.style.display = '';
        yes.style.display = '';
    } else if (index == 4 || index == 5) {
        back.style.display = 'none';
    } else if (index == 8) {
        activateQuiz(
            "Me and my boss", 
            "Anyone who asks", 
            "Only me!", 
            "Only you, Stoffel <br/> the red panda!"
        )
    } else if (index == 12) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 16) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 20) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 24) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 28) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 12) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    }
}

function activateQuiz(answer1, answer2, answer3, answer4) {
    quiz.style.display = '';
    back.style.display = 'none';
    next.style.display = 'none';

    a1.innerHTML = answer1;
    a2.innerHTML = answer2;
    a3.innerHTML = answer3;
    a4.innerHTML = answer4;
}

a1.addEventListener("click", () => {
    if (index == 12 || index == 24) {
        index += 2;
    } else {
        index++;
    }
    updateStoffel();
    updateUI();
})

a2.addEventListener("click", () => {
    if (index == 16) {
        index += 2;
    } else {
        index++;
    }
    updateStoffel();
    updateUI();
})

a3.addEventListener("click", () => {
    if (index == 8 || index == 28) {
        index += 2;
    } else {
        index++;
    }
    updateStoffel();
    updateUI();
})

a4.addEventListener("click", () => {
    if (index == 20) {
        index += 2;
    } else {
        index++;
    }
    updateStoffel();
    updateUI();
})