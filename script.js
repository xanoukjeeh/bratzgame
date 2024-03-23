const eyesColor = document.querySelectorAll(".eyes-3");
const eyeButtons = document.querySelectorAll("article:nth-of-type(1) button");
const lipColor = document.querySelectorAll(".lips-2");
const hairColor = document.querySelectorAll(".hair-1");
const hairButtons = document.querySelectorAll("article:nth-of-type(3) button");
const lipButtons = document.querySelectorAll("article:nth-of-type(2) button");

let play = document.getElementById("image-container");
    function speelMuziek() {
    let audio = new Audio("bratz.mp3");
    audio.play()
}
play.addEventListener("click" , speelMuziek)
https://www.youtube.com/watch?v=3xlws5og44U

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

function changingHairColor(color) {
    hairColor.forEach(hair => {
        hair.style.fill = color;
    });
}

function updateOpmerking() {
    const currentEyeColor = eyesColor[0].style.fill;
    const currentLipColor = lipColor[0].style.fill;
    const currentHairColor = hairColor[0].style.fill;

    let opmerking = "";

    // eyes 
    if (currentEyeColor === "red") {
        opmerking = "Deze kleur laat mijn ogen echt slayen!"
    } else if (currentEyeColor === "green") {
        opmerking = "Dit compliemnteert mijn huid echt!"
    } else if (currentEyeColor === "lightskyblue") {
        opmerking = "Wat en slaying oogkleur!"
    } else if (currentEyeColor === "brown") {
        opmerking = "Deze kleur is echt prachtig voor mij!"
    } else if (currentEyeColor === "pink") {
        opmerking = "Dit vind ik de mooiste oogkleur"
    }
    // lippen
    if (currentLipColor === "lightcoral") {
        opmerking = "Jouw rode lippen zijn zo levendig! ";
    } else if (currentLipColor === "deeppink") {
        opmerking = "Roze lippen staan je echt fantastisch! ";
    } else if (currentLipColor === "darkred") {
        opmerking = "Die paarse lippen maken je echt uniek! ";
    } else if (currentLipColor === "brown") {
        opmerking = "Die paarse lippen maken je echt uniek! ";
    } else if (currentLipColor === "magenta") {
        opmerking = "Die paarse lippen maken je echt uniek! ";
    }

    // haar
    if (currentHairColor === "gold") {
        opmerking = "Omg je lijkt nu echt op een Barbie >:(";
    } else if (currentHairColor === "saddlebrown") {
        opmerking = "Hey dit lijkt net op Anouk d'r haar :0";
    } else if (currentHairColor === "darkred") {
        opmerking = "Jouw darkred haar is zo elegant! ";
    } else if (currentHairColor === "chocolate") {
        opmerking = "Je deeppink haar past perfect bij je! ";
    } else if (currentHairColor === "pink") {
        opmerking = "Je pink haar past perfect bij je! ";
    }
    return opmerking.trim();
}

function giveOpmerking(opmerking) {
    const contentSection = document.getElementById("content");
    const existingOpmerkingHeader = contentSection.querySelector("h2");

    if (existingOpmerkingHeader) {
        existingOpmerkingHeader.textContent = ""; 
        existingOpmerkingHeader.textContent = opmerking; 
    } else {
        const opmerkingHeader = document.createElement("h2");
        opmerkingHeader.textContent = opmerking;
        opmerkingHeader.id = "opmerking";
        contentSection.appendChild(opmerkingHeader);
    }
}

// Event listeners voor de knoppen
eyeButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingEyeColor(color);
        const newOpmerking = updateOpmerking(); // Update opmerking
        giveOpmerking(newOpmerking);
    });
});

lipButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingLipColor(color);
        const newOpmerking = updateOpmerking(); // Update opmerking
        giveOpmerking(newOpmerking);
    });
});

hairButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingHairColor(color);
        const newOpmerking = updateOpmerking(); // Update opmerking
        giveOpmerking(newOpmerking);
    });
});
