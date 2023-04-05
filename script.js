const back = document.getElementById("back");
const next = document.getElementById("next");

const availability = document.getElementById("availability");
const confidentiality = document.getElementById("confidentiality");
const closed1 = document.getElementById("closed");
const correct = document.getElementById("correct");
const open1 = document.getElementById("open");
const peek = document.getElementById("peek");
const roll = document.getElementById("roll");
const smile = document.getElementById("smile");
const sleep = document.getElementById("sleep");
const wrong = document.getElementById("wrong");
const yawn = document.getElementById("yawn");


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
        speech: "Harder question about confidentiality?",
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
    { // 15 NEW SLIDE
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 16 NEW SLIDE
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 17
        speech: "Great! Now let's move on to integrity, integrity is the principle that data should neither be tampered with nor accidentally corrupted.",
        image: "images/sleep.jpeg"
    },
    { // 18
        speech: "Which of these would compromise a system's integrity?",
        image: "images/smile.jpeg"
    },
    { // 19
        speech: "Wrong! A user's password being leaked would compromise the system's confidentality, not its integrity!",
        image: "images/wrong.jpeg"
    },
    { // 20
        speech: "Correct! Corruption of files would compromise the system's integrity! Files must always be proteted from tampering and corruption.",
        image: "images/correct.jpeg"
    },
    { // 21 NEW SLIDE
        speech: "Wrong! Creating backups of sensitive files would actually IMPROVE a system's integrity!",
        image: "images/wrong.jpeg"
    },
    { // 22 NEW SLIDE
        speech: "Wrong! Spilling water on your computer when you're logged into the system would not compromise the system's integrity, it wil only damage your own computer!",
        image: "images/wrong.jpeg"
    },
    { // 23
        speech: "Integrity is important because it protects data from being modified or destroyed by unauthorized users.",
        image: "images/smile.jpeg"
    },
    { // 24
        speech: "Harder question about integrity?",
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
    { // 27 NEW SLIDE
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 28 NEW SLIDE
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 29
        speech: "Perfect! Finally, we have availability, which is the principle that data should be accessible to authorized users when they need it.",
        image: "images/availability.jpeg"
    },
    { // 30
        speech: "Pop quiz: Given the definition, which of these would BEST improve a system's availability?",
        image: "images/smile.jpeg"
    },
    { // 31
        speech: "Wrong! A weak internet connection doesn't affect a system's availability, it just makes it less accessible for you!",
        image: "images/wrong.jpeg"
    },
    { // 32
        speech: "Correct! Having the option of accessing the system regardless of what device you're using is a great way of increasing a system's availability!",
        image: "images/correct.jpeg"
    },
    { // 33 NEW SLIDE
        speech: "Wrong! Why did you even pick this!? This is the worst option! It completely destroys the system's availability.",
        image: "images/wrong.jpeg"
    },
    { // 34 NEW SLIDE
        speech: "Sort of? Although having the option to view a website in multiple languages improves its availability, there is a better option!",
        image: "images/wrong.jpeg"
    },
    { // 35
        speech: "Availability is important because it makes a system more reliable because users will have the safety of knowing the system will always be there.",
        image: "images/availability.jpeg"
    },
    { // 36
        speech: "Harder question about availability?",
        image: "images/smile.jpeg"
    },
    { // 37
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 38
        speech: "Correct! explenation.",
        image: "images/correct.jpeg"
    },
    { // 39 NEW SLIDE
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 40 NEW SLIDE
        speech: "Wrong! explenation.",
        image: "images/wrong.jpeg"
    },
    { // 41
        speech: "Now that you know about the security triad, you can protect yourself from cyber attacks!",
        image: "images/yawn.jpeg"
    },
]

let index = 0;
updateStoffel();
updateUI();

next.addEventListener("click", () => {

    if (index === 4) { 
        index = 6;
    }
    else if (index === 9) {
        index = 11;
    }
    else if (index >= 13 && index % 6 === 1 && index <= 40) {
        index += 4;
    }
    else if (index >= 13 && index % 6 === 2 && index <= 40) {
        index += 3;
    }
    else if (index >= 13 && index % 6 === 3 && index <= 40) {
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
    else if (index === 10) {
        index = 8;
    }
    else if (index === 11) {
        index = 8;
    }
    else if (index >= 13 && index % 6 === 2 && index <= 40) {
        index -= 2;
    }
    else if (index >= 13 && index % 6 === 3 && index <= 40) {
        index -= 3;
    }
    else if (index >= 13 && index % 6 === 4 && index <= 40) {
        index -= 4;
    }
    else if (index >= 13 && index % 6 === 5 && index <= 40) {
        index -= 5;
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

/* 
    This function has been updated to reduce lag
        - Omar  
*/
function updateStoffel() {

    availability.style.display = "none";
    confidentiality.style.display = "none";
    closed1.style.display = "none";
    correct.style.display = "none";
    wrong.style.display = "none";
    smile.style.display = "none";
    yawn.style.display = "none";
    sleep.style.display = "none";
    peek.style.display = "none";
    roll.style.display = "none";
    open1.style.display = "none";

    switch (sequence[index].image) {
        case "images/availability.jpeg":
            availability.style.display = "";
            break;
        case "images/confidentiality.jpeg":
            confidentiality.style.display = "";
            break; 
        case "images/correct.jpeg":
            correct.style.display = "";
            break;
        case "images/wrong.jpeg":
            wrong.style.display = "";
            break;
        case "images/smile.jpeg":
            smile.style.display = "";
            break;
        case "images/yawn.jpeg":
            yawn.style.display = "";
            break;
        case "images/sleep.jpeg":
            sleep.style.display = "";
            break;
        case "images/peek.jpeg":
            peek.style.display = "";
            break;
        case "images/roll.jpeg":
            roll.style.display = "";
            break;
        case "images/open.jpeg":
            open1.style.display = "";
            break;
        case "images/closed.jpeg":
            closed1.style.display = "";
            break;
        default:
            console.log("error")
            smile.style.display = "";
            break;
    }



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
            "Only me!", 
            "Anyone who asks",
            "Only you, Stoffel <br/> the red panda!"
        )
    } else if (index == 12) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 18) {
        activateQuiz(
            "A casual user's system is leaked",
            "Malware that corrupts the files in the system",
            "Creating backups of sensitive files",
            "Spilling water on your computer while you're logged in to the system"
        )
    } else if (index == 24) {
        activateQuiz(
            "a1",
            "a2",
            "a3",
            "a4"
        )
    } else if (index == 30) {
        activateQuiz(
            "A weak internet connection",
            "Allowing access to the system from both mobile phones and computers",
            "Creating ransomware for the system",
            "Having the option of viewing the website in multiple languages"
        )
    } else if (index == 36) {
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
    index++;
    updateStoffel();
    updateUI();
})

a2.addEventListener("click", () => {
    index += 2;
    updateStoffel();
    updateUI();
})

a3.addEventListener("click", () => {
    if (index === 8) {
        index ++;
    } else {
        index += 3;
    }
    updateStoffel();
    updateUI();
})

a4.addEventListener("click", () => {
    if (index === 8) {
        index ++;
    } else {
        index += 4;
    }
    updateStoffel();
    updateUI();
})