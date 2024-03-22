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

    // Controleer de kleur van de ogen en voeg een bijpassend compliment toe
    if (currentEyeColor === "lightskyblue") {
        compliment = "Je hebt prachtige blauwe ogen! ";
    } else if (currentEyeColor === "green") {
        compliment = "Wow, jouw groene ogen zijn echt betoverend! ";
    } else if (currentEyeColor === "brown") {
        compliment = "Je hebt warme, mooie bruine ogen! ";

    }
    if (currentLipColor === "darkred") {
        compliment = "Jouw rode lippen zijn zo levendig! "; // Completely replace previous text
    } else if (currentLipColor === "pink") {
        compliment = "Roze lippen staan je echt fantastisch! "; // Completely replace previous text
    } else if (currentLipColor === "purple") {
        compliment = "Die paarse lippen maken je echt uniek! "; // Completely replace previous text
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
    // Zoek naar het bestaande h1-element binnen de sectie met id "content"
    const contentSection = document.getElementById("content");
    const existingComplimentHeader = contentSection.querySelector("h1");

    // If existing h1 element is found, update its text content
    if (existingComplimentHeader) {
        existingComplimentHeader.textContent = ""; // Clear existing content
        existingComplimentHeader.textContent = compliment; // Set new compliment
    } else {
        // If h1 element does not exist, create a new one and append it
        const complimentHeader = document.createElement("h1");
        complimentHeader.textContent = compliment;
        complimentHeader.id = "compliment"; // Set id for future reference
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
