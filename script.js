const back = document.getElementById("back");
const next = document.getElementById("next");
const backToStart = document.getElementById("back-to-start");

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

const score = document.getElementById("score");

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");

const sequence = [
    // 0
    {
        speech: "",
        image: "images/big-logo.jpeg"
    },
    { // 1
        speech: "Hi! I'm Stoffel the red panda!",
        image: "images/roll.jpeg"
    },
    { // 2
        speech: "I'm here to teach you about the security triad!",
        image: "images/open.jpeg"
    },
    { // 3
        speech: "Before we start, please enter your password below!",
        image: "images/closed.jpeg",
    },
    { // 4 asks for password
        speech: "Okay, one more question before we begin... was that your real password? &#129320;",
        image: "images/smile.jpeg"
    },
    { // 5
        speech: "Good! You passed the first lesson! Never share your password with anyone!",
        image: "images/correct.jpeg"
    },
    { // 6
        speech: "Shame on you! You failed the first lesson! Never share your password with anyone!",
        image: "images/yawn.jpeg"
    },
    { // 7 introduces the triad
        speech: "There are three main principles of security: confidentiality, integrity, and availability.",
        image: "images/open.jpeg"
    },
    { // 8 confidentiality
        speech: "First off, we have confidentiality. This means that only authorized users should be able to access information.",
        image: "images/confidentiality.jpeg"
    },
    { // 9
        speech: "Pop quiz: Who should have access to your email password?",
        image: "images/smile.jpeg"
    },
    { // 10
        speech: "Wrong! Only you should have access to your email password!",
        image: "images/wrong.jpeg"
    },
    { // 11
        speech: "Correct! Only you should have access to your email password!",
        image: "images/correct.jpeg"
    },
    { // 12
        speech: "Confidentiality is important because it prevents unauthorized users from accessing sensitive information.",
        image: "images/confidentiality.jpeg"
    },
    { // 13
        speech: "Which of the following best describes the relationship between confidentiality and privacy?",
        image: "images/smile.jpeg"
    },
    { // 14
        speech: "Wrong! Confidentiality is concerned with protecting sensitive information from unauthorized access or disclosure, while privacy is a broader concept that refers to an individual's right to control their personal information and how it is used.",
        image: "images/wrong.jpeg"
    },
    { // 15
        speech: "Confidentiality is a key aspect of privacy, but privacy also encompasses other elements such as data ownership, data accuracy, and data usage. Therefore, confidentiality can be seen as a subset of privacy.",
        image: "images/peek.jpeg"
    },
    { // 16
        speech: "Correct! Confidentiality is concerned with protecting sensitive information from unauthorized access or disclosure, while privacy is a broader concept that refers to an individual's right to control their personal information and how it is used.",
        image: "images/correct.jpeg"
    },
    { // 17
        speech: "Confidentiality is a key aspect of privacy, but privacy also encompasses other elements such as data ownership, data accuracy, and data usage. Therefore, confidentiality can be seen as a subset of privacy.",
        image: "images/peek.jpeg"
    },
    { // 18 NEW SLIDE
        speech: "Wrong! Confidentiality and privacy are absolutely related!",
        image: "images/wrong.jpeg"
    },
    { // 19 NEW SLIDE
        speech: "Wrong! Although confidentiality and privacy are related, they are not the same!",
        image: "images/wrong.jpeg"
    },
    { // 20
        speech: "Great! Now let's move on to integrity, integrity is the principle that data should neither be tampered with nor accidentally corrupted.",
        image: "images/sleep.jpeg"
    },
    { // 21
        speech: "Which of these would compromise a system's integrity?",
        image: "images/smile.jpeg"
    },
    { // 22
        speech: "Wrong! A user's password being leaked would compromise the system's confidentality, not its integrity!",
        image: "images/wrong.jpeg"
    },
    { // 23
        speech: "Correct! Corruption of files would compromise the system's integrity! Files must always be proteted from tampering and corruption.",
        image: "images/correct.jpeg"
    },
    { // 24 NEW SLIDE
        speech: "Wrong! Creating backups of sensitive files would actually IMPROVE a system's integrity!",
        image: "images/wrong.jpeg"
    },
    { // 25 NEW SLIDE
        speech: "Wrong! Spilling water on your computer when you're logged into the system would not compromise the system's integrity, it wil only damage your own computer!",
        image: "images/wrong.jpeg"
    },
    { // 26
        speech: "Integrity is important because it protects data from being modified or destroyed by unauthorized users.",
        image: "images/smile.jpeg"
    },
    { // 27
        speech: "Which of these best describes the concept of integrity?",
        image: "images/smile.jpeg"
    },
    { // 28
        speech: "Wrong! Ensuring that data is available to authorized users when they need it describes the concept of availability!",
        image: "images/wrong.jpeg"
    },
    { // 29
        speech: "Correct! Data integrity refers to the concept of maintaining the accuracy, completeness, and consistency of data over its entire lifecycle. <br/> In cybersecurity, data integrity is crucial to ensure that information has not been modified, deleted, or otherwise tampered with by unauthorized individuals or systems.",
        image: "images/correct.jpeg"
    },
    { // 30
        speech: " Ensuring data integrity involves using various techniques such as cryptographic hashing, digital signatures, access controls, and backups to detect and prevent unauthorized changes to data.",
        image: "images/roll.jpeg"
    },
    { // 31 NEW SLIDE
        speech: "Wrong! Ensuring that data is protected from unauthorized access and disclosure describes the concept of confidentiality!",
        image: "images/wrong.jpeg"
    },
    { // 32 NEW SLIDE
        speech: "Wrong! Although ensuring that data is stored in a secure and reliable manner might improve a system's integrity, it does not describe the concept of integrity!",
        image: "images/wrong.jpeg"
    },
    { // 33
        speech: "Perfect! Finally, we have availability, which is the principle that data should be accessible to authorized users when they need it.",
        image: "images/availability.jpeg"
    },
    { // 34
        speech: "Pop quiz: Given the definition, which of these would BEST improve a system's availability?",
        image: "images/smile.jpeg"
    },
    { // 35
        speech: "Wrong! A weak internet connection doesn't affect a system's availability, it just makes it less accessible for you!",
        image: "images/wrong.jpeg"
    },
    { // 36
        speech: "Correct! Having the option of accessing the system regardless of what device you're using is a great way of increasing a system's availability!",
        image: "images/correct.jpeg"
    },
    { // 37 NEW SLIDE
        speech: "Wrong! Why did you even pick this!? This is the worst option! It completely destroys the system's availability.",
        image: "images/wrong.jpeg"
    },
    { // 38 NEW SLIDE
        speech: "Sort of? Although having the option to view a website in multiple languages improves its availability, there is a better option!",
        image: "images/wrong.jpeg"
    },
    { // 39
        speech: "Availability is important because it makes a system more reliable because users will have the safety of knowing the system will always be there.",
        image: "images/availability.jpeg"
    },
    { // 40
        speech: "Which of the following is a common threat to a system's availability?",
        image: "images/smile.jpeg"
    },
    { // 41
        speech: "Wrong! Data breaches and theft of sensitive information are threats to a system's confidentiality!",
        image: "images/wrong.jpeg"
    },
    { // 42
        speech: "Correct! DDoS attacks are a common threat to the availability of computer systems, websites, and networks. <br/> In a DDoS attack, a large number of compromised systems, often called bots or zombies, flood a targeted system or network with a massive amount of traffic or requests, causing it to become overloaded and unavailable to legitimate users.",
        image: "images/correct.jpeg"
    },
    { // 43
        speech: "DDoS attacks can be launched using various techniques, such as amplification attacks, reflection attacks, and application-layer attacks, and they can be difficult to mitigate once they are underway.",
        image: "images/open.jpeg"
    },
    { // 44 NEW SLIDE
        speech: "Wrong! Malware and viruses infecting computer systems don't always affect a system's availability but may affect its integrity or even confidentiality!",
        image: "images/wrong.jpeg"
    },
    { // 45 NEW SLIDE
        speech: "Wrong! XSS attacks are usually used to steal sensitive information and compromise a system's confidentiality!",
        image: "images/wrong.jpeg"
    },
    { // 46
        speech: "Now that you know about the security triad, you can protect yourself from cyber attacks!",
        image: "images/yawn.jpeg"
    },
]

