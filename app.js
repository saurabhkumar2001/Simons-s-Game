let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "violet"];

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;
    //random button flash
    let random = Math.floor(Math.random() * 4);  // Fix: changed to *4 to include all 4 buttons
    let randomcolor = btns[random];
    let randbtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    buttonFlash(randbtn);
}

function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function btnpress() {
    let btn = this;
    buttonFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1); // Fix: Corrected parameter passing
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function checkAns(index) {
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;  // Fix: changed score to level
        document.querySelector("body").style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = 'white';
        }, 150);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
    btn.style.transform = 'translateY(-5px)'; // Move button up slightly
    setTimeout(() => {
        btn.style.transform = 'translateY(0)'; // Move back to original position
    }, 250);
}

