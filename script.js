const eyesColor = document.querySelectorAll(".eyes-3");
const eyeButtons = document.querySelectorAll("article:nth-of-type(1) button");
const lipColor = document.querySelectorAll(".lips-2");
const lipButtons = document.querySelectorAll("article:nth-of-type(2) button");
const h1 = document.querySelector("h1");

function startGame() {
    // Voeg hier de functionaliteit toe om je game te starten
    alert("De game wordt gestart!");
}

function changingEyeColor(color) {
    eyesColor.forEach(eye => {
        eye.style.fill = color;
    });
}

function changingLipColor(color) {
    lipColor.forEach(lip => {
        lip.style.fill = color;
    });
}

eyeButtons.forEach(button => {
    button.addEventListener("click", function() {
        let color = this.dataset.color;
        changingEyeColor(color);
    });
});

lipButtons.forEach(button => {
    button.addEventListener("click", function() {
        let color = this.dataset.color;
        changingLipColor(color);
    });
});

