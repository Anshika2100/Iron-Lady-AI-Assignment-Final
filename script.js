const chatBox = document.getElementById("chat-box");

function botMessage(msg) {
    chatBox.innerHTML += `<div class="bot">🤖 ${msg}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function userMessage(msg) {
    chatBox.innerHTML += `<div class="user">🧑 ${msg}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Initial messages
botMessage("Welcome to Iron Lady Smart Assistant 😊");
botMessage("Please tell me your highest education (10th / 12th / Graduate)");

let step = 1;
let education = "";
let interest = "";

function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.toLowerCase();
    if (text === "") return;

    userMessage(text);
    input.value = "";

    if (step === 1) {
        education = text;
        botMessage("Are you a beginner or experienced?");
        step++;
    }
    else if (step === 2) {
        botMessage("Which field are you interested in? (IT / Data / Digital Marketing)");
        step++;
    }
    else if (step === 3) {
        interest = text;
        recommendCourse();
        step++;
    }
    else {
        handleQuestions(text);
    }
}

function recommendCourse() {
    if (interest.includes("it")) {
        botMessage("✅ Based on your profile, the **Java Full Stack Program** is best for you.");
        botMessage("📅 Duration: 6 Months");
        botMessage("💼 Placement Support Available");
    }
    else if (interest.includes("data")) {
        botMessage("✅ Based on your interest, the **Data Analytics Program** is recommended.");
        botMessage("📅 Duration: 4 Months");
        botMessage("💼 Placement Assistance Included");
    }
    else {
        botMessage("✅ The **Digital Marketing Program** is suitable for your profile.");
        botMessage("📅 Duration: 3 Months");
        botMessage("💼 Internship Support Available");
    }

    botMessage("You can ask: Will I get a job? | Is it beginner friendly? | How can I apply?");
}

function handleQuestions(text) {
    if (text.includes("job")) {
        botMessage("✔️ Yes, we provide placement support and interview preparation.");
    }
    else if (text.includes("beginner")) {
        botMessage("✔️ Yes, this program is completely beginner-friendly.");
    }
    else if (text.includes("apply")) {
        botMessage("✔️ You can apply through the Iron Lady website or book a counselling session.");
    }
    else {
        botMessage("Please ask a valid question 😊");
    }
}