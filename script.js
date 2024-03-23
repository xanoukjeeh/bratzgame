const eyesColor = document.querySelectorAll(".eyes-3");
const eyeButtons = document.querySelectorAll("article:nth-of-type(1) button");
const lipColor = document.querySelectorAll(".lips-2");
const hairColor = document.querySelectorAll(".hair-1");
const hairButtons = document.querySelectorAll("article:nth-of-type(3) button");
const lipButtons = document.querySelectorAll("article:nth-of-type(2) button");

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

function updateCompliment() {
    const currentEyeColor = eyesColor[0].style.fill;
    const currentLipColor = lipColor[0].style.fill;
    const currentHairColor = hairColor[0].style.fill;

    let compliment = "";

    // eyes 
    if (currentEyeColor === "red") {
        compliment = "Deze kleur laat mijn ogen echt slayen!"
    } else if (currentEyeColor === "green") {
        compliment = "Dit compliemnteert mijn huid echt!"
    } else if (currentEyeColor === "lightskyblue"){
        compliment = "Wat en slaying oogkleur!"
    } else if (currentEyeColor === "brown"){
        compliment = "Deze kleur is echt prachtig voor mij!"
    } else if (currentEyeColor === "pink") {
        compliment = "Dit vind ik de mooiste oogkleur"
    }
    // lippen
    if (currentLipColor === "darkred") {
        compliment = "Jouw rode lippen zijn zo levendig! ";
    } else if (currentLipColor === "pink") {
        compliment = "Roze lippen staan je echt fantastisch! ";
    } else if (currentLipColor === "purple") {
        compliment = "Die paarse lippen maken je echt uniek! ";
    }
    if (currentHairColor === "gold") {
        compliment = "Jouw blonde haar straalt! ";
    } else if (currentHairColor === "brunette") {
        compliment = "Je bruine haar past perfect bij je! ";
    } else if (currentHairColor === "black") {
        compliment = "Jouw zwarte haar is zo elegant! ";
    }
    return compliment.trim(); // Trim overtollige spaties aan het einde
}

function giveCompliment(compliment) {
    const contentSection = document.getElementById("content");
    const existingComplimentHeader = contentSection.querySelector("h2");


    if (existingComplimentHeader) {
        existingComplimentHeader.textContent = ""; // Clear existing content
        existingComplimentHeader.textContent = compliment; // Set new compliment
    } else {
        const complimentHeader = document.createElement("h2");
        complimentHeader.textContent = compliment;
        complimentHeader.id = "compliment";
        contentSection.appendChild(complimentHeader);
    }
}

// Event listeners voor de knoppen
eyeButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingEyeColor(color);
        const newCompliment = updateCompliment(); // Update compliment
        giveCompliment(newCompliment);
    });
});

lipButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingLipColor(color);
        const newCompliment = updateCompliment(); // Update compliment
        giveCompliment(newCompliment);
    });
});

hairButtons.forEach(button => {
    button.addEventListener("click", function () {
        let color = this.dataset.color;
        changingHairColor(color);
        const newCompliment = updateCompliment(); // Update compliment
        giveCompliment(newCompliment);
    });
});