const answered = new Set();
let currentScore = 0;
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
    else if (index === 41){
        index = 36;
    }     
    else {
        index--;
    }

    updateStoffel();
    updateUI();
})

backToStart.addEventListener("click", () => {
    index = 0;
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

            if (!answered.has(index)) {     // Increments score when correct stoffel is shown
                currentScore++;             // So long as it hasnt been shown before
                answered.add(index);
            }
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
    score.innerHTML = "Score: " + currentScore + " 7 Questions";
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
            "Privacy is a subset of confidentiality",
            "Confidentiality is a subset of privacy",
            "Confidentiality and privacy are completely unrelated",
            "Confidentiality and privacy are the same"
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
            "Ensuring that data is available to authorized users when they need it",
            "Ensuring that data is accurate and has not been tampered with",
            "Ensuring that data is protected from unauthorized access and disclosure",
            "Ensuring that data is stored in a secure and reliable manner"
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
            "Data breaches and theft of sensitive information",
            "Distributed denial-of-service (DDoS) attacks",
            "Malware and viruses infecting computer systems",
            "Cross-site scripting (XSS) attacks"
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
    if (index === 9) {
        index ++;
    } else {
        index += 3;
    }
    updateStoffel();
    updateUI();
})

a4.addEventListener("click", () => {
    if (index === 9) {
        index ++;
    } else {
        index += 4;
    }
    updateStoffel();
    updateUI();
})



/*------------- Credits stuff -------------*/

// open modal by id
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});